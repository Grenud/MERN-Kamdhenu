import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetUser } from '../../redux/AuthSlice';
import { useNavigate, useLocation } from 'react-router-dom';

function AuthLayout({ children }) {
    const navigate = useNavigate();
    const location = useLocation();  // get the current location
    const dispatch = useDispatch();

    const fetchUserData = async () => {
        console.log('Fetching user data...');
        try {
            const response = await axios.get("/api/auth/google-user-data");
            console.log('response is ------ ', response);
            if (response.data.success) {
                dispatch(SetUser({
                    user: response.data.user
                }));
            } else {
                // Handle case when the response is not successful
                navigate('/login');
            }
        } catch (error) {
            console.log('Error fetching user data: ', error);
            dispatch(SetUser({
                user: null
            }));
            navigate('/login');
        }
    };

    useEffect(() => {
        fetchUserData(); // Fetch data when component mounts
    }, []);  // Empty array ensures this only runs on component mount

    return (
        <>
            {children}
        </>
    );
}

export default AuthLayout;
