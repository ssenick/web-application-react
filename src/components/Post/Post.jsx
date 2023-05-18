import React from 'react';
import s from './Post.module.scss'
import MyButton from "../UI/button/MyButton";

const Post = ({post,number,remove}) => {
   return (
      <div className={s.post}>
         <div className={s.post__content}>
            <strong className={s.post__title}>{number + 1}. {post.title}</strong>
            <div className={s.post__description}>{post.body}</div>
         </div>
         <div className={s.post__buttons}>
            <MyButton onClick={()=>remove(post)} children="Delete"/>
         </div>
      </div>
   );
};

export default Post;