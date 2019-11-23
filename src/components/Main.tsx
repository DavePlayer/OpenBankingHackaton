import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
//import Drawer from '@material-ui/core/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { changeMenuState } from './../actions/changeMenuState';


const Main:React.FC = () => {
  const menuState:any = useSelector( ( reducers:any ) => reducers.menu)
  const dispatch = useDispatch();
  console.log(menuState)
	return (
        <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => dispatch(changeMenuState())} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Avatar alt="Remy Sharp"/>
            <Typography variant="h6">
              New Group
            </Typography>
          </Toolbar>
        </AppBar>
        {/* {menuState ? <SwipeableDrawer><SwipeableDrawer/>:null} */}
      </div>
	);
}

export default Main;