import { combineReducers } from 'redux';
import sendMessage from './sendMessage';
import goalReducer from './goalReducer';
import { menu } from './menu';
import { user } from './user';

export default combineReducers({
    messages: sendMessage,
    goals: goalReducer,
    menu,
    user,
})