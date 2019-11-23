import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

interface IMessageProps {
    message: string;
}

const Message:React.FC<IMessageProps> = ({message}) => {
	return (
        <Grid container spacing={0} className="message">
            <Grid item xs={2}>
                <Avatar alt="user" className="message-avatar"/>
            </Grid>
            <Grid item xs={10}>
                <Paper className="message-content">
                    <h3>John Kowalski</h3>
                    <p>{message}</p>
                </Paper>
            </Grid>
        </Grid>
	);
}

export default Message;