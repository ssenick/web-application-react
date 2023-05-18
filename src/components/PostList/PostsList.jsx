import React from 'react';
import Post from "../Post/Post";
import s from "./PostList.module.scss"
const PostsList = ({posts,title,remove}) => {

   return (
      <div className={s.postList}>
         <h2 className={s.postList__title}>
            {title}
         </h2>
         <div className={s.postList__posts}>
            {posts.map((post,index)=>
               <Post remove={remove} number={index} post={post} key={post.id}/>
            )}
         </div>
      </div>
   );
};

export default PostsList;