import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginStyles from '../styles/loginStyles';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await mockAuthenticate(username, password);
            const { userDetails: { fullName }, token } = response;

            sessionStorage.setItem('user', JSON.stringify({ fullName, token }));
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        }
    };

    const mockAuthenticate = async (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'admin' && password === 'password') {
                    resolve({
                        userDetails: { fullName: 'Admin User' },
                        token: 'mock-bearer-token-root-123',
                    });
                } else {
                    reject(new Error('Invalid username or password'));
                }
            }, 500);
        });
    };

    return (
        <div style={loginStyles.container}>
            <div style={loginStyles.loginBox}>
                <h2 style={loginStyles.heading}>Login</h2>
                <form onSubmit={handleLogin} style={loginStyles.form}>
                    <div style={loginStyles.inputGroup}>
                        <label style={loginStyles.label}>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={loginStyles.input}
                        />
                    </div>
                    <div style={loginStyles.inputGroup}>
                        <label style={loginStyles.label}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={loginStyles.input}
                        />
                    </div>
                    {error && <p style={loginStyles.error}>{error}</p>}
                    <button type="submit" style={loginStyles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
