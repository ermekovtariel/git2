import React from 'react';
import z from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reduser';

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;


    let dialogsElements =
        state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);
    let messageElement =
        state.message.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;


    let newMessageElement = React.createRef();

    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange=(e)=>{
       let body = e.target.value; //target= это и есть тот самый textarea
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let sendMessage = () => {
        let messEl = newMessageElement.current.value;
        console.log(messEl);
    }
    





return <div className={z.dialogs}>
    <div className={z.dialogsItem}>
        {dialogsElements}
    </div>
    <div className={z.massages}>
        <div>
        {messageElement}
        </div>  
        <br></br>
        <div> 
            <div>
                <textarea value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='Напиши что-нимбудь наконец'></textarea>
            </div>

            <div>
                <button onClick={onSendMessageClick}>send</button>
            </div>
        </div>
    </div>


   
   
</div>
}
export default Dialogs;