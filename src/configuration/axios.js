import store from '../app/redux/stores';
import * as errorActions from '../app/redux/actions/errors';
/*
    Response Interceptors
 */

export const onError = error => {
	if (!error || !error.response) {
		console.error(error);
		// something else is issue here - route it
		return Promise.reject(error);
	}

	switch (error.response.status) {
		case 500:
		case 501:
		case 502:
		case 503:
		case 401:
		case 403:
		case 404:
		default:
      store.dispatch(errorActions.setNetworkError(error.response.data.msg));
			// console.error(`whoops a ${error.response.status}`, '- I do not know how to handle this yet');
	}
	return Promise.reject(error);
};

export const onSuccess = response => {
  store.dispatch(errorActions.clearAllErrors());
  return response;
}
