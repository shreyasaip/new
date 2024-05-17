// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './LogIn';
import Dashboard from './Dashboard';
import Registration from './Registration';
import AdminDashboard from './AdminDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Registration" element={<Registration />} />
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
            </Routes>
            <div>hi</div>
            <div><Login/></div>
        </Router>
    );
}

export default App;


