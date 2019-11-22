import { FETCH_POSTS} from '../actions/types';

interface PostItem {
    items: any;
    item: any;
}

const initialState: PostItem = {
    items: [],
    item: {}
}

export default function(state = initialState, action: any) {
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}