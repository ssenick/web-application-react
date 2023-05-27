import React from "react";
import './style/App.scss';
import Posts from "./pages/Posts";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Layout from "./components/Layout/Layout";
import PostIdPage from "./pages/PostIdPage";


function App() {

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout/>}>
               <Route index element={<Posts/>}/>
               <Route path='about' element={<About/>}/>
               <Route path='posts/:id' element={<PostIdPage/>}/>
               <Route path='*' element={<Error/>}/>
            </Route>
         </Routes>
         <Routes/>
      </BrowserRouter>
   );
}

export default App;
