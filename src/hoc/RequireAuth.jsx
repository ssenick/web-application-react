import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import LoginPage from "../pages/LoginPage";


const RequireAuth = ({children}) => {
   const location = useLocation();
   const {user} = useAuth();
   if(!user && !localStorage.getItem('auth')){
      return <Navigate to={'/login'} state={{from: location}}/>
   }



   return children;
};

export default RequireAuth;