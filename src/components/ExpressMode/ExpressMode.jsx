import React, { useState, useEffect } from "react";
import "./ExpressMode.css";
import Chatbot from "./Chatbot";

// Sample motivational quote and random thoughts
const quotes = [
  "Believe you can and you're halfway there.",
  "You are stronger than you think.",
  "The best way to predict the future is to create it.",
];

const randomThoughtsAPI = "https://api.quotable.io/random"; // A public API for random thoughts

const DinosaurGame = () => {
  useEffect(() => {
    // You can add any game initialization code here if necessary
  }, []);

  return (
    <div className="game-container">
      <h3>Free Online Games</h3>
      {/* The game UI or implementation Need to call this Create a separate Issue For this and Let me have Your Changes to be known*/}
      <iframe
        src="https://www.crazygames.com/"
        width="100%"
        height="100%"
        title="Dinosaur Game"
      />
    </div>
  );
};

const ExpressMode = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [healthStatus, setHealthStatus] = useState(50); // Simulating user health
  const [randomThought, setRandomThought] = useState("");
  const [breathingStatus, setBreathingStatus] = useState(0); // For breathing circle animation
  const [soothingImage, setSoothingImage] = useState(""); // For soothing landscape image

  const toggleMode = () => {
    setIsPremium((prev) => !prev);
  };

  const playMusic = () => {
    const musicPlayer = document.getElementById("bg-music");
    musicPlayer.play();
    setIsMusicPlaying(true);
  };

  const stopMusic = () => {
    const musicPlayer = document.getElementById("bg-music");
    musicPlayer.pause();
    setIsMusicPlaying(false);
  };

  const handleHealthChange = (event) => {
    setHealthStatus(event.target.value);
  };

  // Fetch random thought and soothing landscape image on mount
  useEffect(() => {
    const fetchRandomThought = async () => {
      try {
        const response = await fetch(randomThoughtsAPI);
        const data = await response.json();
        setRandomThought(data.content);
      } catch (error) {
        console.error("Error fetching random thought:", error);
      }
    };

    const fetchSoothingImage = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=landscape&client_id=0GPqR3ps25EnUBGaAVGQSXiploy3TsqBW-ScxHrOEPk"
        );
        const data = await response.json();
        setSoothingImage(data[0].urls.regular);
      } catch (error) {
        console.error("Error fetching soothing image:", error);
      }
    };

    fetchRandomThought();
    fetchSoothingImage();

    if (isPremium) {
      playMusic();
    } else {
      stopMusic();
    }

    const breathingTimer = setInterval(() => {
      setBreathingStatus((prevStatus) => (prevStatus + 1) % 4); // Cycles through 0 to 3 for animation
    }, 1000);

    return () => {
      clearInterval(breathingTimer);
    };
  }, [isPremium]);

  return (
    <div className="express-mode-container">
      <div className="nature-bg-overlay" style={{ backgroundImage: `url(${soothingImage})` }}></div>

      <div className="express-mode-content">
        <h2 className="page-title">🌿 Express Mode: Relax, Breathe & Play</h2>

        {/* Mode Toggle */}
        <div className="mode-toggle">
          <label htmlFor="mode-switch" className="mode-label">
            Switch Mode
          </label>
          <input
            type="checkbox"
            id="mode-switch"
            checked={isPremium}
            onChange={toggleMode}
            className="mode-switch"
          />
        </div>
        {/* Background Music this should be removed */}
        <audio id="bg-music">
        </audio>

        {/* Premium Mode Features */}
        {isPremium ? (
          <div className="premium-section">
            <div className="premium-feature chatbot-feature">
              <h4>🗣️ Chatbot Assistant</h4>
              <Chatbot />
            </div>

            <div className="premium-feature">
              <h4>🎮 Exclusive Games</h4>
              <DinosaurGame />
            </div>

            <div className="premium-feature">
              <h4>💆‍♂️ Guided Breathing</h4>
              <div className="breathing-exercise">
                <div
                  className={`breathing-circle ${
                    breathingStatus === 0
                      ? "in"
                      : breathingStatus === 1
                      ? "hold"
                      : breathingStatus === 2
                      ? "out"
                      : "hold"
                  }`}
                />
                <p>
                  {breathingStatus === 0
                    ? "Inhale..."
                    : breathingStatus === 1
                    ? "Hold..."
                    : breathingStatus === 2
                    ? "Exhale..."
                    : "Hold..."}
                </p>
              </div>
            </div>

            <div className="premium-feature">
              <h4>🔊 Calm Music & Soundscapes</h4>
              <p>Enjoy calming background music and soundscapes tailored for relaxation and focus.</p>
            </div>

            <div className="premium-feature">
              <h4>🌿 Customizable Nature Themes</h4>
              <p>Customize the nature theme and background to create a more personalized and calming environment.</p>
            </div>

            <div className="premium-feature">
              <h4>🧘‍♂️ Personalized Meditation Guide</h4>
              <p>
                Get personalized meditation sessions based on your preferences, stress levels, and goals. Enhance your mindfulness experience!
              </p>
            </div>
          </div>
        ) : (
          <div className="basic-mode-showcase">
            <h3>🆓 Free Mode</h3>
            <p>You have access to basic relaxation features. Upgrade to Premium for more options!</p>
            <div className="upgrade-message">
              <p>🚀 Upgrade to Premium to access full features and more!</p>
            </div>
          </div>
        )}

        <div className="motivational-quote">
          <blockquote>"{quote}"</blockquote>
        </div>

        <div className="random-thought">
          <h3>💭 Random Thought</h3>
          <p>{randomThought}</p>
        </div>

        <div className="health-status">
          <h3>🩺 Health Status: {healthStatus}%</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={healthStatus}
            onChange={handleHealthChange}
            className="health-slider"
          />
          <p>Track your relaxation level. A higher percentage means you're more relaxed!</p>
        </div>

        <div className="additional-resources">
          <h3>🎧 Mindful Resources</h3>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=I77hh5I69gA" target="_blank" rel="noopener noreferrer">
                Guided Breathing Video
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/playlist/6uaZZTHVsbAWGDR9eNhuos" target="_blank" rel="noopener noreferrer">
                Calm Music Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpressMode;
