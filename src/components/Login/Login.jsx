import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; 
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedInState] = useState(false); // Track login state for success animation
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setIsLoading(false);
      setIsLoggedInState(true);
      setIsLoggedIn(true); // Update parent component state
      setError(''); // Clear error if login is successful
      setTimeout(() => navigate('/'), 1000); // Redirect to home page on successful login
    } catch (error) {
      setIsLoading(false);
      setIsLoggedInState(false); // Reset login state
      if (error.code === 'auth/user-not-found') {
        setError("User not found.");
      } else if (error.code === 'auth/wrong-password') {
        setError("Wrong password.");
      } else {
        setError("Login failed.");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome Back 😊</h2>
      <form onSubmit={handleSubmit} aria-labelledby="login-form">
        {/* Error message with shake animation */}
        {error && <p className="error-message">{error}</p>}
        
        <label htmlFor="email">Email</label>
        <input 
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="on"
          aria-label="Email address"
          className={error ? 'error' : ''} // Highlight input in red when there's an error
        />
        
        <label htmlFor="password">Password</label>
        <input 
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete="on"
          aria-label="Password"
          className={error ? 'error' : ''} // Highlight input in red when there's an error
        />
        
        <button type="submit" disabled={isLoading} aria-label="Login">
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>

        {/* Success message with fade-in and scale-up animation */}
        {isLoggedIn && <div className="success-message">Successfully logged in! Redirecting...</div>}
      </form>
    </div>
  );
};

export default Login;
