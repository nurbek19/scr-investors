import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import store, { history } from './store/configureStore';
import { ToastContainer } from 'react-toastify';
import App from './App';

import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
      <ToastContainer position="top-center" />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
