console.log('authLayout is running')
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../../redux/AuthSlice';
import { useNavigate, useLocation } from 'react-router-dom';  // import useLocation
function AuthLayout({ children }) {
    console.log('AuthLayout component is rendering'); // Debugging log

    const navigate = useNavigate();
    const location = useLocation();
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
        console.log('useEffect triggered'); // Log when useEffect triggers
        fetchUserData();
    }, []); 

    return (
        <>
            {children}
        </>
    );
}

export default AuthLayout;
