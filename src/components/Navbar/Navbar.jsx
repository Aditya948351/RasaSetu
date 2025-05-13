import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => setUser(null));
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={toggleMenu} className="navbar-logo">RasaSetu</Link>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li>
          <Link 
            to="/emotionalspectrum" 
            onClick={toggleMenu}
            className={!user ? 'disabled' : ''}
            aria-disabled={!user}
          >
            Emotional Control
          </Link>
        </li>
        <li>
          <Link 
            to="/mood" 
            onClick={toggleMenu}
            className={!user ? 'disabled' : ''}
            aria-disabled={!user}
          >
            Mood Selector
          </Link>
        </li>
        <li>
          <Link 
            to="/express-mode" 
            onClick={toggleMenu}
            className={!user ? 'disabled' : ''}
            aria-disabled={!user}
          >
            Soothing ASMR
          </Link>
        </li>
        <li>
          <Link 
            to="/journal" 
            onClick={toggleMenu}
            className={!user ? 'disabled' : ''}
            aria-disabled={!user}
          >
            Emotions Tracker
          </Link>
        </li>
      </ul>

      <div className="navbar-auth desktop-auth">
        {!user ? (
          <>
            <Link to="/login" className="btn login">Login</Link>
            <Link to="/signup" className="btn signup">Sign Up</Link>
          </>
        ) : (
          <div className="user-dropdown">
            <img 
              src={user.photoURL || '/images/default-avatar.png'} 
              alt="User Avatar" 
              className="user-avatar"
            />
            <div className="dropdown-content">
              <p>{user.displayName || 'User'}</p>
              <Link to="/profile" className="dropdown-link" onClick={toggleMenu}>Profile</Link>
              <button onClick={handleLogout} aria-label="Logout">Logout</button>
            </div>
          </div>
        )}
      </div>

      <div 
        className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
