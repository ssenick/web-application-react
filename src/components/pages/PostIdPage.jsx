import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";
import  './Pages.scss'
import Comment from "../Comment/Comment";
const PostIdPage = () => {
   const {id} = useParams();
   const [post,setPost] = useState({})
   const [comments,setComments] = useState([])
   const [fetchPostById, isPostIdLoading, postIdError] = useFetching(async (id) => {
      const response = await PostService.getPostById(id)
      setPost(response.data)
   });
   const [fetchPostComments, isCommentPostLoading, commentPostError] = useFetching(async (id) => {
      const response = await PostService.getPostComments(id)
      setComments(response.data)
      console.log(response.data)
   });

   useEffect(()=>{
      fetchPostById(id)
      fetchPostComments(id)
   },[])

   return (
      <div className='page-id'>
         <div className='page-id__container'>
            <div className="page-id__header">
               <h3 className="page-id__title">{post.id}. {post.title}</h3>
               <div className="page-id__text">
                  <p>{post.body}</p>
               </div>
            </div>
            <div className="page-id__comments comments">
               <h5 className="comments__title">Comments:</h5>
               <ul className="comments__list">
                  {comments.map((comment)=>
                     <li key={comment.id}><Comment  name={comment.name} body={comment.body} email={comment.email} /></li>
                  )}
               </ul>
            </div>

         </div>

      </div>
   );
};

export default PostIdPage;