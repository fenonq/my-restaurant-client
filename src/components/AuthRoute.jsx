import React from 'react';
import { useAuth } from '../functions/authUtils';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ to }) => {
    const isLogged = useAuth();
    return !isLogged ? to : <Navigate to="/account" />;
};

export default AuthRoute;
