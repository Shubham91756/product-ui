import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    const stored = JSON.parse(localStorage.getItem('cartItems')) || [];
    const exists = stored.find((item) => item.id === product.id);
    if (!exists) {
      localStorage.setItem('cartItems', JSON.stringify([...stored, product]));
      alert('Product added to cart!');
    } else {
      alert('Product already in cart.');
    }
  };

  const handleBuyNow = () => {
    const stored = JSON.parse(localStorage.getItem('cartItems')) || [];
    const exists = stored.find((item) => item.id === product.id);
    if (!exists) {
      localStorage.setItem('cartItems', JSON.stringify([...stored, product]));
    }
    window.location.href = "/checkout";
  };

  if (!product) return <p style={{ padding: '2rem' }}>Loading...</p>;

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img src={product.image} alt={product.title} style={styles.image} />
        <div style={styles.info}>
          <h2 style={styles.title}>{product.title}</h2>
          <p style={styles.category}>Category: {product.category}</p>
          <p style={styles.price}>₹{product.price.toFixed(2)}</p>
          <p style={styles.desc}>{product.description}</p>

          <div style={styles.buttonGroup}>
            <button onClick={handleAddToCart} style={styles.cartBtn}>Add to Cart</button>
            <button onClick={handleBuyNow} style={styles.buyBtn}>Buy Now</button>
          </div>

          <Link to="/products" style={styles.back}>← Back to Products</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '2rem',
    fontFamily: `'Segoe UI', sans-serif`,
    background: '#f5f5f5',
    minHeight: '100vh',
  },
  card: {
    display: 'flex',
    gap: '2rem',
    background: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 0 20px rgba(0,0,0,0.08)',
  },
  image: {
    width: '300px',
    height: '300px',
    objectFit: 'contain',
    borderRadius: '10px',
    background: '#fafafa',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#a0041e',
    marginBottom: '0.5rem',
  },
  category: {
    fontStyle: 'italic',
    color: '#666',
    marginBottom: '0.5rem',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#222',
    marginBottom: '1rem',
  },
  desc: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
    color: '#444',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  cartBtn: {
    padding: '0.7rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#fff',
    color: '#a0041e',
    border: '2px solid #a0041e',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s ease',
  },
  buyBtn: {
    padding: '0.7rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#a0041e',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s ease',
  },
  back: {
    textDecoration: 'none',
    color: '#a0041e',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
};

export default ProductDetail;
