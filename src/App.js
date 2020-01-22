/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { defaultTheme } from 'evergreen-ui';
import './App.css';
import { Header } from './components/Header';
import { Home } from './routes/Home';
import { SignIn } from './routes/SignIn';
import { SignUp } from './routes/SignUp';
// import { StateProvider } from './store/_index';
import { getStore } from './reduxUtils/store';

const store = getStore();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/route1" component={() => <div>route1</div>} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/hotelInfo/:hotelId" component={Home} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
