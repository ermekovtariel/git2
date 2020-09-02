import React from 'react';
import Post from './Post/Post'
import z from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';




const MyPosts = (props) => {
 
  

  let postElements =
    props.posts.map(p => <Post message={p.message} like={p.like} />);

  let newPostElement = React.createRef();


  let onAddPost = () => {
    props.addPost();
  }

  let onPostChang = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    }
 
  return <div className={z.allPosts}> <div>
    <h3>my post</h3>
  </div>
    <div>
      <div>
        <textarea onChange={onPostChang} ref={newPostElement}
          value={props.newPostText}/></div>
      <div className={z.buttonPost}>
        <button onClick={onAddPost}>Add</button></div>
    </div>
    <div className={z.posts}>
      {postElements}
    </div>
  </div>
}

export default MyPosts;