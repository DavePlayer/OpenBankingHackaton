import { ADD_GROUP } from '../actions/types';

interface SendMessage {
    groups: Array<object>;
}

const initialState: SendMessage = {
    groups: []
}

export default function(state = initialState, action: any) {
    switch(action.type){
        case ADD_GROUP:
            return {
                ...state,
                groups: [...state.groups, action.payload ]
            }
        default:
            return state;
    }
}