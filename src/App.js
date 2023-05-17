import React, {useState} from "react";
import './components/style/App.scss';
import Post from "./components/Post/Post";
import PostsList from "./components/PostList/PostsList";
// import './style/Colors.scss';
function App() {
   const [posts,setPosts] = useState([
      {id: 1, title: 'Javascript', body:'  Lorem ipsum dolor sit amet.' },
      {id: 2, title: 'Javascript 2', body:'  Lorem ipsum  sit amet. dolor sit amet.' },
      {id: 2, title: 'Javascript 2', body:'  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.' }
   ])
   return (
    <div className="App">
      <PostsList posts={posts} title="Post list"/>
    </div>
  );
}

export default App;
