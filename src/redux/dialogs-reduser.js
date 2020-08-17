const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';



let initialState = {
    message: [
        { id: '1', message: 'ho' },
        { id: '2', message: 'how r u?' },
        { id: '3', message: 'yo' },
        { id: '3', message: 'yo' },
        { id: '5', message: 'yo' }],
    newMessagebody: '',
    dialogs: [
        { id: '1', name: 'Mama' },
        { id: '2', name: 'Papa' },
        { id: '3', name: 'Brat' },
        { id: '3', name: 'Sestar' },
        { id: '5', name: 'Muzh' },
        { id: '6', name: 'Zhena' },
        { id: '7', name: 'Syn' },
        { id: '8', name: 'Doch' }]
};


const dialogsReduser = (state = initialState , action)=>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.message.push({ id: 6, message: body });
            return state;
    
        default:
            return state;
    }
}




export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReduser;