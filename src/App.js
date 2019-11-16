/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './general/theme';
import './App.css';
import { Home } from './routes/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
