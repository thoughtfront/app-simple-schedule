import React from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import * as actions from './redux/actions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleEmailChange = (event) => {
    const { currentTarget: { value } } = event;
    this.setState({
      email: value,
    });
  }

  handlePasswordChange = (event) => {
    const { currentTarget: { value } } = event;
    this.setState({
      password: value,
    });
  }

  handleSignIn = () => {
    const { signIn } = this.props;
    const { email, password } = this.state;
    signIn(email, password);
  }

  render() {
    const { email, password } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.formWrapper}>
        <TextField className={classes.formField} onChange={this.handleEmailChange} value={email} label='Email' />
        <TextField className={classes.formField} onChange={this.handlePasswordChange} value={password} label='Password' type='password' />
        <Button className={classes.formSubmit} variant='contained' color='primary' onClick={this.handleSignIn}>Sign inspect</Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(actions.signIn(email, password)),
});

const styles = {
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
  },
  formField: {
    marginBottom: '10px',
  },
  formSubmit: {
    width: '150px',
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SignIn));