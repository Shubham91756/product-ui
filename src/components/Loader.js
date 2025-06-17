import React from 'react';

function Loader() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading products...</p>
    </div>
  );
}

const styles = {
  container: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '6px solid #eee',
    borderTop: '6px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '1rem',
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default Loader;
