import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { LinearProgress, Button, Dialog } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const GoalReminder:React.FC = () => {

    const [open, setOpen] = useState(false);
    const [payment, setPayment] = useState('0');
    const [price, setPrice] = useState('');
    const [err, setErr] = useState('');
    const goal: any = useSelector((el: any) => el);
    const [completed, setCompleted] = useState(0);

    const pay = () => {
        if(isNaN(parseInt(payment)) || parseInt(payment)>parseInt(price)){
            setErr("Invalid price!");
        } else {
            setCompleted(Math.floor(parseInt(payment)/parseInt(price) *100));
            setOpen(false);
        }
    }
	return (
        <>
            {goal.goals.goal.map((el:any)  => el.name != '' && (
                <Paper className="goal-reminder">
                <div>
                    <LinearProgress variant="determinate" value={completed} />
                    <div className="pay">
                    <h4>{el.date}</h4>
                    <h4>{el.name}</h4>
                    <p>{parseInt(payment) > parseInt(price) ? 0 : payment}/{el.price}</p>
                    <Button variant="contained" color="primary" className="pay-button" onClick={() => {
                        setOpen(true);
                        setPrice(el.price);
                    }}>
                        Pay
                    </Button>
                    </div>
                </div>
                </Paper>
            ))}

            
            <Dialog open={open}>
                <div className="payment">
                    <div className="err">{err}</div>
                    <h2>Payment</h2>
                    <TextField id="standard-basic" label="Payment" onChange={(e) => setPayment(e.target.value)}/>
                    <Button variant="contained" color="primary" className="pay-button" onClick={() => pay()}>
                            Pay
                        </Button>
                </div>
            </Dialog>
        </>
    );
}
export default GoalReminder;