import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../../redux/AuthSlice';
import { useNavigate, useLocation } from 'react-router-dom';  // import useLocation

function AuthLayout({ children }) {
    const navigate = useNavigate();
    const location = useLocation();  // get the current location
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.Auth);

    const fetchUserData = async () => {
        try {
            const response = await axios.get("/api/auth/google-user-data");
            if (response.data.success) {
                dispatch(SetUser({
                    user: response.data.user
                }));
            }
            if (!user || !user.user || !(user.user._id || user.user.id)) {
                navigate('/login');
            }
        } catch (error) {
            dispatch(SetUser({
                user: null
            }));
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
