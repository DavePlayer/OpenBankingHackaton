import { combineReducers } from 'redux';
import sendMessage from './sendMessage';
import goalReducer from './goalReducer';
import { menu } from './menu';
import { user } from './user';
import groupReducer from './groupReducer';

export default combineReducers({
    messages: sendMessage,
    goals: goalReducer,
    groups: groupReducer,
    menu,
    user
})