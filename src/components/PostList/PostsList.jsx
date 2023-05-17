import React from 'react';
import Post from "../Post/Post";
import "./PostList.scss"
const PostsList = ({posts,title}) => {
   return (
      <div className="postList">
         <h2 className="postList__title">
            {title}
         </h2>
         <div className="postList__posts">
            {posts.map((post)=>
               <Post post={post} key={post.id}/>
            )}
         </div>
      </div>
   );
};

export default PostsList;