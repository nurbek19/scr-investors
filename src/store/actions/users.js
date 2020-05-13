import {push} from 'react-router-redux';
import axios from '../../axios-api';
import Notify from "../../components/Notification";

import {
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  CREATE_ACCOUNT_REQUEST
} from "./actionTypes";

export const registerUserSuccess = (payload) => {
    return {type: REGISTER_USER_SUCCESS, payload};
};

export const registerUserFailure = error => {
    return {type: REGISTER_USER_FAILURE, error}
};

export const registerUser = userData => {
    return dispatch => {
        return axios.post('/investors/auth/register/', userData).then(
            response => {
                dispatch(registerUserSuccess(response.data));
                Notify.success('Account created');
            },
            error => {
                console.log(error.response.data);
                dispatch(registerUserFailure(error.response.data))
            }
        );
    };
};

const loginUserSuccess = (payload) => {
    return {type: LOGIN_USER_SUCCESS, payload};
};

const loginUserFailure = error => {
    return {type: REGISTER_USER_FAILURE, error};
};

export const loginUser = userData => {
    return dispatch => {
        return axios.post('/users/sessions', userData).then(
            response => {
                dispatch(loginUserSuccess(response.data.user, response.data.token));
                dispatch(push('/'));
            },
            error => {
                const errorObj = error.response ? error.response.data : {error: 'No internet connection'};
                dispatch(loginUserFailure(errorObj));
            }
        )
    }
};

export const logoutUser = () => {
  return (dispatch, getState) => {
      const token = getState().users.user.token;
      const headers = {'Token': token};

      return axios.delete('/users/sessions', {headers}).then(
          response => {
              dispatch({type: LOGOUT_USER});
              dispatch(push('/'));
          },
          error => {
          }
      )
  }
};


export const logoutExpiredUser = () => {
  return dispatch => {
      dispatch({type: LOGOUT_USER});
      dispatch(push('/login'));

  }
};

export const facebookLogin = data => {
    return dispatch => {
        axios.post('/rest-auth/facebook/', data).then(
            response => {
                dispatch(loginUserSuccess(response.data));
            },
            error => {
                dispatch(loginUserFailure(error.response));
            }
        )
    };
};

const createAccountSuccess = (payload) => {
  return {type: CREATE_ACCOUNT_SUCCESS, payload};
};

const createAccountFailure = error => {
  return {type: CREATE_ACCOUNT_FAILURE, error};
};

export const createAccount = userData => {
  return dispatch => {
    return axios.post('/users/doUpdateProfile/', userData).then(
      response => {
        dispatch(createAccountSuccess(response.data));
        Notify.success('Contact information updated successfully');
      },
      error => {
        const errorObj = error.response ? error.response.data : {error: 'No internet connection'};
        dispatch(createAccountFailure(errorObj));
      }
    )
  }
};

