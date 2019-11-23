import React from 'react'
import { useSelector } from 'react-redux';
import { IUser } from './../reduceres/user';
import { Paper, Typography, Avatar, Card } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const Profile = () => {
    const user:IUser = useSelector( ( reducers:any ) => reducers.user );
    return (
        <>
        <Paper style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3em', }}>
            <Avatar style={{transform: 'scale(2, 2)', position: 'relative', top: '-1em'}} />
            <Typography variant='h4'>{`${user.name} ${user.lastName}`}</Typography>
            <div style={{padding: '1em' ,alignItems: 'center', display: 'flex', borderBottom: '1px solid #aaa', width: '95%'}}><AlternateEmailIcon />{' '+user.mail}</div>
            <Typography variant='h6'>Transaction History</Typography>
        </Paper>
        <Card>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Group</TableCell>
                        <TableCell>Ammount</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </Card>
    </>
    )
}
