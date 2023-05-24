import {useMemo} from "react";


export const usePagesPagination = (pages) => {
   return useMemo(() => {
      let array = [];
      for (let i = 0; i < pages; i++) {
         array.push(i + 1);
      }
      return array
   }, [pages])
}