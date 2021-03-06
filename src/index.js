import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './LandingPage/LandingPage';
import { HomePage } from './HomePage/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
