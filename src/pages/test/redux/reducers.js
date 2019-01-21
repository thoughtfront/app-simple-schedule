import constants from './constants';

const initState = {};

export default (state=initState, action) => {

  switch(action.type) {
    case `${constants.TEST_REQUEST}_PENDING`:{
      console.warn('test request pending');
      break;
    }

    case `${constants.TEST_REQUEST}_FULFILLED`:{
      console.warn('test request fulfilled', action);
      break;
    }

    case `${constants.TEST_REQUEST}_REJECTED`:{
      console.warn('test request rejected', action);
      break;
    }

    default: return state;

  }

  return state;
}