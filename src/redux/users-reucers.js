const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        { id: '1', fullName: 'Bratik', like: 9 },
        { id: '2', message: 'awsome!', like: 1 },
        { id: '1', message: 'bla-bla', like: 7 },
        { id: '2', message: 'cool!', like: 5 }
    ],
 };


const usersReducer = (state = initialState, action) => {
    switch (action.type){
   
        default:
            return state;
    }
}



export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default usersReducer;

