import React from 'react';
import s from './Post.module.scss'
import MyButton from "../UI/button/MyButton";
import {Link} from "react-router-dom";

const Post = ({post,number,remove}) => {
   return (
      <div className={s.post}>
         <div className={s.post__content}>
            <strong className={s.post__title}>{post.id}. {post.title}</strong>
            <div className={s.post__description}>{post.body}</div>
         </div>
         <div className={s.post__buttons}>
            <Link className={s.post__open} to={`/posts/${post.id}`}>Open</Link>
            <MyButton onClick={()=>remove(post)} children="Delete"/>
         </div>
      </div>
   );
};

export default Post;