import React, { createContext, useState, useContext, useMemo, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check localStorage or sessionStorage for login status on initial render
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // Function to handle login, also storing the login status in localStorage
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Function to handle logout and remove login status from localStorage
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  // Memoize the context value to avoid re-renders unless `isLoggedIn`, `login`, or `logout` change
  const value = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
