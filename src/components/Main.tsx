import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Login } from './login';
import { mainContent } from './mainContent'
import { useSelector } from 'react-redux';
import { Register } from './Register';
import { Profile } from './Profile'

const Main:React.FC = () => {

  const messages: any = useSelector((msg: any) => msg);

  const msg = messages.messages.text;
  console.log(msg);
	return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/users/:user' exact component={Profile} />
            <Route path='/users/:user/groups/:id' exact  component={mainContent} />
            <Route path='/' render={() => <div>$404 Nie dziala</div>} />
          </Switch>
        </BrowserRouter> 
      </div>
	);
}

export default Main;