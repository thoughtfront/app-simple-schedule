import constants from './constants';

const initState = {
  message: null,
};

export default (state=initState, action) => {

  switch(action.type) {
    case `${constants.TEST_REQUEST}_PENDING`:{
      break;
    }

    case `${constants.TEST_REQUEST}_FULFILLED`:{
      return {
        ...state,
        message: action.payload.data.msg,
      }
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