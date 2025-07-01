import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchBar({ categories }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('q') || '';
  const selectedCategories = searchParams.getAll('category');
  const sort = searchParams.get('sort') || '';

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const newParams = new URLSearchParams(searchParams.toString());
    const current = newParams.getAll('category');

    if (current.includes(category)) {
      const updated = current.filter((c) => c !== category);
      newParams.delete('category');
      updated.forEach((c) => newParams.append('category', c));
    } else {
      newParams.append('category', category);
    }

    setSearchParams(newParams);
  };

  const handleSortChange = (e) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('sort', e.target.value);
    setSearchParams(newParams);
  };

  const handleSearch = (e) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('q', e.target.value);
    setSearchParams(newParams);
  };

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleSearch}
        style={styles.searchInput}
      />

      <select value={sort} onChange={handleSortChange} style={styles.dropdown}>
        <option value="">Sort by</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>

      <div style={styles.categoryBox}>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Filter by Category:</p>
        {categories.map((cat) => (
          <label key={cat} style={styles.categoryItem}>
            <input
              type="checkbox"
              value={cat}
              checked={selectedCategories.includes(cat)}
              onChange={handleCategoryChange}
              style={{ marginRight: '8px' }}
            />
            {cat}
          </label>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '20px',
  },
  searchInput: {
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  dropdown: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    width: '200px',
  },
  categoryBox: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    background: '#f9f9f9',
  },
  categoryItem: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
  },
};

export default SearchBar;
