import React from 'react';

const FilterBar = ({ category, setCategory, sort, setSort }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', padding: '1rem 2rem' }}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="title-asc">Title: A → Z</option>
        <option value="title-desc">Title: Z → A</option>
      </select>
    </div>
  );
};

export default FilterBar;
