import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';


const Main:React.FC = () => {
	return (
        <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Avatar alt="Remy Sharp"/>
            <Typography variant="h6">
              New Group
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
	);
}

export default Main;