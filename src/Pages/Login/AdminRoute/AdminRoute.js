import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation();
    if (!user?.uid && admin) {
        return <Navigate to="/" state={{ from: location }} />;
    }
    return children;
};

export default AdminRoute;