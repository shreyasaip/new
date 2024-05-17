// src/Dashboard.js
import React from 'react';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="containerds">
            <div className="navigation">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="dashboard.html">Department Events</a></li>
                    <li><a href="#">Club Events (Technical)</a></li>
                    <li><a href="#">Club Events (Non-Technical)</a></li>
                    <li><a href="#">Notifications</a></li>
                </ul>
            </div>
            <div className="dashboard-content">
                <h2>Latest Events</h2>
                <div className="event-slide">
                    <h3>Club Name</h3>
                    <p>Registration Date: January 1, 2024</p>
                    <p>Amount to be Paid: $50</p>
                </div>
                {/* Add more event slides here */}
            </div>
        </div>
    );
}

export default Dashboard;