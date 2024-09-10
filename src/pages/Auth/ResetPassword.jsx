// ResetPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    // Extract token and email from query parameters
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const email = queryParams.get('email');

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post('/api/auth/reset-password', {
                token,
                email,
                password,
            });
            setMessage(response.data.message);
            navigate('/login'); // Redirect to login page
        } catch (error) {
            setMessage(error.response.data.message || 'An error occurred.');
        }
    };

    return (
        <div className='w-full bg-primary py-10 px-5 flex flex-col gap-4 main-container'>
            <h2 className='font-semibold text-2xl text-smoke-yellow'>Reset Password</h2>
            <form onSubmit={handleResetPassword} className='flex flex-col gap-4'>
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='py-2 px-4 rounded-md'
                />
                <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className='py-2 px-4 rounded-md'
                />
                <button className='bg-smoke-yellow text-primary py-2 rounded-md' type="submit">Set New Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;
