import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, UserCircle, LogOut, Settings, Shield } from 'lucide-react';
import '../NodeDisplay.tsx'
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAuthUser(user);
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.error("No user data found!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
        setLoading(false);
      } else {
        setAuthUser(null);
        setUserData(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const getInitials = () => {
    if (!userData) return "U";
    return `${userData.firstName?.charAt(0) || ""}${userData.lastName?.charAt(0) || ""}`.toUpperCase();
  };

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!authUser) {
    return (
      <div className="profile-container">
        <div className="not-logged-in">
          <div className="not-logged-in-icon">🔒</div>
          <h2>You are not logged in</h2>
          <p>Please sign in to view your profile</p>
          <button className="login-button" onClick={() => window.location.href = '/login'}>
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <motion.div 
        className="profile-card"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="profile-header">
          <div className="profile-avatar">
            {authUser.photoURL ? (
              <img src={authUser.photoURL || "/placeholder.svg"} alt="Profile" className="avatar-image" />
            ) : (
              <div className="avatar-fallback">{getInitials()}</div>
            )}
          </div>
          <div className="profile-user-info">
            <h2 className="profile-name">
              {userData?.firstName} {userData?.lastName}
            </h2>
            <p className="profile-email">{userData?.email}</p>
            <div className="profile-actions">
              <button className="profile-button outline">
                <Settings className="button-icon" />
                Edit Profile
              </button>
              <button className="profile-button outline">
                <Shield className="button-icon" />
                Privacy
              </button>
              <button className="profile-button destructive" onClick={handleLogout}>
                <LogOut className="button-icon" />
                Logout
              </button>
            </div>
          </div>
        </div>
        
        <div className="profile-tabs">
          <div className="tabs-list">
            <button 
              className={`tab-trigger ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile Information
            </button>
            <button 
              className={`tab-trigger ${activeTab === 'activity' ? 'active' : ''}`}
              onClick={() => setActiveTab('activity')}
            >
              Activity & Stats
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'profile' && (
              <div className="profile-info">
                <div className="profile-items-grid">
                  <ProfileItem
                    icon={<User className="profile-item-icon" />}
                    label="Full Name"
                    value={`${userData?.firstName || ""} ${userData?.lastName || ""}`}
                  />
                  <ProfileItem
                    icon={<Mail className="profile-item-icon" />}
                    label="Email"
                    value={userData?.email || ""}
                  />
                  <ProfileItem
                    icon={<Phone className="profile-item-icon" />}
                    label="Phone"
                    value={userData?.phone || "Not provided"}
                  />
                  <ProfileItem
                    icon={<Calendar className="profile-item-icon" />}
                    label="Date of Birth"
                    value={userData?.dob || "Not provided"}
                  />
                  <ProfileItem
                    icon={<UserCircle className="profile-item-icon" />}
                    label="Gender"
                    value={userData?.gender || "Not provided"}
                  />
                  <ProfileItem
                    icon={<Calendar className="profile-item-icon" />}
                    label="Account Created"
                    value={userData?.createdAt?.toDate().toLocaleString() || "Unknown"}
                  />
                </div>
              </div>
            )}
            
            {activeTab === 'activity' && (
              <div className="activity-card">
                <div className="activity-header">
                  <h3 className="activity-title">Your Activity</h3>
                  <p className="activity-description">Track your usage and engagement with RasaSetu</p>
                </div>
                <div className="activity-content">
                  <div className="activity-list">
                    <div className="activity-item">
                      <span className="activity-label">Journal Entries</span>
                      <span className="activity-value">3 entries this week</span>
                    </div>
                    <div className="activity-item">
                      <span className="activity-label">Mood Checks</span>
                      <span className="activity-value">12 total</span>
                    </div>
                    <div className="activity-item">
                      <span className="activity-label">Express Mode Sessions</span>
                      <span className="activity-value">5 sessions</span>
                    </div>
                    <div className="activity-item">
                      <span className="activity-label">AI Avatar Interactions</span>
                      <span className="activity-value">8 conversations</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <div className="profile-item">
    <div className="profile-item-icon-wrapper">{icon}</div>
    <div className="profile-item-content">
      <p className="profile-item-label">{label}</p>
      <p className="profile-item-value">{value}</p>
    </div>
  </div>
);



export default Profile;
