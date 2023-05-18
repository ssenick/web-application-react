import React, {useState} from "react";
import './components/style/App.scss';
import Post from "./components/Post/Post";
import PostsList from "./components/PostList/PostsList";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";

// import './style/Colors.scss';
function App() {
   const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body: '  Lorem ipsum dolor sit amet.'},
      {id: 2, title: 'Javascript 2', body: '  Lorem ipsum  sit amet. dolor sit amet.'},
      {id: 3, title: 'Javascript 3', body: '  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.'}
   ])
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')

   function addNewPost(e) {
      e.preventDefault();

   }

   return (
      <div className="App">
         <form>
            <MyInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Post title"/>
            <MyInput value={description} onChange={e => setDescription(e.target.value)} placeholder="Post description"/>
            <MyButton onClick={addNewPost} children='Add post' color="green"/>
         </form>
         <PostsList posts={posts} title="Post list"/>
      </div>
   );
}

export default App;
