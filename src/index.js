import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { defaultTheme } from 'evergreen-ui';
import 'react-flags-select/css/react-flags-select.css';
import { getStore } from './reduxUtils/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = getStore();

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
