import React from 'react';

function ErrorMessage({ message = "Something went wrong!" }) {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>⚠️ Error</h2>
      <p style={styles.message}>{message}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '2rem',
    textAlign: 'center',
    color: '#b00020',
    background: '#fff3f3',
    border: '1px solid #ffcccc',
    borderRadius: '8px',
    margin: '2rem',
  },
  heading: {
    fontSize: '1.5rem',
  },
  message: {
    fontSize: '1.2rem',
  },
};

export default ErrorMessage;
