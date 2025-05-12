import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAuthUser(user);
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.error("No user data found!");
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

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loader"></div>
        <p className="loading-text">Loading your profile...</p>
      </div>
    );
  }

  if (!authUser) {
    return (
      <div className="profile-container">
        <div className="not-logged-in">🚫 You are not logged in.</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">👤 Your Profile</h2>
      <div className="profile-card">
        <ProfileRow label="Name" value={`${userData.firstName} ${userData.lastName}`} />
        <ProfileRow label="Email" value={userData.email} />
        <ProfileRow label="Phone" value={userData.phone} />
        <ProfileRow label="Date of Birth" value={userData.dob} />
        <ProfileRow label="Gender" value={userData.gender} />
        <ProfileRow label="Account Created" value={userData.createdAt?.toDate().toLocaleString()} />
      </div>
    </div>
  );
};

const ProfileRow = ({ label, value }) => (
  <div className="profile-row">
    <span className="profile-label">{label}:</span>
    <span className="profile-value">{value}</span>
  </div>
);

export default Profile;
