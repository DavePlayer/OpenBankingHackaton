import { combineReducers } from 'redux';
import sendMessage from './sendMessage';
import postReducer from './postReducer';
import { menu } from './menu';

export default combineReducers({
    messages: sendMessage,
    posts: postReducer,
    menu,

})