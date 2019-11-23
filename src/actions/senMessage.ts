import { SEND_MESSAGE } from './types';

export const sendMessage= (msg: any) => (dispatch: any) => {
    dispatch({type: SEND_MESSAGE, payload: msg })
}