import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dob: '',
    gender: '',
    agree: false,
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // prevent duplicate submission
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agree) {
      setError("You must accept the terms & privacy policy.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        dob: formData.dob,
        gender: formData.gender,
        createdAt: serverTimestamp(),
      });

      alert("🎉 Account created successfully!");
      navigate("/login");

    } catch (err) {
      console.error("Signup Error: ", err.message);
      if (err.code === 'auth/email-already-in-use') {
        setError("This email is already in use.");
      } else if (err.code === 'auth/weak-password') {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <span className="brain-icon">🧠</span>
      <h2>Create Your RasaSetu Account</h2>
      <form onSubmit={handleSubmit} className="signup-form" noValidate>
        {error && <div className="error-message">{error}</div>}

        {/* Name Fields */}
        <div className="name-fields">
          <div className="name-fields">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="name-fields">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />

        {/* Phone */}
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />

        {/* DOB */}
        <label htmlFor="dob">Date of Birth</label>
        <input id="dob" name="dob" type="date" value={formData.dob} onChange={handleChange} required />

        {/* Gender */}
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary">Non-binary</option>
          <option value="preferNotToSay">Prefer not to say</option>
        </select>

        {/* Terms Checkbox */}
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <label htmlFor="agree">
            I agree to the <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms</Link>
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        <div className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
