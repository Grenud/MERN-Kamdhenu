import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';  // import useLocation

function RedirectUnauthorized({ children }) {
    const navigate = useNavigate();
    const location = useLocation();  // get the current location
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.Auth);

    const fetchUserData = async () => {
        if (!user || !user.user || !(user.user._id || user.user.id)) {
            navigate('/login');
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [location.pathname, dispatch]);  // Add location.pathname as a dependency

    return (
            {children}
    );
}

export default RedirectUnauthorized;
