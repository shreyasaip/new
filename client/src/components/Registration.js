// Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, role })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            navigate('/');
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white border rounded-md shadow-lg">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="flex justify-around">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="role"
                                value="user"
                                checked={role === 'user'}
                                onChange={() => setRole('user')}
                                className="form-radio"
                            />
                            <span className="ml-2">User</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="role"
                                value="admin"
                                checked={role === 'admin'}
                                onChange={() => setRole('admin')}
                                className="form-radio"
                            />
                            <span className="ml-2">Admin</span>
                        </label>
                    </div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    <input type="submit" value="Register" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700" />
                </form>
            </div>
        </div>
    );
}

export default Registration;
