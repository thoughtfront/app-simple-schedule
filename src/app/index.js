import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Pages from '../pages';
import SignIn from '../auth/sign-in';
import SignOut from '../auth/sign-out';
import withController from './controller';

class App extends React.Component {
  render() {
    if (!this.props.showPage) return null;

    return (
      <div className='app'>
        <Switch>
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/sign-out' component={SignOut} />
          <Route path='*' component={Pages} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(withController(App));