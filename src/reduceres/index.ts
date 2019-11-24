import { combineReducers } from 'redux';
import sendMessage from './sendMessage';
import goalReducer from './goalReducer';
<<<<<<< HEAD
import { menu } from './menu';
import { user } from './user';
=======
import { menu } from './menu'
import groupReducer from './groupReducer';
>>>>>>> add_group

export default combineReducers({
    messages: sendMessage,
    goals: goalReducer,
<<<<<<< HEAD
    menu,
    user,
=======
    groups: groupReducer,
    menu
>>>>>>> add_group
})