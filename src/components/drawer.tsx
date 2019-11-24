import React from 'react';
import IconButton from '@material-ui/core/IconButton';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Drawer } from '@material-ui/core';
//import Drawer from '@material-ui/core/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { changeMenuState } from './../actions/changeMenuState';
import { Tolbar } from './toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';
import AddGroup from './AddGroup';

export const Drawerr = withRouter(({ history, match }) => {
  const menuState:any = useSelector( ( reducers:any ) => reducers.menu)
  const dispatch = useDispatch();
  const group: any = useSelector((el: any) => el);
  console.log(group.groups.groups);
	return (
        <>
        <Drawer open={menuState} >
          {/* <Drawer anchor='left'> */}
            <div style={{display: 'flex'}}>
              <div style={{flexBasis: '80%', display: 'flex', justifyContent: 'flex-start'}}>
                <IconButton style={{width: '2em', marginRight: '0.1em'}}  onClick={() => {history.push(`/users/${match.params.user}`)}} edge='end' color="inherit" aria-label="menu">
                    <AccountCircleIcon style={{transform: 'scale(1.5, 1.5)'}}/>
                </IconButton >
                  <AddGroup />
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
            <Tolbar groupName='Pizza' />
            <Tolbar groupName='MyTeam' />
            {group.groups.groups.map((el: any)=> (
                <Tolbar groupName={el.g_name} />
            ))}
          </Drawer>
        {/* </Drawer> */}
      </>
	);
});