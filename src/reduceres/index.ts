import { combineReducers } from 'redux';
import sendMessage from './sendMessage';
import goalReducer from './goalReducer';

export default combineReducers({
    messages: sendMessage,
    goals: goalReducer
})