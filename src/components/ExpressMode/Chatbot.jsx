import React, { useState } from 'react';


const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");

  const handleUserMessage = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (userMessage.toLowerCase().includes("hi")) {
      setBotResponse("Hello! How can I help you today?");
    } else if (userMessage.toLowerCase().includes("sad")) {
      setBotResponse("I'm really sorry to hear that. Let's talk and find a way to brighten your mood!");
    } else {
      setBotResponse("Sorry, I cant respond with that thing?");
    }
    setUserMessage("");
  };

  return (
    <div className="chatbot-container">
      <h3>🗨️ Chatbot</h3>
      <div className="chatbox">
        <div className="bot-response">
          <p>{botResponse}</p>
        </div>
        <input
          type="text"
          value={userMessage}
          onChange={handleUserMessage}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
