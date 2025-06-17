import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ data }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.card}
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
    width: '220px',
    background: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
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
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
  },
  category: {
    fontSize: '0.8rem',
    color: '#777',
  },
};

export default ProductCard;
