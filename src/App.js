/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './routes/Home';
import { SignIn } from './routes/SignIn';
import { SignUp } from './routes/SignUp';
import { Reserve } from './routes/Reserve';
import { messages } from './intl';

function App() {
  const { locale } = useSelector((state) => state.intl);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/route1" component={() => <div>route1</div>} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/hotelInfo/:hotelId" component={Home} />
          <Route path="/reserve" component={Reserve} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </IntlProvider>
  );
}

export default App;
