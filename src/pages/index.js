import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from './test';

class Pages extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/test' component={Test} />
      </Switch>
    )
  }
}

export default Pages;