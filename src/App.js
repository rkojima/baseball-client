import React, { Component } from 'react';
// Add Link in BrowserRouter
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './components/dashboard';
import View from './components/view';
import Weapon from './components/weapon';
import {connect} from 'react-redux';
import * as actions from './actions/actions';

import './App.css';

export class App extends Component {

  componentDidMount() {
    this.props.dispatch(actions.mount());
  }

  //TODO Fix bug where when you exit the match, the deck doesn't update so I can't see some of the stats for my deck
    // Maybe do a post method to add to forfeits, and that reloads the app. 
  //TODO Have alert post when they exit in middle of game

  render() {
    console.log(this.props);
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
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => ({
    reduxState: state,
})

export default connect(mapStateToProps)(App);