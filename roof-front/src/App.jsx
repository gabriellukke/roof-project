import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Courses from './Components/Courses/Courses';

const App = () => (
  <Router>
    <Switch>
      <Route exact="/" component={Courses} />
    </Switch>
  </Router>
);

export default App;
