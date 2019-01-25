import axios from 'axios';
import constants from './constants';

export const testRequest = () => ({
  type: constants.TEST_REQUEST,
  payload: axios.get('test'),
});