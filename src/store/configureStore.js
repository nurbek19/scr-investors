import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import axios from '../axios-api';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

import userStore from '../store/reducers/users';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  userStore
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunkMiddleware, routerMiddleware(history)];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveToLocalStorage({
    userStore: {
      user: store.getState().userStore.user,
      token: store.getState().userStore.token,
      registrationStep: 1
    }
  });
});

axios.interceptors.request.use(config => {
  try {
    if (store.getState().userStore.token) {
      config.headers.Authorization = `Token ${store.getState().userStore.token}`;
    }
  } catch (e) {
    // do nothing, user is not logged in
  }

  return config;
});

// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response.status === 401) {
//       store.dispatch(logoutUser());
//     }
//   }
// );

export default store;

