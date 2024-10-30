import React from 'react';
import { Navigate } from 'react-router-dom';

const Profile = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <p>Welcome, User! This is your profile page.</p>
    </div>
  );
};

export default Profile;

