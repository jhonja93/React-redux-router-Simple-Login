import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './../reducers';

// Hacemos uso del middleware thunk debido a que realizamos una llamada asincrona
// para obtener la lista de usuarios 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk, logger)));