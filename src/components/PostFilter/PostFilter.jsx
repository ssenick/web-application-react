import React from 'react';
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";
import s from './PostFilter.module.scss'

const PostFilter = ({filter, setFilter,titleName}) => {
   return (
      <div className={s.postFilter}>
         <h2 className={s.title}>{titleName}</h2>
         <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder={'Search...'}
         />
         <MySelect
            value={filter.sort}
            onChange={ selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Sorting"
            options={[
               {value: 'title', name: 'By name'},
               {value: 'body', name: 'By description '}
            ]}/>
      </div>
   );
};

export default PostFilter;