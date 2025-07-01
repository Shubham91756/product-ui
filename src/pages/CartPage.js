import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p style={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <div style={styles.list}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.item}>
                <img src={item.image} alt={item.title} style={styles.image} />
                <div style={styles.details}>
                  <h3 style={styles.name}>{item.title}</h3>
                  <p style={styles.price}>₹{item.price.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.totalBox}>
            <h2>Total: ₹{total.toFixed(2)}</h2>
            <Link to="/checkout" style={styles.checkoutBtn}>
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    background: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#a0041e',
    textAlign: 'center',
  },
  empty: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#555',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  item: {
    display: 'flex',
    gap: '1.5rem',
    background: '#fff',
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  price: {
    fontSize: '1rem',
    color: '#a0041e',
    fontWeight: 'bold',
  },
  removeBtn: {
    padding: '0.4rem 1rem',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
  totalBox: {
    marginTop: '2rem',
    textAlign: 'center',
  },
  checkoutBtn: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.6rem 1.4rem',
    backgroundColor: '#a0041e',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default CartPage;
