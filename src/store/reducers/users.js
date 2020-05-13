import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS, LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  CREATE_ACCOUNT_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  registerError: null,
  loginError: null,
  user: null,
  token: null,
  registrationStep: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      console.log(action.payload);
      return {...state, token: action.payload.key, registrationStep: 2, registerError: null};
    case REGISTER_USER_FAILURE:
      return {...state, registerError: action.error};
    case CREATE_ACCOUNT_SUCCESS:
      return  {...state, user: action.payload, registrationStep: 3};
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.key,
        loginError: null
      };
    case LOGIN_USER_FAILURE:
      return {...state, loginError: action.error};
    case LOGOUT_USER:
      return {...state, user: null};
    default:
      return state;
  }
};

export default reducer;
