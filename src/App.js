import React from "react";
import './style/App.scss';
import Posts from "./pages/Posts";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Layout from "./components/Layout/Layout";
import PostIdPage from "./pages/PostIdPage";
import RequireAuth from "./hoc/RequireAuth";
import LoginPage from "./pages/LoginPage";
import {AuthProvider} from "./hoc/AuthProvider"

function App() {

   return (
      <AuthProvider>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Layout/>}>
                  <Route index element={
                     <RequireAuth>
                        <Posts/>
                     </RequireAuth>
                  }/>
                  <Route path='about' element={
                     <RequireAuth>
                        <About/>
                     </RequireAuth>
                  }/>
                  <Route path='posts/:id' element={
                     <RequireAuth>
                        <PostIdPage/>
                     </RequireAuth>
                  }/>
                  <Route path='login' element={<LoginPage/>}/>
                  <Route path='*' element={<Error/>}/>
               </Route>
            </Routes>
            <Routes/>
         </BrowserRouter>
      </AuthProvider>
   );
}

export default App;
