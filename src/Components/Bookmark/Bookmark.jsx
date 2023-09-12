

// const Bookmark = ({bookmark}) => {
//        const {tittle} = bookmark;
//        return (
//               <div>
//                      <h3>tittle :{tittle}</h3>
                     
//               </div>
//        );
// };

// export default Bookmark;

import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
       const {title} = bookmark
       return (
              <div className='m-5 p-5 bg-slate-200 '>
                     <h3 className='text-2xl mt-8 mx-auto'>{title}</h3>
                     
              </div>
       );
};

Bookmark.propTypes = {

       
};

export default Bookmark;