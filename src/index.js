import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/redux/stores';
import { Provider } from 'react-redux';
import App from './app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

