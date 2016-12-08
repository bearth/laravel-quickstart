import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import TaskContainer from './components/TaskContainer';
import TaskView from './components/main/TaskView';
import ContactView from './components/main/ContactView';
import AboutView from './components/main/AboutView';

var APP_CONTAINER_DOM_ID = 'app-container';
var _appDest = document.getElementById(APP_CONTAINER_DOM_ID);

if (_appDest) {
  render((
    <Router history={browserHistory}>
      <Route component={TaskContainer}>
        <Route path="/flux/tasks" component={TaskView} />
        <Route path="/flux/contact" component={ContactView} />
        <Route path="/flux/about" component={AboutView} />
      </Route>
    </Router>
  ), _appDest);
}
