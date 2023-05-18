import React, {useState} from "react";
import './components/style/App.scss';
import PostsList from "./components/PostList/PostsList";
import PostForm from "./components/PostForm/PostForm";

// import './style/Colors.scss';
function App() {
   const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body: '  Lorem ipsum dolor sit amet.'},
      {id: 2, title: 'Javascript 2', body: '  Lorem ipsum  sit amet. dolor sit amet.'},
      {id: 3, title: 'Javascript 3', body: '  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.'}
   ])


   function createPost(newPost) {
      setPosts([...posts, newPost])
   }

   function removePost(post) {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   return (
      <div className="App">
         <PostForm create={createPost}/>
         {posts.length
            ? <PostsList remove={removePost} posts={posts} title="Post list"/>
            : <h2 style={{textAlign: 'center',fontSize:'30px'}}>Sorry, no posts found!</h2>}

      </div>
   );
}

export default App;
