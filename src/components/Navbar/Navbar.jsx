import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Handle login state and user info
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);  // Set user when logged in
      } else {
        setUser(null);  // Clear user when logged out
      }
    });
    return () => unsubscribe();
  }, []);

  // Logout function
  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={toggleMenu}><div className="navbar-logo">RasaSetu</div></Link>

      {/* Mobile Navigation Links */}
      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        
        {/* Mood Selector Link, disabled if not logged in */}
        <li>
          <Link 
            to="/mood" 
            onClick={toggleMenu} 
            className={user ? '' : 'disabled'}
            aria-disabled={user ? 'false' : 'true'}
          >
            Mood Selector
          </Link>
        </li>

        {/* Express Mode Link, disabled if not logged in */}
        <li>
          <Link 
            to="/express-mode" 
            onClick={toggleMenu} 
            className={user ? '' : 'disabled'}
            aria-disabled={user ? 'false' : 'true'}
          >
            Express Mode
          </Link>
        </li>

        {/* Journal Link, disabled if not logged in */}
        <li>
          <Link 
            to="/journal" 
            onClick={toggleMenu} 
            className={user ? '' : 'disabled'}
            aria-disabled={user ? 'false' : 'true'}
          >
            Journal
          </Link>
        </li>
      </div>

      {/* Desktop Authentication Links or User Dropdown */}
      <div className="navbar-auth desktop-auth">
        {!user ? (
          <>
            <Link to="/login" className="btn login">Login</Link>
            <Link to="/signup" className="btn signup">Sign Up</Link>
          </>
        ) : (
          <div className="user-dropdown">
            {/* User Avatar */}
            <img 
              src={user.photoURL || '/images/default-avatar.png'} 
              alt="User" 
              className="user-avatar" 
              aria-label="User Profile" 
            />
            {/* Dropdown Menu */}
            <div className="dropdown-content">
              <p>{user.displayName || 'User'}</p>

              {/* Profile Link */}
              <Link to="/profile" className="dropdown-link" onClick={toggleMenu}>
                Profile
              </Link>

              {/* Logout */}
              <button onClick={handleLogout} aria-label="Logout">Logout</button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Hamburger Menu */}
      <div 
        className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
