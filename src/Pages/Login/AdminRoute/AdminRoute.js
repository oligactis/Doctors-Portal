import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';
import { Navigate, useLocation } from 'react-router-dom';
// import { redirect } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation();
    // if(isLoading) {
    //     return <CircularProgress/>
    // }

    if (!user?.uid && admin) {
        return <Navigate to="/" state={{ from: location }} />;
        {/* // return <h1>log in</h1> */ }
    }
    return children;
    // <Navigate to="/login" state={{ from: location }} />

};

export default AdminRoute;