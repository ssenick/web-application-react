import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Error = () => {
   const location = useLocation();


   return (
      <div>
         <Link style={{color:'green',fontSize:"20px",textDecoration:"underline"}} to={"/"}>Go home</Link>
         <h1 style={{textAlign:'center',fontSize:'35px',color:'red'}}>ERROR: "This page does not exist"</h1>
      </div>


   );
};

export default Error;