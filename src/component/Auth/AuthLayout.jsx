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
            const { data } = await axios.get("/api/auth/google-user-data");
            if (data.success) {
                dispatch(SetUser({
                    user: data.user
                }));
            } else {
                dispatch(SetUser({
                    user: null
                }))
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            dispatch(SetUser({
                user: null
            }));
            navigate('/login');
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);


    return (
        <>
            {children}
        </>
    );
}

export default AuthLayout;