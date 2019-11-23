import React from 'react';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';


const Send:React.FC = () => {
	return (
        <div className="message-box">
            <TextField id="standard-basic" placeholder="Add message here..." />
            <SendIcon className="send-icon"/>
        </div>
	);
}

export default Send;