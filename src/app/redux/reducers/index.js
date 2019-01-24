import { combineReducers } from 'redux';
import pageReducers from '../../../pages/redux';
import errors from './errors';

export default combineReducers({
	...pageReducers,
  errors,
});