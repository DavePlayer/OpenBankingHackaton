import React from 'react'
import { Paper, TextField, Grid, Button, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons/';
import LockIcon from '@material-ui/icons/Lock';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './../actions/fetchUser'

interface IProps extends RouteComponentProps{

}


export const Login:React.FC<IProps> = ({history}) => {
    const dispatch = useDispatch();
    const user = useSelector( (reducers:any) => reducers.user)

    return (
        <div>
            <Paper style={{display: 'flex', flexWrap: 'wrap', gap: '1em', justifyContent: 'center', alignItems: 'center', padding: '1em'}}>
                <div style={{textAlign: 'center'}}>   
                    <Grid container spacing={0} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="e-mail" type='email' />
                    </Grid>
                    </Grid>
                </div>
                <div style={{textAlign: 'center', marginBottom: '1em'}}>   
                    <Grid container spacing={0} alignItems="flex-end">
                    <Grid item>
                        <LockIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" type='password' label="Password" />
                    </Grid>
                    </Grid>
                </div>
                <Button onClick={() => {
                    try{
                        console.log('try')
                        dispatch(fetchUser('10.12.250.86:3000/login'));
                        history.push(`users/${user.name}/groups/Pizza`);
                    } catch(error){
                        console.log(error)
                }}} style={{flexBasis: '100%'}} variant="contained" color="primary">Login</Button>
                <Typography variant="h5">OR</Typography>
                <Button onClick={() => history.push('/register')} style={{flexBasis: '100%'}} variant="contained" color="primary">Register</Button>
            </Paper>
        </div>
    )
}
