import React, { Component } from 'react';
// Add Link in BrowserRouter
import { withRouter } from 'react-router';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './components/dashboard';
import View from './components/view';
import Weapon from './components/weapon';
import BattleAttributes from './components/attributes';
import Arena from './components/arena';
import {connect} from 'react-redux';
import * as actions from './actions/actions';
// import Modal from './modal';

import './App.css';

export class App extends Component {

  // componentDidMount() {
  //   // this.props.dispatch(actions.mount());
  //   this.props.router.setRouteLeaveHook(this.props.route, () => {
  //     if (this.reduxState.startedGame) {
  //       console.log("Started Game");
  //     }
  //   })
  // }

  //TODO Fix bug where when you exit the match, the deck doesn't update so I can't see some of the stats for my deck
    // Maybe do a post method to add to forfeits, and that reloads the app. 
  //TODO Have alert post when they exit in middle of game

  startedBattle() {
    if (this.props.reduxState === undefined) {
      return (<Link to="/dashboard" className="navbar-brand">Baseball</Link>);
    } else if (this.props.reduxState.startedGame === true) {
      console.log("Redux started game. " + this.props.reduxState.startedGame);
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
          <Route exact path="/battle/:deckId/fight/arena" component={Arena} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => ({
    reduxState: state,
})

export default connect(mapStateToProps)(App);