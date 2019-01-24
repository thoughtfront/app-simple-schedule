import constants from '../constants/errors';

const initState = {
  networkMessage: null,
};

export default (state=initState, action) => {

  switch(action.type) {
    case `${constants.ERRORS_CLEAR_ALL}`: {
      return {
          ...initState,
      }
    }

    case constants.ERRORS_SET_NETWORK_ERROR: {
      return {
        ...state,
        networkMessage: action.error,
      }
    }

    default: return state;

  }

  return state;
}