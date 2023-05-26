import React from "react";
import './components/style/App.scss';
import Posts from "./components/pages/Posts";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Layout from "./components/Layout/Layout";
import PostIdPage from "./components/pages/PostIdPage";


function App() {

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout/>}>
               <Route index element={<Posts/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/posts/:id' element={<PostIdPage/>}/>
               <Route path='*' element={<Error/>}/>
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
