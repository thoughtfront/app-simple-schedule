import { combineReducers } from 'redux';
import pageReducers from '../../../pages/redux';

export default combineReducers({
	...pageReducers,
});