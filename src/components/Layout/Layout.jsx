import React from 'react';
import {Outlet} from "react-router-dom";
import './Layout.scss'
import Nav from "../Nav/Nav";
const Layout = () => {
   return (
      <div className="layout">
         <div className="header">
            <Nav/>
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