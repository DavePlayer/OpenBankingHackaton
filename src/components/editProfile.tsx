import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {TextField, Button, Typography}from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { changeMenuState } from './../actions/changeMenuState'
import { updateUser } from './../actions/updateUser'

export const EditProfile = () => {
    const menuState:any = useSelector( ( reducers:any ) => reducers.menu);
    const user:any = useSelector( (reducers:any) => reducers.user )
    const dispatch = useDispatch()
    const [state, setState] = useState(user);
    console.log('DASDA: ', menuState);
    return (
       <Drawer open={menuState} anchor='top'>
           <div style={{display: 'flex', flexWrap: 'wrap', gap: '1em', justifyContent: 'center', alignItems: 'center', padding: '1em'}}>
           <Typography style={{flexBasis: '100%', textAlign: 'center'}} variant="h5">Change Profile Data</Typography>
                <TextField style={{flexBasis: '47.5%'}} name='name' onChange={(e) => setState({...state, [e.target.name]: e.target.value})} value={state.name} label='Name' variant='outlined' />
                <TextField style={{flexBasis: '47.5%'}} name='lastName' onChange={(e) => setState({...state, [e.target.name]: e.target.value})} value={state.lastName} label='Lastname' variant='outlined' />
                <TextField style={{flexBasis: '100%'}}  name='mail' onChange={(e) => setState({...state, [e.target.name]: e.target.value})} value={state.mail} label='E-mail' type='email' variant='outlined' />
                <TextField style={{flexBasis: '100%'}}  name='newPassword' onChange={(e) => setState({...state, [e.target.name]: e.target.value})} value={state.newPassword} label='Password' type='password' variant='outlined' />
                <Button onClick={(e) => {e.preventDefault(); dispatch(updateUser(state)); dispatch(changeMenuState())}} style={{flexBasis: '100%', marginBottom: '1em'}} variant="contained" color="primary">Confirm</Button>
                <Button onClick={() => dispatch(changeMenuState())} style={{flexBasis: '100%'}} variant="contained" color="primary">Cancel</Button>
            </div>
       </Drawer>
    );
};
