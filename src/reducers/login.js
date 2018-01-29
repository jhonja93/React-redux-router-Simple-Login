import { SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, LOGGED } from './../actions'


const initialState = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null,
    logged: false
}

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGGED:
      return {...state, logged: action.logged}

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