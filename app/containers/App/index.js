/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Header from '../Header';
import AuthService from '../AuthService';
import AuthPage from '../AuthPage';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <AuthService />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/auth/:type(register|login)" component={AuthPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
