import React from 'react';

import z from './Post.module.css';




const Post = (props) => {

  return (
    <div className={z.item}>
      <img src='https://sun9-64.userapi.com/juUOcQUIjrwEoDwsMOmSLoX3p8jLHbbVBXhrfw/QLkNG_Sp9Tw.jpg'/>
        {props.message}
        <div className={z.likeButton}>
          <button className={z.like}>like {props.like}</button> 
         </div>
     </div>
  )

}

export default Post;