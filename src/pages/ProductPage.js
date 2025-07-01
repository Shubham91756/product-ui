import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sort, setSort] = useState('');

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setDisplayedProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (sort === 'low') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'high') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setDisplayedProducts(filtered);
  }, [search, selectedCategory, sort, products]);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);

    const matches = products.filter((p) =>
      p.title.toLowerCase().includes(val.toLowerCase())
    );

    setSuggestions(val ? matches.slice(0, 5) : []);
  };

  const handleSuggestionClick = (text) => {
    setSearch(text);
    setSuggestions([]);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message="Failed to load products." />;

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ color: '#a0041e', textAlign: 'center' }}>Motherson Product Catalog</h1>

      <div style={styles.searchFilterBox}>
        <div style={styles.searchWrapper}>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search for products..."
            style={styles.searchInput}
          />
          {suggestions.length > 0 && (
            <div style={styles.suggestions}>
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  style={styles.suggestionItem}
                  onClick={() => handleSuggestionClick(item.title)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={styles.dropdown}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)} style={styles.dropdown}>
          <option value="">Sort by Price</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div style={styles.grid}>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  searchFilterBox: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.5rem',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchWrapper: {
    position: 'relative',
    width: '300px'
  },
  searchInput: {
    width: '300px',
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  },
  suggestions: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: '#fff',
    border: '1px solid #ccc',
    borderTop: 'none',
    zIndex: 10,
    maxHeight: '150px',
    overflowY: 'auto',
    borderRadius: '0 0 5px 5px'
  },
  suggestionItem: {
    padding: '0.5rem',
    cursor: 'pointer',
    borderBottom: '1px solid #eee'
  },
  dropdown: {
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minWidth: '180px',
    height: '40px'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  }
};

export default ProductPage;
