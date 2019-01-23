import constants from './constants';

const initState = {
  loggedInUser: null,
};

export default (state=initState, action) => {

  switch(action.type) {
    case `${constants.AUTH_SIGN_IN}_FULFILLED`: {
      const { data } = action.payload;
      return {
        ...state,
        loggedInUser: data.user,
      }
    }
    default: return {...state};
  }
}