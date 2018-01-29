import { combineReducers } from 'redux';
import { showUsers } from './users' 
import { login } from './login' 

const rootReducer = combineReducers({
  login: login,
  user: showUsers
});

export default rootReducer;
