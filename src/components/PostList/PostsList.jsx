import React from 'react';
import Post from "../Post/Post";
import s from "./PostList.module.scss"
import './PostAnimation.scss'
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostsList = ({posts, title, remove}) => {
   if (!posts.length) {
      return (
         <h2 className={s.text}>Sorry, no posts found!</h2>
      )
   }
   return (
      <div className={s.postList}>
         <h2 className={s.postList__title}>
            {title}
         </h2>
         <div className={s.postList__posts}>
            <TransitionGroup>
               {posts.map((post, index) =>
                  <CSSTransition
                     key={post.id}
                     timeout={500}
                     classNames="postItem"
                  >
                     <Post remove={remove} number={index} post={post}/>
                  </CSSTransition>
               )}
            </TransitionGroup>
         </div>
      </div>
   );
};

export default PostsList;