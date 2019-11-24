import { ADD_GROUP } from './types';

export const addGroup= (group: any) => (dispatch: any) => {
    dispatch({type: ADD_GROUP, payload: group })
}