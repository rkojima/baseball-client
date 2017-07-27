import React, { Component } from 'react';
// Add Link in BrowserRouter
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './components/dashboard';
import View from './components/view';
import Battle from './components/battle';
import Weapon from './components/weapon';
import './App.css';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <div className="app">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <Link to="/dashboard" className="navbar-brand">Baseball</Link>
            </div>
          </nav>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/view/:deckId" component={View} />
          <Route exact path="/battle/:deckId" component={Weapon} />
          <Route exact path="/battle/:deckId/:weapon/computer" component={Battle} />
        </div>
      </Router>
    );
  }
}