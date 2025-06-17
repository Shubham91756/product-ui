import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChatbotPage() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { sender: 'user', text: input },
        { sender: 'bot', text: `You said: ${input}` },
      ]);
      setInput('');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <button onClick={() => navigate('/products')} style={styles.back}>← Back</button>
        <h2>Chat Assistant</h2>
      </div>

      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.message,
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              background: msg.sender === 'user' ? '#007bff' : '#e4e4e4',
              color: msg.sender === 'user' ? '#fff' : '#000',
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.inputBox}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.send}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    background: '#f9f9f9',
  },
  header: {
    padding: '1rem',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  back: {
    fontSize: '1.2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  chatBox: {
    flex: 1,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    overflowY: 'auto',
  },
  message: {
    padding: '0.6rem 1rem',
    borderRadius: '15px',
    maxWidth: '75%',
  },
  inputBox: {
    padding: '1rem',
    display: 'flex',
    gap: '1rem',
    borderTop: '1px solid #ddd',
    background: '#fff',
  },
  input: {
    flex: 1,
    padding: '0.6rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  send: {
    background: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ChatbotPage;
