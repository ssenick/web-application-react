import React from 'react';
import s from './Post.module.scss'

const Post = ({post}) => {
   return (
      <div className={s.post}>
         <div className={s.post__content}>
            <strong className={s.post__title}>{post.id}. {post.title}</strong>
            <div className={s.post__description}>{post.body}</div>
         </div>
         <div className={s.post__buttons}>
            <button>Delete</button>
         </div>
      </div>
   );
};

export default Post;