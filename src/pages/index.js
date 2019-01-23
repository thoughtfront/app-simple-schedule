import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from './test';
import SignIn from './auth/sign-in';

class Pages extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/test' component={Test} />
        <Route exact path='/sign-in' component={SignIn} />
      </Switch>
    )
  }
}

export default Pages;