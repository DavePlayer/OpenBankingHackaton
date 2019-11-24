import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { useSelector } from 'react-redux'

export const EditProfile = () => {
    const menuState:any = useSelector( ( reducers:any ) => reducers.menu);
    console.log('DASDA: ', menuState);
    return (
       <Drawer open={menuState} anchor='top'>
           dsadjsaj
       </Drawer>
    );
};
