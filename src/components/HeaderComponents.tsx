import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
//import Drawer from '@material-ui/core/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { changeMenuState } from './../actions/changeMenuState';
import * as img from '../assets/img/group.png';

interface IProps{
  id: string
}

export const HeaderComponents:React.FC<IProps> = (props) => {
  const menuState:any = useSelector( ( reducers:any ) => reducers.menu)
  const dispatch = useDispatch();
  console.log(menuState)
	return (
        <>
        <AppBar position="static">
          <Toolbar style={{display: 'flex', justifyContent: 'center'}}>
            <IconButton style={{flexBasis: '2%'}} onClick={() => dispatch(changeMenuState())} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <div style={{flexBasis: '98%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Avatar alt="Remy Sharp" style={{marginRight: '0.5em'}} src={img}/>
                <Typography variant="h6">
                  {props.id}
                </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </>
	);
}