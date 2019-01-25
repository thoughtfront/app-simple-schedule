import { combineReducers } from 'redux';
import pageReducers from '../../../pages/redux';
import errors from './errors';
import auth from '../../../auth/redux/reducers';

export default combineReducers({
	...pageReducers,
  errors,
  auth,
});