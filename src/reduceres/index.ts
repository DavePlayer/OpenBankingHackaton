import { combineReducers } from 'redux';
import postReducer from './postReducer';
import { menu } from './menu';

export default combineReducers({
    posts: postReducer,
    menu,

})