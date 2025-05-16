import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ isLoggedIn }) => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to RasaSetu</h1>
          <p className="hero-subtitle">
            Your personal guide to emotional clarity and content therapy. Track your feelings, reflect deeply, and get content that heals.
          </p>
          {/* */}
          <Link 
            to="/external" 
            className="hero-button" 
            disabled={!isLoggedIn}  // Disable button until logged in
            style={{ pointerEvents: isLoggedIn ? 'auto' : 'none', opacity: isLoggedIn ? 1 : 0.5 }} // Disable button with styles
          >
            Talk to our AI Avatar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
