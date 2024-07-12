import React, { useCallback } from 'react';
import "../styles/user-profile.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const UserProfile = () => {

    const handleImageUpload = useCallback((event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const avatar = document.getElementById('profile-avatar');
                avatar.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, validation, and provide user feedback
        alert("Profile updated successfully!");
    };

    return (
        <div className="user-profile-container">
            <div className="user-profile-form">
                <h2>General Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input id="first-name" type="text" placeholder="Enter your first name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input id="last-name" type="text" placeholder="Also your last name"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="birthday">Birthday</label>
                            <input id="birthday" type="date" placeholder="mm/dd/yyyy"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select id="gender">
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="name@company.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" type="tel" placeholder="+12-345 678 910"/>
                        </div>
                    </div>
                    <h2>Address</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input id="address" type="text" placeholder="Enter your home address"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Number</label>
                            <input id="number" type="text" placeholder="No."/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" placeholder="City"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <select id="state">
                                <option value="">Select state</option>
                                {/* Add state options here */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">ZIP</label>
                            <input id="zip" type="text" placeholder="ZIP"/>
                        </div>
                    </div>
                    <button type="submit" className="save-button">Save All</button>
                </form>
            </div>
            <div className="user-profile-card" >
                <div className="profile-header">
                    <div className="profile-avatar-container">
                        <img id="profile-avatar" src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg" alt="User Avatar"
                             className="profile-avatar"/>
                        <label htmlFor="upload-input" className="upload-icon" aria-label="Upload Profile Picture">
                            <i className="fas fa-camera"></i>
                        </label>
                        <input id="upload-input" type="file" accept="image/*" onChange={handleImageUpload} aria-label="Profile Picture Upload"/>
                    </div>
                    <h1 className="profile-name">Neil Sims</h1>
                    <p className="profile-title">Senior Software Engineer</p>
                    <p className="profile-location">New York, USA</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
