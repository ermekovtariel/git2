import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: '1', message: 'hi, gidra', like: 9 },
        { id: '2', message: 'awsome!', like: 1 },
        { id: '1', message: 'bla-bla', like: 7 },
        { id: '2', message: 'cool!', like: 5 }
      ],
      newPostText: ''/*то что внутри кавычек будет зафиксировано в провиле/ будет высвечиваться срзу при загрузкеб по скольку мы вбивает его в БЛЛ*/
    },
    dialogsPage: {
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
        { id: '8', name: 'Doch' }],

      
        
      


    },
    sidebar:{}
    },
_callSubscriber() { console.log('state was changed') },
getState() {
  return this._state;
},
subscribe(obsever) {
  this._callSubscriber = obsever;/*наблюдатель/patern/observer//ПОХОЖ НА PUBLISHER-SUBSCRIBER*/
},
dispatch(action) {// это будет например ={type:'ADD-POST'}оно всегда будет текстовым
 
  this._state.profilePage=profileReduser(this._state.profilePage, action)
  this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
  this._state.sidebar = sidebarReduser(this._state.sidebar, action)

  this._callSubscriber(this._state);



}
}




export default store;
window.state = store;
  //store-OOP
