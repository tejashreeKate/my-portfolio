import React from 'react';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';
import App from './App';
import HomeView from './components/Home/components/HomeView.js';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={HomeView} />
  </Router>
);

export default Routes;
