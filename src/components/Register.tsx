import React from 'react';
import { Paper, TextField, Button, Typography} from '@material-ui/core';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps{

}


export const Register:React.FC<IProps> = ({history}) => {
    return (
        <div>
            <Paper style={{display: 'flex', flexWrap: 'wrap', gap: '1em', justifyContent: 'center', alignItems: 'center', padding: '1em'}}>
                <Typography style={{flexBasis: '100%', textAlign: 'center'}} variant="h5">Register</Typography>
                <TextField style={{flexBasis: '47.5%'}} label='Name' variant='outlined' />
                <TextField style={{flexBasis: '47.5%'}} label='Lastname' variant='outlined' />
                <TextField style={{flexBasis: '100%'}} label='E-mail' type='email' variant='outlined' />
                <TextField style={{flexBasis: '100%'}} label='Password' type='password' variant='outlined' />
                <TextField style={{flexBasis: '100%'}} label='Repeat password' type='password' variant='outlined' />
                <Button onClick={() => history.push('/groups/TNT')} style={{flexBasis: '100%'}} variant="contained" color="primary">Confirm</Button>
            </Paper>
        </div>
    )
}
