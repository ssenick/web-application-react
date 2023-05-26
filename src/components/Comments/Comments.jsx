import React from 'react';
import Comment from "../Comment/Comment";
import './Comments.scss'
const Comments = ({comments}) => {
   return (
      <div className="comments">
         <h5 className="comments__title">Comments:</h5>
         <ul className="comments__list">
            {comments.map((comment)=>
               <li key={comment.id}><Comment  name={comment.name} body={comment.body} email={comment.email} /></li>
            )}
         </ul>
      </div>
   );
};

export default Comments;