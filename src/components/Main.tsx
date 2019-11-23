import React from 'react';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
//import Drawer from '@material-ui/core/Drawer';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { test } from './test';
import { mainContent } from './mainContent'

import { useSelector } from 'react-redux';

const Main:React.FC = () => {

  const messages: any = useSelector((msg: any) => msg);

  const msg = messages.messages.text;
  console.log(msg);
	return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={test} />
            <Route path='/groups/:id' exact  component={mainContent} />
            <Route path='/' render={() => <div>$404 Nie dziala</div>} />
          </Switch>
        </BrowserRouter> 
      </div>
	);
}

export default Main;