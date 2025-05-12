import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>MoodMuse</h2>
          <p>Emotion-powered content to uplift your day.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#mood-selector">Mood Selector</a></li>
            <li><a href="#journal">Journal</a></li>
            <li><a href="#content-feed">Content Feed</a></li>
            <li><a href="#express">Express Mode</a></li>
            <li><a href="#uplift">Uplift</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:support@moodmuse.app">support@moodmuse.app</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MoodMuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
