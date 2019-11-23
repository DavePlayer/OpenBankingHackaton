import { combineReducers } from 'redux';
import sendMessage from './sendMessage';

export default combineReducers({
    messages: sendMessage
})