import React, {useMemo, useState} from "react";
import '../style/App.scss';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";
import {getPageCount} from "../utils/pages";
import MyButton from "../UI/button/MyButton";
import MyModal from "../MyModal/MyModal";
import PostForm from "../PostForm/PostForm";
import PostFilter from "../PostFilter/PostFilter";
import PostLoader from "../UI/Loaders/PostLoader";
import PostsList from "../PostList/PostsList";
import PagePagination from "../UI/pagePagination/PagePaggination";
function Posts() {
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
      <div className="Posts">
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

export default Posts;
