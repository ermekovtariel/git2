import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {

    return {
        
        dialogsPage: state.dialogsPage
    }
}

let mapDiaspachToProps = (dispatch) => {
        return   {
             sendMessage: () => {
                dispatch( sendMessageCreator());
        },
            updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
        }
}

const DialogsContainer = connect(mapStateToProps, mapDiaspachToProps)(Dialogs);

export default DialogsContainer;



