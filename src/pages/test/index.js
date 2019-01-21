import React from 'react';
import { Button } from '@material-ui/core';
import * as actions from './redux/actions';
import { connect } from 'react-redux';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { testRequest } = this.props;
    console.warn('click');
    testRequest();
  }

  render() {
    return (
      <div>
        <Button color='primary' variant='contained' onClick={this.handleClick}>test</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  testRequest: () => dispatch(actions.testRequest()),
});

export default connect(null, mapDispatchToProps)(Test);