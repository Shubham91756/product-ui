import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  // Don’t show header on login page
  if (location.pathname === '/') return null;

  return (
    <div style={styles.header}>
      <Link to="/products" style={styles.brand}>Motherson Ltd</Link>
      <Link to="/cart" style={styles.cart}>🛒 Cart</Link>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#a0041e',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  brand: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
  cart: {
    color: '#fff',
    fontSize: '1.1rem',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default Header;
