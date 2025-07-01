import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ data }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/products/${data.id}`)}
      className="fade-in"
    >
      <img
        src={data.image}
        alt={data.title}
        style={styles.image}
      />
      <h4 style={styles.title}>{data.title}</h4>
      <p style={styles.price}>₹{data.price}</p>
      <small style={styles.category}>{data.category}</small>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    width: '250px',
    background: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'fadeIn 0.5s ease-in-out',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'contain',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    minHeight: '50px',
    overflow: 'hidden',
    fontWeight: '500',
    color: '#333',
  },
  price: {
    fontWeight: 'bold',
    color: '#a0041e',
    marginBottom: '0.25rem',
  },
  category: {
    fontSize: '0.85rem',
    color: '#777',
  },
};

export default ProductCard;
