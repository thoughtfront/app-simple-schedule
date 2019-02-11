import constants from './constants';

const initState = {
  loggedInUser: null,
  loggedInCheckDone: false,
};

export default (state=initState, action) => {

  switch(action.type) {
    case `${constants.AUTH_LOGGED_IN_CHECK}_FULFILLED`: {
      const { data } = action.payload;
      return {
        ...state,
        loggedInUser: data.user,
        loggedInCheckDone: true,
      }
    }
    case `${constants.AUTH_SIGN_IN}_FULFILLED`: {
      const { data } = action.payload;
      return {
        ...state,
        loggedInUser: data.user,
      }
    }
    case `${constants.AUTH_SIGN_IN}_FULFILLED`: {
      const { data } = action.payload;
      return {
        ...state,
        loggedInUser: null,
      }
    }
    default: return {...state};
  }
}