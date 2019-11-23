import React from 'react';
import IconButton from '@material-ui/core/IconButton';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Drawer } from '@material-ui/core';
//import Drawer from '@material-ui/core/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { changeMenuState } from './../actions/changeMenuState';
import { Tolbar } from './toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps{

}

export const Drawerr:React.FC<IProps> = ({ history }) => {
  const menuState:any = useSelector( ( reducers:any ) => reducers.menu)
  const dispatch = useDispatch();
  console.log(menuState)
	return (
        <>
        <Drawer open={menuState} >
          {/* <Drawer anchor='left'> */}
            <div style={{display: 'flex'}}>
              <div style={{flexBasis: '80%', display: 'flex', justifyContent: 'flex-start'}}>
                <IconButton onClick={() => history.push('/users/')} style={{width: '2em', marginRight: '0.1em'}}  onClick={() => dispatch(changeMenuState())} edge='end' color="inherit" aria-label="menu">
                    <AccountCircleIcon style={{transform: 'scale(1.5, 1.5)'}}/>
                </IconButton >
                <IconButton style={{width: '2em', marginRight: '0.1em'}}  onClick={() => dispatch(changeMenuState())} edge='end' color="inherit" aria-label="menu">
                    <GroupAddIcon style={{transform: 'scale(1.5, 1.5)'}} />
                </IconButton>
                <IconButton style={{width: '2em', marginRight: '0.1em'}}  onClick={() => dispatch(changeMenuState())} edge='end' color="inherit" aria-label="menu">
                    <SearchIcon style={{transform: 'scale(1.5, 1.5)'}} />
                </IconButton>
              </div>
              <div style={{flexBasis: '20%', display: 'flex', justifyContent: 'flex-end'}}>
                <IconButton style={{width: '2em', marginRight: '0.2em'}}  onClick={() => dispatch(changeMenuState())} edge='end' color="inherit" aria-label="menu">
                    <ArrowBackIcon style={{transform: 'scale(1.5, 1.5)'}} />
                </IconButton>
              </div>
            </div>
            <br/>
            <Tolbar groupName='Body pillow and anime' />
            <Tolbar groupName='xdddd' />
            <Tolbar groupName='TNT' />
          </Drawer>
        {/* </Drawer> */}
      </>
	);
}