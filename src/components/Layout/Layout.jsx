import React from 'react';
import {NavLink,Outlet} from "react-router-dom";
import './Layout.scss'
const Layout = ({links}) => {
   return (
      <div className="layout">
         <div className="header">
            <nav className="header__nav">
               <NavLink to='/' className="header__link">Posts</NavLink>
               <NavLink to='/about' className="header__link">About</NavLink>
            </nav>
         </div>

         <main className="main">
            <Outlet/>
         </main>

         <footer className='footer'>
            Footer
         </footer>
      </div>
   );
};

export default Layout;