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
        <div className="flex min-h-screen items-center justify-center p-4 bg-light">
            <div className="flex flex-col w-full max-w-lg bg-gray-200 rounded-lg shadow-lg h-auto mt-20 mb-10 p-8">
                <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900">
                    Reset Password
                </h2>
                <form onSubmit={handleResetPassword} className="mt-8 space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold tracking-wider text-black">
                            New Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold tracking-wider text-black">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                        />
                    </div>

                    <button
                        className={`text-light bg-secondary hover:bg-[#33465a] px-5 h-10 rounded-full flex justify-center items-center`}
                    >
                        Set New Password
                    </button>

                    {message && <p className="text-sm text-yellow-500 mt-4">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
