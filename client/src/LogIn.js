// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate(`/${role === 'admin' ? 'AdminDashboard' : 'Dashboard'}`);
    };

    const handleRegister = () => {
        navigate('/Registration');
    };

    return (
        <div className="container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="user"
                                checked={role === 'user'}
                                onChange={() => setRole('user')}
                            />
                            User
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="admin"
                                checked={role === 'admin'}
                                onChange={() => setRole('admin')}
                            />
                            Admin
                        </label>
                    </div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" value="Login" />
                </form>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}

export default Login;
