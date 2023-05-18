import React from 'react';
import s from './MyInput.module.scss';
const MyInput = (props) => {
   return (
      <input  className={s.input} {...props}/>
   );
};

export default MyInput;