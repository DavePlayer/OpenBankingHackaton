import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch} from 'react-redux';
import { sendMessage } from '../actions/senMessage';

const Send:React.FC = () => {
    const dispatch = useDispatch();
    const [message, setMessage]= useState('');
    //const [messages, setMessages] = useState(['']);

    //const messages: any = useSelector((msg: any) => msg);
    

	return (
        <div className="message-box">
            <TextField id="standard-basic" placeholder="Add message here..." onChange={(e) => setMessage(e.target.value)} value={message} />
            <SendIcon className="send-icon" onClick={() => {
                dispatch(sendMessage(message));
                setMessage('');
                }}/>
        </div>
	);
}

export default Send;