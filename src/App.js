import React, {useState} from "react";
import './components/style/App.scss';
import Post from "./components/Post/Post";
// import './style/Colors.scss';
function App() {
   const [likes,setLikes] = useState(0);
   const [value,setValue] = useState('Text')
   function increment(){
      setLikes(likes + 1)
   }
   function decrement(){
      setLikes(likes - 1)
   }
   return (
    <div className="App">
      <Post post = {{id:1,title:'Javascript',body:'Lorem ipsum dolor sit amet.'}}/>
    </div>
  );
}

export default App;
