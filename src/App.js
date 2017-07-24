import React, { Component } from 'react';
// Add Link in BrowserRouter
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './dashboard';
import View from './view';
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
        </div>
      </Router>
    );
  }
}