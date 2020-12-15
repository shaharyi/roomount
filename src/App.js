/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Pane } from 'evergreen-ui';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './routes/Home';
import { QuickSearch } from './routes/QuickSearch';
import { SignIn } from './routes/SignIn';
import { SignUp } from './routes/SignUp';
import { Reserve } from './routes/Reserve';
import { messages } from './intl';

function App() {
  const { locale } = useSelector((state) => state.intl);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Pane minHeight="calc(100vh - 120px)">
          <Switch>
            <Route path="/route1" component={() => <div>route1</div>} />
            <Route path="/quicksearch" component={QuickSearch} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/hotelInfo/:hotelId" component={QuickSearch} />
            <Route path="/reserve" component={Reserve} />
            <Route path="/" component={Home} />
          </Switch>
        </Pane>
        <Footer />
      </Router>
    </IntlProvider>
  );
}

export default App;
