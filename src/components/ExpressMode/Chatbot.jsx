import React, { useState } from 'react';
import "./Chatbot.css"

const moodPlaylists = {
  sad: {
    message: "Hey, I hear you. You're not alone — and even though I’m just a digital assistant,\n I’m here with empathy and a strong resolve to brighten your day. 🌤️\nLet’s turn that sadness into strength with a thoughtfully curated digital experience\n that uplifts your mood — like a mood-lifting kit curated just for you:\n🎶Handpicked Songs to Boost Your Spirit😊",
    videos: [
      { title: "Tera Naam Doon", url: "https://www.youtube.com/embed/Vu4jlm4jrug?si=CuD_YJj8cFf_MeVr" },
      { title: "Ritviz - Liggi", url: "https://www.youtube.com/embed/6BYIKEH0RCQ?si=T0o2db44iJLJ2bry" },
      { title: "Kho Gaye Hum Kahan", url: "https://www.youtube.com/embed/vt4jX0iRgCg?si=o5mmW7Wg3MRw_BMV" },
      { title: "Bye – Iqlipse Nova", url: "https://www.youtube.com/embed/DbiRVNeZPnw?si=USzHsHLj4dFu7IJF" },
      { title: "Hum Nahi Sudhrenge", url: "https://www.youtube.com/embed/9HbmDkLpXkU?si=SgwkmOMgwtsWMD0u" },
    ],
  },
  happy: {
    message: "🌞 You're shining today! Keep up that energy. Here’s something to fuel that joy!",
    videos: [
      { title: "Ilahi – YJHD", url: "https://www.youtube.com/embed/8ZK_S-46KwE" },
      { title: "Udd Gaye – Ritviz", url: "https://www.youtube.com/embed/v2-9rIL_f4w?si=u0YmTMSakK6XUbXa" },
      { title: "Zinda – Bhaag Milkha Bhaag", url: "https://www.youtube.com/embed/P9pzm5b6FFY" },
    ],
  },
  angry: {
    message: "🔥 Take a deep breath. Channel that fire into focus. Here’s a playlist to cool your nerves and elevate your mindset:",
    videos: [
      { title: "Believer – Imagine Dragons", url: "https://www.youtube.com/embed/7wtfhZwyrcc" },
      { title: "Kar Har Maidaan Fateh", url: "https://www.youtube.com/embed/IdnBkIwfV1A" },
      { title: "Yalgaar – CarryMinati", url: "https://www.youtube.com/embed/3s1rvMFUweQ" },
    ],
  },
  fear: {
    message: "😟 It’s okay to feel scared sometimes. Courage isn’t the absence of fear, it’s acting in spite of it. These songs will lift you up:",
    videos: [
      { title: "Hall of Fame – The Script", url: "https://www.youtube.com/embed/mk48xRzuNvA" },
      { title: "On Top of the World – Imagine Dragons", url: "https://www.youtube.com/embed/w5tWYmIOWGk" },
      { title: "Apna Time Aayega – Gully Boy", url: "https://www.youtube.com/embed/jFbqViyFfY0" },
    ],
  },
};

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [botResponse, setBotResponse] = useState(null);

  const detectMood = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes("sad")) return "sad";
    if (msg.includes("happy") || msg.includes("joy")) return "happy";
    if (msg.includes("angry") || msg.includes("mad")) return "angry";
    if (msg.includes("fear") || msg.includes("scared")) return "fear";
    return null;
  };

  const handleSendMessage = () => {
    const mood = detectMood(userMessage);

    if (mood) {
      setBotResponse(moodPlaylists[mood]);
    } else if (userMessage.toLowerCase().includes("hi")) {
      setBotResponse({ message: "Hello! How can I help you today?", videos: [] });
    } else {
      setBotResponse({ message: "Sorry, I can't respond to that yet. Please try again with how you're feeling (e.g., 'I'm sad')", videos: [] });
    }

    setUserMessage("");
  };

  return (
    <div className="chatbot-container">
      <h3>🗨️ Chatbot</h3>
      <div className="chatbox">
        {botResponse && (
          <div className="bot-response">
            <p>{botResponse.message}</p>
            {botResponse.videos.length > 0 && (
              <div className="video-playlist">
                {botResponse.videos.map((video, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <strong>{video.title}</strong>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<iframe width="100%" height="315" src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your mood (e.g. I'm sad)..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
