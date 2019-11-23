import React from 'react';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
//import Drawer from '@material-ui/core/Drawer';
import { Header } from './Header';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { test } from './test';


const Main:React.FC = () => {
	return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={test} />
            <Route path='/groups/:id?' exact  component={Header} />
            <Route path='/' render={() => <div>$404 debilu</div>} />
          </Switch>
        </BrowserRouter> 
      </div>
	);
}

export default Main;