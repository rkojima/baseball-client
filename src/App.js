import React, { Component } from 'react';
// Add Link in BrowserRouter
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './components/dashboard';
import View from './components/view';
import Weapon from './components/weapon';
import BattleAttributes from './components/battleAttributes';
import {connect} from 'react-redux';
import * as actions from './actions/actions';
// import Modal from './modal';

import './App.css';

export class App extends Component {

  //TODO Fix bug where when you exit the match, the deck doesn't update so I can't see some of the stats for my deck
    // Maybe do a post method to add to forfeits, and that reloads the app. 
  //TODO Have alert post when they exit in middle of game

  startedBattle() {
    if (this.props.startedGame === true) {
      console.log("Redux started game. " + this.props.startedGame);
      console.log(this.props);
      if (this.props.playerOneTurn === false) {
        console.log("It is not player one's turn");
        this.props.dispatch(actions.computerTurn());
      }
      return (<Link to="/dashboard" className="navbar-brand" onClick={this.exitingBattle}>Baseball</Link>);
    } else {
      return (<Link to="/dashboard" className="navbar-brand">Baseball</Link>);
    }
  }

  exitingBattle() {
    this.props.dispatch(actions.exitGame());
  }

  render() {
    //<Modal quitAction={this.exitingBattle()}/> 
    return (
      <Router>
        <div className="app">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              {this.startedBattle()}
            </div>
          </nav>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/view/:deckId" component={View} />
          <Route exact path="/battle/:deckId" component={Weapon} />
          <Route exact path="/battle/:deckId/fight" component={BattleAttributes} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(App);