import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CheckoutPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cartItems');
    if (stored) {
      setItems(JSON.parse(stored));
    }

    // Clear cart after a delay
    const timer = setTimeout(() => {
      localStorage.removeItem('cartItems');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✅ Order Confirmed</h1>
      <p style={styles.message}>Thank you for your purchase! Your items will be delivered soon.</p>

      {items.length > 0 ? (
        <>
          <div style={styles.summary}>
            {items.map((item) => (
              <div key={item.id} style={styles.item}>
                <span style={styles.name}>{item.title}</span>
                <span style={styles.price}>₹{item.price.toFixed(2)}</span>
              </div>
            ))}
            <div style={styles.total}>
              <strong>Total:</strong> ₹{total.toFixed(2)}
            </div>
          </div>
        </>
      ) : (
        <p style={styles.loading}>Processing your order...</p>
      )}

      <Link to="/products" style={styles.link}>← Continue Shopping</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem',
    fontFamily: `'Segoe UI', sans-serif`,
    textAlign: 'center',
    background: '#fdfdfd',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.2rem',
    color: '#a0041e',
    marginBottom: '0.5rem',
  },
  message: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '2rem',
  },
  summary: {
    margin: '2rem auto',
    maxWidth: '500px',
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  name: {
    maxWidth: '300px',
    textAlign: 'left',
  },
  price: {
    fontWeight: 'bold',
    color: '#a0041e',
  },
  total: {
    borderTop: '1px solid #ddd',
    paddingTop: '1rem',
    fontSize: '1.2rem',
    textAlign: 'right',
    marginTop: '1rem',
    color: '#a0041e',
  },
  loading: {
    fontStyle: 'italic',
    color: '#888',
  },
  link: {
    display: 'inline-block',
    marginTop: '2rem',
    textDecoration: 'none',
    color: '#a0041e',
    fontWeight: 'bold',
  },
};

export default CheckoutPage;
