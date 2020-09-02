import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText 
}
}

const mapDiaspashToProps = (dispatch)=>{
return{
  updateNewPostText:(text)=>{
       let action = updateNewPostTextActionCreator(text);
                    dispatch(action);
  },
  addPost: ()=>{
      dispatch(addPostActionCreator());
  }
}
}
const MyPostsContainer=connect(mapStateToProps, mapDiaspashToProps)(MyPosts)

export default MyPostsContainer;






/*
!----------------------------------------------------!
Это почти одно и то же 
но то что мы сделали на верху на много лучше!!!
!----------------------------------------------------!


import StoreContext from '../../../StoreContext';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reduser';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChang = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }
        return (
          <MyPosts
            updateNewPostText={onPostChang}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />)
      }}
    </StoreContext.Consumer>
  )
}



export default MyPostsContainer;




*/