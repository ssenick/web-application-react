import React from 'react';
import MyButton from "../button/MyButton";
import './PagePaggination.scss'
import {usePagesPagination} from "../../hooks/usePagesPagination";
const PagePagination = ({totalPage,activePage,setPage}) => {
   const pagesArray = usePagesPagination(totalPage);
   return (
      <div className='pagination'>
         {pagesArray.map(p =>
            <MyButton onClick={()=>setPage(p)} color={activePage===p? 'red' : 'green'}  key={p}>{p}</MyButton>
         )}
      </div>
   );
};

export default PagePagination;