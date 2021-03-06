import React from 'react';
import { Button } from '@material-ui/core';
import * as actions from './redux/actions';
import { connect } from 'react-redux';

class Test extends React.Component {
  constructor(props) {
    super(props);

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.message !== this.props.message) return true;
    return false;
  }

  handleClick = () => {
    const { testRequest } = this.props;

    testRequest();
  }

  render() {
    const { message, history } = this.props;
    
    return (
      <div>
        <Button color='primary' variant='contained' onClick={this.handleClick}>test</Button>
        <div>
          {!!message ?  message : "No Message"}
        </div>

        <Button variant='contained' onClick={() => history.replace('sign-out')}>Sign Out</Button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { message } = state.test;
  return {
    message,
  };
}

const mapDispatchToProps = dispatch => ({
  testRequest: () => dispatch(actions.testRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);