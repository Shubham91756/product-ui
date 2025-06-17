import React, { useState, createContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ChatbotPage from './pages/ChatbotPage'; // ✅ Import Chatbot page

export const ThemeContext = createContext(); // ✅ Export theme context

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appStyle = {
    backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  };

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      <div style={appStyle}>
        {/* ✅ Top bar with theme toggle and link */}
        <div style={styles.topbar}>
          <div style={styles.left}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/products" style={styles.link}>Products</Link>
            <Link to="/chatbot" style={styles.link}>💬 Need Help?</Link>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} style={styles.toggle}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* ✅ Routes */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} /> {/* ✅ Chatbot route */}
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

const styles = {
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  toggle: {
    padding: '0.4rem 1rem',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    background: '#007bff',
    color: '#fff',
    border: 'none',
  },
  left: {
    display: 'flex',
    gap: '1.2rem',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#007bff',
  },
};

export default App;
