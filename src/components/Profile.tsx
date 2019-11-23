import React from 'react'
import { useSelector } from 'react-redux';
import { IUser } from './../reduceres/user';
import { Paper, Typography } from '@material-ui/core';

export const Profile = () => {
    const user:IUser = useSelector( ( reducers:any ) => reducers.user );
    return (
        <Paper style={{textAlign: 'center'}}>
            <Typography variant='h4'>{`${user.name} ${user.lastName}`}</Typography>
            <Typography variant='h5'>{`mail: ${user.mail}`}</Typography>
        </Paper>
    )
}
