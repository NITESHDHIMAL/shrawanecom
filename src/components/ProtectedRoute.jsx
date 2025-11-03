import React from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {

    const user = JSON.parse(localStorage.getItem('user'));

    if(!user || !user.accessToken) {
        return <Navigate to="/login" />
    }

  return children;
}

export default ProtectedRoute

