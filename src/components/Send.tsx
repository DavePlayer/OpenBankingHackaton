import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch} from 'react-redux';
import { sendMessage } from '../actions/senMessage';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Dialog from '@material-ui/core/Dialog';
import Goal from './Goal';



const Send:React.FC = () => {
    const dispatch = useDispatch();
    const [message, setMessage]= useState('');
    const [open, setOpen] = useState(false)
    

	return (
        <div className="message-box">
            <TextField id="standard-basic" placeholder="Add message here..." onChange={(e) => setMessage(e.target.value)} value={message} />
            <SendIcon className="message-icon" onClick={() => {
                dispatch(sendMessage(message));
                setMessage('');
                }}/>
            <AddCircleOutlineIcon className="message-icon" onClick={() => setOpen(true)}/>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <Goal />
            </Dialog>
            
        </div>
	);
}
export default Send;