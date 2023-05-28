import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import s from "./Nav.module.scss"
import {useAuth} from "../../hooks/useAuth";

const Nav = () => {
   const {signOut} = useAuth();
   const navigate = useNavigate();
   return (
      <div className={s.nav}>
         {localStorage.getItem('auth') &&  <MyButton onClick={()=>signOut(()=>{navigate('/',{replace:true})})} >Log out</MyButton>}

         <nav className={s.navWrapper}>
            <NavLink to='/' className={s.navLink}>Posts</NavLink>
            <NavLink to='/about' className={s.navLink}>About</NavLink>
         </nav>
      </div>
   );
};

export default Nav;