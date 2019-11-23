import { ADD_GOAL } from '../actions/types';

interface SendMessage {
    goal: Array<object>;
}

const initialState: SendMessage = {
    goal: []
}

export default function(state = initialState, action: any) {
    switch(action.type){
        case ADD_GOAL:
            return {
                ...state,
                goal: [...state.goal, action.payload ]
            }
        default:
            return state;
    }
}