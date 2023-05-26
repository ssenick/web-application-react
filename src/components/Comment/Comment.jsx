import React from 'react';
import './Comment.scss'
const Comment = ({name,email,body}) => {
   return (
      <div className="comment">
         <h5 className='comment__name'>Name: <span>{name}</span></h5>
         <div className="comment__email">Email: {email}</div>
         <div className="comment__body">Text:
           <p>{body}</p>
         </div>
      </div>
   );
};

export default Comment;