import React, { useState } from 'react';

function ChatbotPage() {
  const [messages, setMessages] = useState([
    { text: 'Hi! I’m your assistant. How can I help?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;

    setMessages((prev) => [
      ...prev,
      { text: input, sender: 'user' },
      { text: 'Sorry, I’m a static bot. More features coming soon!', sender: 'bot' },
    ]);
    setInput('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🤖 Motherson Help Assistant</h2>
      <div style={styles.chatWindow}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={msg.sender === 'user' ? styles.userMsg : styles.botMsg}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    fontFamily: 'sans-serif',
    padding: '1rem',
    border: '2px solid #a0041e',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    color: '#a0041e',
    marginBottom: '1rem',
  },
  chatWindow: {
    height: '300px',
    overflowY: 'auto',
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '8px',
    background: '#f9f9f9',
    marginBottom: '1rem',
  },
  botMsg: {
    backgroundColor: '#eee',
    padding: '8px 12px',
    borderRadius: '20px',
    marginBottom: '10px',
    maxWidth: '70%',
  },
  userMsg: {
    backgroundColor: '#a0041e',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '20px',
    marginBottom: '10px',
    maxWidth: '70%',
    marginLeft: 'auto',
    textAlign: 'right',
  },
  inputGroup: {
    display: 'flex',
    gap: '0.5rem',
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    backgroundColor: '#a0041e',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ChatbotPage;
