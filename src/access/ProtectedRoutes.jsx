import React from 'react';
import { Outlet } from 'react-router';
import { useAuth } from '../functions/authUtils';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
