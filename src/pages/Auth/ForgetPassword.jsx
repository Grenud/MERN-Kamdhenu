import React, { useState } from 'react';
import bgx from '../../assets/bgx.jpg'
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const origin = window.location.origin;

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/forgot-password', { email, origin });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message || 'An error occurred.');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-light" style={{
            backgroundImage: `url(${bgx})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="flex flex-col w-full max-w-lg  rounded-lg shadow-lg h-auto mt-20 mb-10 p-8  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900">
                    Forgot Password
                </h2>
                <form onSubmit={handleForgotPassword} className="mt-8 space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold tracking-wider text-black">
                            Enter your email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                        />
                    </div>

                    <button
                        className={`text-light bg-secondary hover:bg-[#33465a] px-5 h-10 rounded-full flex justify-center items-center`}
                    >
                        Forget Password
                    </button>

                    {message && <p className="text-sm text-yellow-500 mt-4">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
