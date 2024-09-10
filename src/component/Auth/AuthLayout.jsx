console.log('authLayout is running')
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../../redux/AuthSlice';
import { useNavigate, useLocation } from 'react-router-dom';  // import useLocation

function AuthLayout({ children }) {
    const navigate = useNavigate();
    const location = useLocation();  // get the current location
    const dispatch = useDispatch();
    const fetchUserData = async () => {
        console.log('running fetch user data')
        try {
            const response = await axios.get("/api/auth/google-user-data");
            console.log('response is ------ ',response)
            if (response.data.success) {
                dispatch(SetUser({
                    user: response.data.user
                }));
            }
        } catch (error) {
            dispatch(SetUser({
                user: null
            }));
            console.log(error)
            navigate('/login');
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [location.pathname, dispatch]);  // Add location.pathname as a dependency

    return (
        <>
            {children}
        </>
    );
}

export default AuthLayout;
