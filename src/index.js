import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import Root from './components/Root/Root';
import appReducer from "./reducers/AppReducer";

const middleware = [];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  appReducer,
  applyMiddleware(...middleware)
);

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
