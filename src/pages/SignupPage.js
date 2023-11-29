import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import './SignupPage.css';

const SignupPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [phoneNum, setPhoneNum] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleOptionPress = (option) => {
        setGender(option);
        setSelectedOption(option);
    };

    const handleLogin = () => {
        console.log('Signing in with:', username, password);
        if (!name) {
            setErrorMessage('Please enter name.');
            return;
        }
        if (!gender) {
            setErrorMessage('Please select gender.');
            return;
        }
        if (!phoneNum) {
            setErrorMessage('Please enter phone number.');
            return;
        }
        if (!username) {
            setErrorMessage('Please enter email.');
            return;
        }
        if (!password || !confirmPassword) {
            setErrorMessage('Please enter password.');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        }
        
        setErrorMessage('');
        navigate('/homepage');
    };

    const handlePhoneNumChange = (e) => {
        const numericValue = e.target.value.replace(/\D/g, '');

        const limitedValue = numericValue.slice(0, 10);

        setPhoneNum(limitedValue);
    };

    return (
        <div className="login-container">
            <h1 className="login-title">SIGNUP</h1>
            <div className="login-form">

                <input
                    type="text"
                    id="username"
                    className="login-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />

                <div className="genderContainer">
                    <button
                        className={`option ${selectedOption === 'male' ? 'selectedOption' : ''}`}
                        onClick={() => handleOptionPress('male')}
                    >
                        Male
                    </button>

                    <button
                        className={`option ${selectedOption === 'female' ? 'selectedOption' : ''}`}
                        onClick={() => handleOptionPress('female')}
                    >
                        Female
                    </button>

                    <button
                        className={`option ${selectedOption === 'other' ? 'selectedOption' : ''}`}
                        onClick={() => handleOptionPress('other')}
                    >
                        Other
                    </button>
                </div>

                <input
                    type="text"
                    id="phoneNum"
                    className="login-input"
                    value={phoneNum}
                    onChange={handlePhoneNumChange}
                    placeholder="Phone Number"
                />
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

                <input
                    type="password"
                    id="password"
                    className="login-input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="button" className="login-button" onClick={handleLogin}>
                    SIGN UP
                </button>
            </div>
        </div>
    );
};

export default SignupPage;
