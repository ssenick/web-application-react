import React from 'react';
import s from './MyButton.module.scss'
const MyButton = ({children,color,...props}) => {
   return (
      color === 'green'
         ?
      <button className={s.button} {...props} >{children}</button>
   :
         <button className={s.buttonRed} {...props} >{children}</button>
   );
};

export default MyButton;