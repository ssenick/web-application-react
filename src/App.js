import React, {useMemo, useState} from "react";
import './components/style/App.scss';
import PostsList from "./components/PostList/PostsList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import PostService from "./components/API/postService";
import PostLoader from "./components/UI/Loaders/PostLoader";
import {useFetching} from "./components/hooks/useFetching";
import {getPageCount, getPagesArray} from "./components/utils/pages";
import {usePagesPagination} from "./components/hooks/usePagesPagination";
import PagePagination from "./components/UI/pagePagination/PagePaggination";

function App() {
   const [posts, setPosts] = useState([]);
   const [filter, setFilter] = useState({sort: '', query: ''});
   const [visible, setVisible] = useState(false);
   const [limit, setLimit] = useState(10)
   const [page, setPage] = useState(1);
   const [totalPage, setTotalPage] = useState(0)
   const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)

   const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
      const response = await PostService.getAll(limit, page)
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPage(getPageCount(totalCount, limit))
   });




   useMemo(() => {
      fetchPosts();
   }, [page])

   function createPost(newPost) {
      setPosts([...posts, newPost])
      setVisible(false)
   }

   function removePost(post) {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   return (
      <div className="App">
         <MyButton color='green' onClick={() => setVisible(true)}>Creat post</MyButton>
         <MyModal visible={visible} setVisible={setVisible}>
            <PostForm create={createPost}/>
         </MyModal>
         <PostFilter
            titleName='Search and filter'
            filter={filter}
            setFilter={setFilter}
         />
         {postError &&
            <h2 style={{textAlign: 'center', paddingTop: '20px', fontSize: "25px"}}>The following error has occurred:
               "{postError}"</h2>}
         {isPostsLoading
            ? <PostLoader/>
            : <PostsList remove={removePost} posts={sortedAndSearchedPost} title="Post list"/>
         }
       <PagePagination totalPage = {totalPage} activePage={page} setPage={setPage}/>
      </div>
   );
}

export default App;
