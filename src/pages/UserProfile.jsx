import React from 'react';
import "../styles/user-profile.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const UserProfile = () => {

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const avatar = document.getElementById('profile-avatar');
                avatar.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="user-profile-container">
            <div className="user-profile-form">
                <h2>General information</h2>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" placeholder="Enter your first name"/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" placeholder="Also your last name"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Birthday</label>
                            <input type="date" placeholder="mm/dd/yyyy"/>
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <select>
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="name@company.com"/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" placeholder="+12-345 678 910"/>
                        </div>
                    </div>
                    <h2>Address</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" placeholder="Enter your home address"/>
                        </div>
                        <div className="form-group">
                            <label>Number</label>
                            <input type="text" placeholder="No."/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" placeholder="City"/>
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <select>
                                <option value="">Select state</option>
                                {/* Add state options here */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>ZIP</label>
                            <input type="text" placeholder="ZIP"/>
                        </div>
                    </div>
                    <button type="submit" className="save-button">Save All</button>
                </form>
            </div>
            <div className="user-profile-card">
                <div className="profile-header">
                    <div className="profile-avatar-container">
                        <img id="profile-avatar" src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg" alt="User Avatar"
                             className="profile-avatar"/>
                        <label htmlFor="upload-input" className="upload-icon">
                            <i className="fas fa-camera"></i>
                        </label>
                        <input id="upload-input" type="file" accept="image/*" onChange={handleImageUpload}/>
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
