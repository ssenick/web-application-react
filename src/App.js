import React, {useMemo, useState} from "react";
import './components/style/App.scss';
import PostsList from "./components/PostList/PostsList";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter/PostFilter";

// import './style/Colors.scss';
function App() {
   const [posts, setPosts] = useState([{id: 1, title: 'Javascript', body: '  Lorem ipsum dolor sit amet.'}, {
      id: 2,
      title: 'Javascript 2',
      body: '  Lorem ipsum  sit amet. dolor sit amet.'
   }, {id: 3, title: 'Aavascript 3', body: '  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.'}])

   const [filter,setFilter] = useState({sort:'',query:''});

   const sortedPost = useMemo(()=>{
      console.log('Work')
      if(filter.sort){
         return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts;
   },[filter.sort,posts]);

   const sortedAndSearchedPost  =   useMemo(()=>{
      return sortedPost.filter(post=> post.title.toLowerCase().includes(filter.query.toLowerCase()))
   },[filter.query,sortedPost])

   function createPost(newPost) {
      setPosts([...posts, newPost])
   }

   function removePost(post) {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   return (<div className="App">
      <PostForm create={createPost}/>
      <PostFilter
         titleName='Search and filter'
         filter={filter}
         setFilter={setFilter}
      />
       <PostsList remove={removePost} posts={sortedAndSearchedPost} title="Post list"/>
   </div>);
}

export default App;
