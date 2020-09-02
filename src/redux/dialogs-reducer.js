const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';



let initialState = {

    dialogs: [
        { id: '1', name: 'Mama' },
        { id: '2', name: 'Papa' },
        { id: '3', name: 'Brat' },
        { id: '3', name: 'Sestar' },
        { id: '5', name: 'Muzh' },
        { id: '6', name: 'Zhena' },
        { id: '7', name: 'Syn' },
        { id: '8', name: 'Doch' }],
    message: [
        { id: '1', message: 'ho' },
        { id: '2', message: 'how r u?' },
        { id: '3', message: 'yo' },
        { id: '3', message: 'yo' },
        { id: '5', message: 'yo' }],
    newMessagebody: ''
};


const dialogsReducer = (state = initialState, action) => {

    //let stateCopy; =мы решили не создавать ничего, чьлбыкакойто обьект создавался и ретурнился сразу
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            /*stateCopy =*/ return {
                ...state,//тут я копирую state
                newMessageBody: action.body//ТУТ МЫ МУТИРУЕМ=>state.newMessageBody=action.body
            };
        /* return stateCopy; поскольку мы перестали пользоваться let stateCopy нам это уже не нужно*/
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            /*stateCopy =*/return {
                ...state,
                message: [...state.message, { id: 6, message: body }],//здесть мы меняем именно обект, которую мы скопировали со state
                newMessageBody: '',//МУТИРУЕМ
                //message.push({ id: 6, message: body })=>мы ее передвинули в message, ТАК сейчас пушится 
                /*МУТИРУЕМ ВОТ ЭТО=>stateCopy.newMessageBody = '';
                  stateCopy.message.push({ id: 6, message: body });
                */
            };
        /* return stateCopy;*/

        default:
            return state;
    }
}




export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;