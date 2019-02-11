import axios from 'axios';
import constants from './constants';

export const signIn = (email, password) => ({
  type: constants.AUTH_SIGN_IN,
  payload: axios.post('session', {session: {email, password}}),
});

export const signOut = () => ({
  type: constants.AUTH_SIGN_OUT,
  payload: axios.delete('session'),
});

export const loggedInCheck = () => ({
  type: constants.AUTH_LOGGED_IN_CHECK,
  payload: axios.get('session'),
});