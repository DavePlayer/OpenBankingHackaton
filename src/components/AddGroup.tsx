import React, { useState } from 'react';
import { Dialog, IconButton, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { changeMenuState } from './../actions/changeMenuState';
import FriendsList from './FriendsList';
import { addGroup } from '../actions/addGroup';

const AddGroup:React.FC = () => {
const [open, setOpen] = useState(false);
const [group_name, setGroup_name] = useState('');
//const [users] = useState([]);
const dispatch = useDispatch();

const friends = ["Szymon", "Dawid", "Kamila"];

const group = {
    g_name: group_name,
}

	return (
        <>
        <IconButton style={{width: '2em', marginRight: '0.1em'}}  onClick={() => {
            setOpen(true);
            }} edge='end' color="inherit" aria-label="menu">
            <GroupAddIcon style={{transform: 'scale(1.5, 1.5)'}} />
        </IconButton>
        <Dialog className="add_group" open={open} onClose={() => dispatch(changeMenuState())}>
            <h2>Add Group</h2>
            <TextField id="standard-basic" label="Group name" onChange={(e) => setGroup_name(e.target.value)}/>
            <FriendsList friends={friends}/>
            <Button variant="contained" color="primary" onClick={() => {
                setOpen(false);
                dispatch(addGroup(group)
                )}}>
                 Add Group
            </Button>
        </Dialog>
        </>
	);
}
export default AddGroup;