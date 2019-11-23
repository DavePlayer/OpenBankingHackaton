import { ADD_GOAL } from './types';

export const addGoal= (goal: any) => (dispatch: any) => {
    dispatch({type: ADD_GOAL, payload: goal })
}