import React from 'react';
import s from './PostLoader.module.scss';
const PostLoader = () => {
   return (
      <div className={s.loaderWrapper}>
         <div className={s.ldsRoller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>

   );
};

export default PostLoader;