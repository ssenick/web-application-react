import React, {useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import  '../style/Pages.scss'
import { useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";


const LoginPage = () => {
   const navigate = useNavigate();
   const {signIn} = useAuth();
   const [input,setInput] = useState('')
   function handleSubmit (e){
      e.preventDefault();
      const form = e.target;
      const newUser = form.username.value ? form.username.value : '';

      if(newUser){
         signIn(newUser, () => navigate('/',{replace:true}));
      }

   }

   return (
      <form className="form" onSubmit={handleSubmit}>
         <div className="form__container">
            <MyInput onChange={(e) => setInput(e.target.value)}
                     value={input}
                     type="text"
                     name="username"
                     placeholder="Enter username"/>
            <MyButton type="submit" color="green">Log in</MyButton>
         </div>
      </form>
   );
};

export default LoginPage;