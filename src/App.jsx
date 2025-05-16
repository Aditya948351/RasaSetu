import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import EmotionalSpectrum from './components/EmotionalSpectrum/EmotionalSpectrum';
import HeroSection from './components/Hero/HeroSection';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ExpressMode from './components/ExpressMode/ExpressMode';
import MoodSelector from './components/MoodSelector/MoodSelector'; 
import Journal from './components/Journal/Journal';
import Profile from './components/Profile/Profile';
import ExternalSitePage from './components/ExternalSitePage/ExternalSitePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Unified auth state

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <br />
        <Routes>
          <Route path="/" element={<HeroSection isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mood" element={<MoodSelector />} />
          <Route path="/emotionalspectrum" element={<EmotionalSpectrum />} />
          <Route path="/express-mode" element={<ExpressMode />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/external" element={<ExternalSitePage />} />
        </Routes>
        <br />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
