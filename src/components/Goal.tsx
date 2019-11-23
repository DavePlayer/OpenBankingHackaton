import React from 'react';
import { DialogTitle } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const Goal:React.FC = () => {

	return (
        <>
            <DialogTitle>Add a goal</DialogTitle>
            <TextField className="price" id="standard-basic" label="Name" />
            <div className="goal">
                <TextField id="standard-basic" label="Price" />
                <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2019-11-24"
                InputLabelProps={{
                shrink: true,
                }}
                />
            </div>

        </>
	);
}
export default Goal;