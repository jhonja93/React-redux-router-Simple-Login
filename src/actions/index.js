//import getUsers from '../services/getUsers'
import axios from 'axios'

export const SHOW_USERS = 'SHOW_USERS' 
export const ERROR_USERS = 'ERROR_USERS' 

export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

const setLoginPending = isLoginPending => ({ type: SET_LOGIN_PENDING, isLoginPending })
const setLoginSuccess = isLoginSuccess => ({ type: SET_LOGIN_SUCCESS, isLoginSuccess });
const setLoginError = loginError => ({ type: SET_LOGIN_ERROR, loginError })

export function showUsers() {

    return (dispatch, getState) => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response) => dispatch( { type: SHOW_USERS, value: response.data} ))
            .catch(function (error) {
                dispatch( { type: ERROR_USERS, value: 'error'} )
            });
    }

}
  
function callLoginApi(username, password, callback) {
    setTimeout(() => {
        if (username === 'frodo' && password === 'miprecioso') {
            return callback(null);
        } else {
            return callback(new Error('Invalid username and password'));
        }
    }, 1000);
}

export function checkLogin(username, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginApi(username, password, error => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
            } else {
                dispatch(setLoginError(error));
            }
        });
    }
}