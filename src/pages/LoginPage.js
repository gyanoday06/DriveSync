import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Logging in with:', username, password);
        if (!username  && !password) {
            setError('Please enter email and password.');
            return;
        }
        if (!username) {
            setError('Please enter email.');
            return;
        }
        if (!password) {
            setError('Please enter password.');
            return;
        }
        navigate('/homepage');
    };

    return (
        <div className="login-container">
            <h1 className="login-title">LOGIN</h1>
            <form className="login-form">
                <input
                    type="text"
                    id="username"
                    className="login-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Email Address"
                />

                <input
                    type="password"
                    id="password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />

                {error && <p className="error-message">{error}</p>}

                <button type="button" className="login-button" onClick={handleLogin}>
                    Log In
                </button>

                <p className="signup-link">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
