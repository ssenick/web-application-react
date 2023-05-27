import React from 'react';
import s from './ErrorMessage.module.scss'
const ErrorMessage = ({error}) => {
   return (
      <h2 className={s.message}>
         The following error has occurred: <span>"{error}"</span>
      </h2>
   );
};

export default ErrorMessage;