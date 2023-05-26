import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";
import './Pages.scss'
import PostLoader from "../UI/Loaders/PostLoader";
import Comments from "../Comments/Comments";
import MyButton from "../UI/button/MyButton";

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
      console.log(response.data)
   });

   useEffect(() => {
      fetchPostById(id)
      fetchPostComments(id)
   }, [])

   return (
      <div className='page-id'>
         <div className='page-id__container'>
            <MyButton color="green" onClick={goBack}  >COME BACK</MyButton>
            {postIdError &&
               <h2 style={{textAlign: 'center', paddingTop: '20px', fontSize: "25px"}}>
                  The following error has occurred: "{postIdError}"
               </h2>
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
               <h2 style={{textAlign: 'center', paddingTop: '20px', fontSize: "25px"}}>
                  The following error has occurred: "{commentPostError}"
               </h2>
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