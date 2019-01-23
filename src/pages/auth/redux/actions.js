import axios from 'axios';
import constants from './constants';

export const signIn = (email, password) => ({
  type: constants.AUTH_SIGN_IN,
  payload: axios.post('session', {session: {email, password}}, {withCredentials: true}),
});