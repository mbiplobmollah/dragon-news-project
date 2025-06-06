import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    // if user thakle return children / er na takle navigate korbo login e .
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location)

    if(loading){
        return <Loading></Loading>;
    }
    // console.log(user);
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;