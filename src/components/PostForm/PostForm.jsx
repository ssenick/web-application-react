import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import s from './PostForm.module.scss'

const PostForm = ({create}) => {
   const [post, setPost] = useState({title: '', body: ''})

   function addNewPost(e) {
      e.preventDefault();
      const newPost = {...post, id: Date.now()}
      if (newPost.title && newPost.body) {
         create(newPost);
         setPost({title: '', body: ''})
      }

   }

   return (
      <form className={s.postForm}>
         <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})}
                  placeholder="Post title"/>
         <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})}
                  placeholder="Post description"/>
         <MyButton onClick={addNewPost} children='Add post' color="green"/>
      </form>
   );
};

export default PostForm;