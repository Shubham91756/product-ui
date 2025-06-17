import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleContinue = () => {
    // (Optional) Save username in localStorage
    if (username.trim()) {
      localStorage.setItem('username', username);
    }
    navigate('/products');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome to My Store</h2>
        <input
          placeholder="Enter username or continue as guest"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleContinue} style={styles.button}>
          Continue
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f5f5f5',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '0.6rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LoginPage;
