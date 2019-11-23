import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
//import Drawer from '@material-ui/core/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { changeMenuState } from './../actions/changeMenuState';
import { Tolbar } from './toolbar';


export const Drawer:React.FC = () => {
  const menuState:any = useSelector( ( reducers:any ) => reducers.menu)
  const dispatch = useDispatch();
  console.log(menuState)
	return (
        <>
        <SwipeableDrawer open={menuState} onClose={() => console.log('close')} onOpen={() => console.log('open')} >
            <IconButton style={{width: '2em', marginLeft: 'calc(100% - 2em)'}}  onClick={() => dispatch(changeMenuState())} edge='end' color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Tolbar groupName='xdddd' />
            <Tolbar groupName='dziala' />
            <Tolbar groupName='TNT' />
        </SwipeableDrawer>
      </>
	);
}