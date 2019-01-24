import axios from 'axios';
import constants from '../constants/errors';

export const clearAllErrors = () => ({
  type: constants.ERRORS_CLEAR_ALL,
});

export const setNetworkError = error => ({
  type: constants.ERRORS_SET_NETWORK_ERROR,
  error: error,
});