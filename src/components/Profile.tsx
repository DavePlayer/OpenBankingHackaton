import React from 'react'
import { useSelector } from 'react-redux';
import { IUser } from './../reduceres/user';
import { Paper, Typography, Avatar, Card } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { useDispatch }from 'react-redux'
import { changeMenuState } from './../actions/changeMenuState';
import { EditProfile } from './editProfile';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import BorderColorIcon from '@material-ui/icons/BorderColor';

export const Profile = () => {
    const user:IUser = useSelector( ( reducers:any ) => reducers.user );
    const dispatch = useDispatch()
    return (
        <>
        <EditProfile />
        <Paper style={{display: 'flex', backgroundColor: '#1D5DFF', color: 'white', marginBottom: '1em' , border:'1px solid #eee', flexDirection: 'column', alignItems: 'center', marginTop: '3em', }}>
            <Avatar style={{transform: 'scale(2, 2)', marginBottom: '1em', position: 'relative', top: '-1em'}} />
            <Typography variant='h4'>{`${user.name} ${user.lastName}`}</Typography>
            <div style={{padding: '0.5em', marginBottom: '0.5em' ,alignItems: 'center', justifyContent: 'space-between', display: 'flex', borderBottom: '1px solid #ccc', width: '85%'}}>
            <div>
            <AlternateEmailIcon />
            {' '+user.mail}
            </div>
            <IconButton onClick={() => dispatch(changeMenuState())} edge="start" color="inherit" aria-label="menu"><BorderColorIcon /></IconButton>
            </div>
        </Paper>
        <Card style={{border:'1px solid #bbb', textAlign: 'center'}}>
            <Typography style={{marginTop: '0.5em'}} variant='h6'>Transaction History</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Group</b></TableCell>
                        <TableCell><b>Ammount</b></TableCell>
                        <TableCell><b>Date</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.transactionHistory.map( (transaction: any) => {
                        return(
                            <TableRow>
                                <TableCell>{transaction.group.name}</TableCell>
                                <TableCell>{transaction.moneyAmmount}</TableCell>
                                <TableCell>{transaction.date.toString()}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Card>
    </>
    )
}
