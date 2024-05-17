// Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        if (!username || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        console.log('Registration data:', { username, password });

        navigate('/');
    };

    return (
        <div className="container">
            <div className="registration-box">
                <h2>Registration</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Registration;


