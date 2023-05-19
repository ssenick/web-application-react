import React from 'react';
import  './MyModal.scss'

const MyModal = ({children,visible,setVisible}) => {
   // const rootClasses = [s.modal]
   // if(visible){
   //    rootClasses.push([s.active])
   // }
   return (
      <div className={visible ? 'modal active' : 'modal' } onClick={()=>setVisible(false)}>
         <div className='modal__content' onClick={e=> e.stopPropagation()}>
            {children}
         </div>
      </div>
   );
};

export default MyModal;