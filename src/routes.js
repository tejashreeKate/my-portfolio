import React from 'react';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';
import HomeView from './components/Home/components/HomeView.js';
import Paintings from './components/Home/components/paintings.js'
import Resume from './components/Home/components/resume.js'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={HomeView} />
     <Route path="/paintings" component={Paintings} />
    <Route path="/resume" component={Resume} />
  </Router>
);

export default Routes;
