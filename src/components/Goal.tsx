import React, { useState } from 'react';
import { DialogTitle, Dialog } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addGoal } from '../actions/addGoal';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import { addGoal } from 'actions/addGoal';
interface IGoalProps {
    id: string;
}

const Goal:React.FC<IGoalProps> = ({id}) => {
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [open, setOpen] = useState(false)
const [date, setDate] = useState('2019-11-24');
const [err, setErr] = useState('');

const dispatch = useDispatch();

const goal ={
    name: name,
    price: price,
    date: date,
    id: id
}

const setGoal = () => {
    setOpen(false);
    if(isNaN(parseInt(price))){
        setErr("Invalid price!");
    } else {
        dispatch(addGoal(goal));
    }
}
	return (
        <>
        <AddCircleOutlineIcon className="message-icon" onClick={() => setOpen(true)}/>
        <Dialog open={open} >
            <div className="err">{err}</div>
            <DialogTitle>Add a goal</DialogTitle>
            <TextField className="price" id="standard-basic" label="Name" onChange={(e) => setName(e.target.value)}/>
            <div className="goal">
                <TextField id="standard-basic" label="Price" onChange={(e) => setPrice(e.target.value)}/>
                <TextField
                onChange={(e) => setDate(e.target.value)}
                id="date"
                label="Date"
                type="date"
                defaultValue="2019-11-24"
                InputLabelProps={{
                shrink: true,
                }}
                />
            </div>
            <Button variant="contained" color="primary" onClick={() => setGoal()}>
                Add
            </Button>
        </Dialog>
        </>
	);
}
export default Goal;