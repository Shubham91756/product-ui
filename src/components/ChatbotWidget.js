import React, { useState } from 'react';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hi! How can I help you?", from: "bot" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => setOpen(!open);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, from: "user" };
    const botMsg = { text: "Thanks for your message! We'll get back soon.", from: "bot" };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div>
      <button className="chatbot-toggle" onClick={toggleChat}>💬 Need Help?</button>
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">Motherson Assistant</div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your query..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
