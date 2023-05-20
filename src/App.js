import React, {useEffect, useMemo, useState} from "react";
import './components/style/App.scss';
import PostsList from "./components/PostList/PostsList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import axios from "axios";
import PostService from "./components/API/postService";
import PostLoader from "./components/Loaders/PostLoader";

function App() {
   const [posts, setPosts] = useState([]);
   const [isPostsLoading,setIsPostsLoading] = useState(false);
   async function fetchPosts() {
      setIsPostsLoading(true);
      const posts = await PostService.getAll()
      setPosts(posts);
      setIsPostsLoading(false);
   }

   useMemo(() => {
      fetchPosts();
   }, [])

   const [filter, setFilter] = useState({sort: '', query: ''});
   const [visible, setVisible] = useState(false)
   const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)


   function createPost(newPost) {
      setPosts([...posts, newPost])
      setVisible(false)
   }

   function removePost(post) {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   return (<div className="App">
         <button onClick={fetchPosts}>Axios</button>
         <MyButton color='green' onClick={() => setVisible(true)}>Creat post</MyButton>
         <MyModal visible={visible} setVisible={setVisible}>
            <PostForm create={createPost}/>
         </MyModal>
         <PostFilter
            titleName='Search and filter'
            filter={filter}
            setFilter={setFilter}
         />
         {isPostsLoading
         ? <PostLoader/>
         : <PostsList remove={removePost} posts={sortedAndSearchedPost} title="Post list"/>
         }

      </div>
   );
}

export default App;
