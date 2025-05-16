import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 80) {
        setHideNavbar(true); // hide navbar
      } else {
        setHideNavbar(false); // show navbar
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${hideNavbar ? 'navbar-hidden' : ''}`}>
    <Link to="/" onClick={toggleMenu} className="navbar-logo">
      <div className='logo-wrapper'>
        <img src="https://github.com/Aditya948351/RasaSetu/blob/main/src/assets/RasaSetu-Icon.jpg?raw=true" alt="RasaSetu Logo" className="navbar-logo-img" />
      </div>
    </Link> 

      <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/emotionalspectrum" onClick={toggleMenu} className={!user ? 'disabled' : ''}>Emotional Control</Link></li>
        <li><Link to="/mood" onClick={toggleMenu} className={!user ? 'disabled' : ''}>Mood Selector</Link></li>
        <li><Link to="/express-mode" onClick={toggleMenu} className={!user ? 'disabled' : ''}>Soothing ASMR</Link></li>
        <li><Link to="/journal" onClick={toggleMenu} className={!user ? 'disabled' : ''}>Emotions Tracker</Link></li>
      </ul>

      <div className="navbar-auth desktop-auth">
        {!user ? (
          <>
            <Link to="/login" className="btn login">Login</Link>
            <Link to="/signup" className="btn signup">Sign Up</Link>
          </>
        ) : (
          <div className="user-dropdown">
            <img src={user.photoURL || '/images/default-avatar.png'} alt="User Avatar" className="user-avatar" />
            <div className="dropdown-content">
              <p>{user.displayName || 'User'}</p>
              <Link to="/profile" className="dropdown-link" onClick={toggleMenu}>Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>

      <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
