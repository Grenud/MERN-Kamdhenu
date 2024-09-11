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
            console.log("Fetching user data...");
            const response = await axios.get("/api/auth/google-user-data");
            if (response.data.success) {
                console.log("User data fetched successfully:", response.data.user);
                dispatch(SetUser({
                    user: response.data.user
                }));
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
        setTimeout(() => {
            if (!user) {
                fetchUserData();
            }
        }, 500); // Delay the fetch by 500ms
    }, [location.pathname, user, dispatch]);
    

    return (
        <>
            {children}
        </>
    );
}

export default AuthLayout;