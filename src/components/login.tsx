import React from 'react'
import { Paper, TextField, Grid,  } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons/';
import LockIcon from '@material-ui/icons/Lock';



export const Login = () => {
    return (
        <div>
            <Paper style={{display: 'flex', flexWrap: 'wrap', gap: '1em', justifyContent: 'center', alignItems: 'center', padding: '1em'}}>
                <div style={{textAlign: 'center'}}>   
                    <Grid container spacing={0} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="With a grid" />
                    </Grid>
                    </Grid>
                </div>
                <div style={{textAlign: 'center'}}>   
                    <Grid container spacing={0} alignItems="flex-end">
                    <Grid item>
                        <LockIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="With a grid" />
                    </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    )
}
