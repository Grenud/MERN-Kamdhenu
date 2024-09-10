// ForgotPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const origin = window.location.origin;

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/forgot-password', { email,origin });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message || 'An error occurred.');
        }
    };

    return (
        <div className='w-full bg-primary h-[40vh] px-5 main-container'>
            <h2 className='text-2xl font-semibold text-light'>Forgot Password</h2>
            <form onSubmit={handleForgotPassword} className='flex  flex-col gap-4 mt-5'>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='px-3 py-2 rounded-md'
                />
                <button type="submit" className='bg-light text-ayurveda-brown py-2 rounded-md'>Reset Password</button>
            </form>
            {message && <p className='text-smoke-yellow'>{message}</p>}
        </div>
    );
};

export default ForgotPassword;
