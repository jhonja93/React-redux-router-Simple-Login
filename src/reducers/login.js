import { SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR } from './../actions'


const initialState = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
}

export function login(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return {...state, isLoginPending: action.isLoginPending}

    case SET_LOGIN_SUCCESS:
      return {...state, isLoginSuccess: action.isLoginSuccess}

    case SET_LOGIN_ERROR:
      return {...state, loginError: action.loginError}

    default:
      return state;
  }
}