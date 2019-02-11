import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/redux/stores';
import { Provider } from 'react-redux';
import App from './app';
import axios from 'axios';
import config from './configuration';
import { onSuccess, onError } from './configuration/axios';

axios.defaults.baseURL = config.apiHost;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(onSuccess, onError);


ReactDOM.render(
  <div>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </div>,
  document.getElementById('root')
);

