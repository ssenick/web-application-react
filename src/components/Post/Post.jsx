import React from 'react';
import './Post.scss'

const Post = ({post}) => {
   return (
      <div className="post">
         <div className="post__content">
            <strong className="post__title">{post.id}. {post.title}</strong>
            <div className="post__description">{post.body}</div>
         </div>
         <div className="post__buttons">
            <button>Delete</button>
         </div>
      </div>
   );
};

export default Post;