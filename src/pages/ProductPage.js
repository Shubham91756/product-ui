import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import { ThemeContext } from '../App';

function ProductPage() {
  const { darkMode } = useContext(ThemeContext);

  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
    let filtered = [...products];

    if (category !== 'all') {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'title-asc') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'title-desc') {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    setDisplayedProducts(filtered);
  }, [category, sort, searchTerm, products]);

  if (loading) return <p style={{ padding: '2rem' }}>Loading products...</p>;
  if (error) return <p style={{ padding: '2rem' }}>Failed to load products.</p>;

  return (
    <div style={{ background: darkMode ? '#1e1e1e' : '#fff', minHeight: '100vh', color: darkMode ? '#fff' : '#000' }}>
      
      {/* 💬 Chatbot Help Link */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '1rem 2rem',
      }}>
        <Link to="/chatbot" style={{
          textDecoration: 'none',
          background: '#007bff',
          color: '#fff',
          padding: '0.6rem 1rem',
          borderRadius: '5px',
          fontWeight: 'bold',
          fontSize: '0.9rem'
        }}>
          💬 Need Help?
        </Link>
      </div>

      {/* 🔍 Search Bar */}
      <div style={{ padding: '0 2rem' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            background: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
          }}
        />
      </div>

      {/* 🔽 Filter and Sort */}
      <FilterBar
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      {/* 📦 Product Grid */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px',
          justifyContent: 'center',
        }}
      >
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
