// src/AdminDashboard.js
import React, { useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
    const [category, setCategory] = useState('technical');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div className="admin-container">
            <div className="navigation">
                <h2>Admin Navigation</h2>
                <ul>
                    <li><a href="#manual-entry">Manual Entry</a></li>
                    <li><a href="#insta-entry">Insta Entry</a></li>
                </ul>
            </div>
            <div className="content">
                <h2>Manual Entry</h2>
                <form className="manual-entry-form">
                    <label>
                        Event Name:
                        <input type="text" name="eventName" required />
                    </label>
                    <label>
                        Category:
                        <select name="category" value={category} onChange={handleCategoryChange} required>
                            <option value="technical">Technical</option>
                            <option value="non-technical">Non-Technical</option>
                        </select>
                    </label>
                    <label>
                        Type of Event:
                        <select name="type" required>
                            <option value="symposium">Symposium</option>
                            <option value="hackathon">Hackathon</option>
                            <option value="webinar">Webinar</option>
                            <option value="guest lecture">Guest Lecture</option>
                            <option value="paper presentation">Paper Presentation</option>
                        </select>
                    </label>
                    {category === 'technical' && (
                        <label>
                            Department:
                            <select name="department" required>
                                <option value="aiml">AIML</option>
                                <option value="cse">CSE</option>
                                <option value="csbs">CSBS</option>
                                <option value="csd">CSD</option>
                                <option value="it">IT</option>
                            </select>
                        </label>
                    )}
                    <label>
                        Club:
                        <input type="text" name="club" required />
                    </label>
                    <label>
                        Date:
                        <input type="date" name="date" required />
                    </label>
                    <label>
                        Time:
                        <input type="time" name="time" required />
                    </label>
                    <label>
                        Location:
                        <input type="text" name="location" required />
                    </label>
                    <label>
                        Fee:
                        <input type="number" name="fee" required />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AdminDashboard;
