import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

function RedirectUnauthorized({ children }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.Auth);

  useEffect(() => {
    // Redirect to login if the user is not authenticated
    if (!user || !user._id) {
      navigate('/login');
    }
  }, [user, navigate]);  // Add user and navigate to the dependency array

  return <>{children}</>;
}

export default RedirectUnauthorized;
