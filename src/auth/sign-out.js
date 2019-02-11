import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from './redux/actions';

class SignOut extends React.Component {
  constructor(props) {
    super(props);
    props.signOut();
  }

  render() {
    return (
      <Redirect to='/sign-in' />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(actions.signOut()),
});

export default connect(null, mapDispatchToProps)(SignOut);