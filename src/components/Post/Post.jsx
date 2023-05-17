import React from 'react';
import './Post.scss'

const Post = (props) => {
   return (
      <div className="post">
         <div className="post__content">
            <strong className="post__title">{props.post.id}. {props.post.title}</strong>
            <div className="post__description">{props.post.body}</div>
         </div>
         <div className="post__buttons">
            <button>Delete</button>
         </div>
      </div>
   );
};

export default Post;