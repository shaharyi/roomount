/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from './general/theme';
import './App.css';
import { Home } from './routes/Home';
// import { StateProvider } from './store/_index';
import { getStore } from './reduxUtils/store';

console.log('A');
const store = getStore();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <header>
          Header
          </header>
          <Switch>
            <Route path="/route1" component={() => <div>route1</div>} />
            <Route path="/route2" component={() => <div>route2</div>} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
