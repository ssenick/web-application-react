import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";
import '../style/Pages.scss'
import PostLoader from "../components/UI/Loaders/PostLoader";
import Comments from "../components/Comments/Comments";
import MyButton from "../components/UI/button/MyButton";
import ErrorMessage from "../components/UI/errorMessage/ErrorMessage";

const PostIdPage = () => {
   const {id} = useParams();
   const [post, setPost] = useState({})
   const [comments, setComments] = useState([])
   const navigate = useNavigate();
   const goBack = () => navigate(-1);
   const [fetchPostById, isPostIdLoading, postIdError] = useFetching(async (id) => {
      const response = await PostService.getPostById(id)
      setPost(response.data)
   });
   const [fetchPostComments, isCommentPostLoading, commentPostError] = useFetching(async (id) => {
      const response = await PostService.getPostComments(id)
      setComments(response.data)
   });

   useEffect(() => {
      fetchPostById(id)
      fetchPostComments(id)
   }, [])

   return (
      <div className='page-id'>
         <div className='page-id__container'>
            <MyButton color="green" onClick={goBack}>COME BACK</MyButton>
            {postIdError &&
               <ErrorMessage error={postIdError}/>
            }
            {isPostIdLoading
               ? <PostLoader/>
               : <div className="page-id__header">
                  <h3 className="page-id__title">{post.id}. {post.title}</h3>
                  <div className="page-id__text">
                     <p>{post.body}</p>
                  </div>
               </div>
            }

            {commentPostError &&
               <ErrorMessage error={commentPostError}/>
            }
            {isCommentPostLoading
               ? <PostLoader/>
               : <Comments comments={comments}/>
            }
         </div>

      </div>
   );
};

export default PostIdPage;