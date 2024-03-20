import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import the CSS file
import Header from './Header';

const Profile = () => {
  // Sample user profile data (replace with your data)
  const [userProfile, setUserProfile] = useState({
    sellerName: '', // Use camelCase for field names
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Retrieve user profile data from localStorage when the component mounts
    const storedUserProfile = localStorage.getItem('data');
    if (storedUserProfile) {
      setUserProfile(JSON.parse(storedUserProfile));
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    localStorage.setItem('data', JSON.stringify(userProfile));
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Revert any changes made during editing
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  return (
    <>
      <Header />
      <div className='maincom'><div className="profile">
            <h2>My Profile</h2>
            <div className="profile-info">
              <div className="profile-field">
                <label>Name:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="sellerName" // Use camelCase for field names
                    value={userProfile.sellerName} // Use camelCase for field names
                    onChange={handleChange}
                  />
                ) : (
                  <span>{userProfile.sellerName}</span>
                )}
              </div>
              
              <div className="profile-field">
                <label>Email:</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{userProfile.email}</span>
                )}
              </div>
              <div className="profile-field">
                <label>Phone:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="phoneNumber" // Use camelCase for field names
                    value={userProfile.phoneNumber} // Use camelCase for field names
                    onChange={handleChange}
                  />
                ) : (
                  <span>{userProfile.phoneNumber}</span>
                )}
              </div>
              <div className="profile-field">
                <label>Address:</label>
                {isEditing ? (
                  <textarea
                    name="address"
                    value={userProfile.address}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{userProfile.address}</span>
                )}
              </div>
            </div>
            {isEditing ? (
              <div className="profile-actions">
                <button className="save-button" onClick={handleSaveClick}>
                  Save
                </button>
                <button className="cancel-button" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
            ) : (
              <button className="edit-button" onClick={handleEditClick}>
                Edit Profile
              </button>
              
            )}
          </div></div>
    </>
  );
};

export default Profile;
