import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './routes'

// import App from './components/app';
import { store } from './store';

//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>
  , document.querySelector('.container'));
