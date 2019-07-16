import React from 'react';

import { createStore, compose, applyMiddleWare } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, initialState, compose(
  applyMiddleWare(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


