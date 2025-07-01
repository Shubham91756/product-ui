import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('guest');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.margin = 0;
  }, []);

  const handleLogin = () => {
    localStorage.setItem('username', username || 'Guest');
    localStorage.setItem('role', role);
    navigate('/products');
  };

  return (
    <>
      <div style={styles.wrapper}>
        <div className="login-card" style={styles.card}>
          <img src="/motherson-logo.png" alt="Motherson Logo" style={styles.logo} />
          <h1 style={styles.brand}>Motherson Ltd</h1>
          <p style={styles.subtitle}>Welcome</p>

          <input
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            className="login-input"
          />

          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="role"
                value="guest"
                checked={role === 'guest'}
                onChange={() => setRole('guest')}
              />
              Login as Guest
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
              />
              Login as User
            </label>
          </div>

          <button onClick={handleLogin} style={styles.button} className="login-btn">
            Continue
          </button>

          <p style={styles.footer}>© 2025 Motherson Ltd. All rights reserved.</p>
        </div>
      </div>

      <style>
        {`
          .login-card {
            opacity: 0;
            transform: scale(0.95);
            animation: fadeIn 0.8s ease forwards;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .login-btn {
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .login-btn:hover {
            background-color: #870316;
            transform: scale(1.05);
          }

          .login-input:focus {
            outline: none;
            border: 1px solid #a0041e;
            box-shadow: 0 0 5px rgba(160, 4, 30, 0.3);
          }
        `}
      </style>
    </>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    background: 'linear-gradient(to right, #0d1b2a, #a0041e)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: `'Segoe UI', sans-serif`,
  },
  card: {
    background: '#fff',
    padding: '2.5rem',
    borderRadius: '14px',
    textAlign: 'center',
    width: '400px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  logo: {
    width: '100px',
    marginBottom: '1rem',
  },
  brand: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#a0041e',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#333',
    fontSize: '1rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '1.2rem',
    fontSize: '0.95rem',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  button: {
    backgroundColor: '#a0041e',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '1.2rem',
  },
  footer: {
    fontSize: '0.75rem',
    color: '#888',
  },
};

export default LoginPage;
