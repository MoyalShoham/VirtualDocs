
// src/App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import LicenseForm from './components/LicenseForm';
import LicenseList from './components/LicenseList';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/licenses" component={LicenseList} />
          <Route path="/add-license" component={LicenseForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
