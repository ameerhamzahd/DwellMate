import React, { use } from 'react';
import { AuthContext } from "../../contexts/AuthContext/AuthContext"
import { Navigate, useLocation } from 'react-router';
import Loader from '../Loader/Loader';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext)
    const location = useLocation();

    if (user && user?.email) {
        return children;
    }

    if (loading) {
        return <Loader></Loader>
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;