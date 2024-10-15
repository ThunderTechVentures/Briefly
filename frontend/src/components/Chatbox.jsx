// components/Chatbox.jsx
'use client'; // Required for client-side interactivity in Next.js

import { useState } from 'react';
import ChatInput from './ChatInput';
import Message from './Message';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message, sender) => {
    setMessages([...messages, { message, sender }]);
  };

  const handleSendMessage = async (query) => {
    addMessage(query, 'user'); // Display user query immediately
    addMessage('...', 'bot');  // Placeholder for bot response (loading)

    // Fetch response from the chatbot API
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.slice(0, prevMessages.length - 1); // Remove loading placeholder
      return [...updatedMessages, { message: data.response, sender: 'bot' }];
    });
  };

  return (
    <div className="chatbox-container flex w-full flex-col p-4 bg-gray-100 rounded-md h-80">
      <div className="messages-container flex-grow overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} message={msg.message} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbox;
