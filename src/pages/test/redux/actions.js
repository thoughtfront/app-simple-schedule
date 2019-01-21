import axios from 'axios';
import constants from './constants';
import config from '../../../configuration';

const buildURL = path => {
  return `${config.apiHost}/${path}`;
}

export const testRequest = () => ({
  type: constants.TEST_REQUEST,
  payload: axios.get(buildURL('test')),
});