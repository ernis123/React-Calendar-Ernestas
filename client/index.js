import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from 'layout';
import configureStore from './store';

import 'assets/styles/main.scss';

const store = configureStore();

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

const rootEl = document.getElementById('root');

ReactDOM.render(app,rootEl);
