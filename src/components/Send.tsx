import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch} from 'react-redux';
import { sendMessage } from '../actions/senMessage';
import Goal from './Goal';

interface ISendProps {
    id: string;
}

const Send:React.FC<ISendProps> = ({id}) => {
    const dispatch = useDispatch();
    const [message, setMessage]= useState('');
    
    const ms = {
        id: id,
        message: message
    }
	return (
        <div className="message-box">
            <TextField id="standard-basic" placeholder="Add message here..." onChange={(e) => setMessage(e.target.value)} value={message} />
            <SendIcon className="message-icon" onClick={() => {
                dispatch(sendMessage(ms));
                setMessage('');
                }}/>
            <Goal id={id}/>
            
        </div>
	);
}
export default Send;