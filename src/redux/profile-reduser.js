const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: '1', message: 'hi, gidra', like: 9 },
        { id: '2', message: 'awsome!', like: 1 },
        { id: '1', message: 'bla-bla', like: 7 },
        { id: '2', message: 'cool!', like: 5 }
    ],
    newPostText: ''/*то что внутри кавычек будет зафиксировано в провиле/ будет высвечиваться срзу при загрузкеб по скольку мы вбивает его в БЛЛ*/
};


const profileReduser = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}



export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReduser;