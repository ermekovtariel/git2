import React from 'react';
import Post from './Post/Post'
import z from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reduser';




const MyPosts = (props) => {

  let postElements =
    props.posts.map(p => <Post message={p.message} like={p.like} />);

  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost(); 
    //props.dispatch(addPostActionCreator());
  }

  let onPostChang = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text}); можно так но сейчас мы меняем ее на переменную
    // let action = {type:'UPDATE-NEW-POST-TEXT', newText:text};
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
  }
 
  return <div className={z.allPosts}> <div>
    <h3>my post</h3>
  </div>
    <div>
      <div>
        <textarea onChange={onPostChang} ref={newPostElement}
          value={props.newPostText}/></div>
      <div className={z.buttonPost}>
        <button onClick={addPost}>Add</button></div>
    </div>
    <div className={z.posts}>
      {postElements}
    </div>
  </div>
}

export default MyPosts;