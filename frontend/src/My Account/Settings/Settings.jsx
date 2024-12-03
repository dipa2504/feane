import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDeleteClick = () => {
        setShowConfirm(true);
    };

    const handleCancel = () => {
        setShowConfirm(false);
    };

    const handleConfirm = () => {
        // Handle account deletion logic here
        alert('Account deleted');
        setShowConfirm(false);
    };

    return (
        <div className="settings-container">
            <button className="edit-profile-btn">
                <a href="/profile">Edit Profile</a>
            </button>

            <div className="delete-account-container">
                <button className="delete-account-btn" onClick={handleDeleteClick}>
                    Delete Account
                </button>

                {showConfirm && (
                    <div className="confirmation-dialog">
                        <p>Are you sure you want to delete your account?</p>
                        <button onClick={handleConfirm}>Yes</button>
                        <button onClick={handleCancel}>No</button>
                    </div>
                )}
            </div>

            <button className="logout-btn">Log Out</button>
        </div>
    );
};

export default Settings;
