import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';
import { Navigate, useLocation } from 'react-router-dom';
// import { redirect } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();
    // if(isLoading) {
    //     return <CircularProgress/>
    // }
    
    if (!user?.uid) {
        return <Navigate to="/login" state={{ from: location }} />;
        {/* // return <h1>log in</h1> */}
      }
      return children;
      // <Navigate to="/login" state={{ from: location }} />
  
};

export default PrivateRoute;