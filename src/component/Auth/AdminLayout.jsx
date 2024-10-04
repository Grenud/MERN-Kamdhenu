import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';  // import useLocation

function AdminLayout({ children }) {
    const navigate = useNavigate();
    const location = useLocation();  // get the current location
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.Auth);
    const fetchUserData = async () => {
        try {
            const {data} = await axios.post('/api/auth/admin');
            if(!data.success || !data.role==='admin'){
                navigate('/')
            }
        } catch (error) {
            navigate("/")
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

export default AdminLayout;
