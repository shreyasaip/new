// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LogIn';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/dashboard" element={<Dashboard />} /> {/* Assuming Dashboard component exists */}
                    <Route path="/adminDashboard" element={<AdminDashboard />} /> {/* Assuming AdminDashboard component exists */}
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
