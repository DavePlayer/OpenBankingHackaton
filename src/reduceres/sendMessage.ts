import { SEND_MESSAGE } from '../actions/types';

interface SendMessage {
    text: Array<object>;
}

const initialState: SendMessage = {
    text: [],
}

export default function(state = initialState, action: any) {
    switch(action.type){
        case SEND_MESSAGE:
            return {
                ...state,
                text: [...state.text, action.payload ]
            }
        default:
            return state;
    }
}