import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Deck from '../data/decks.json';
import * as actions from '../actions/actions';
import Card from './card';

export class Weapon extends React.Component {
    constructor(props) {
        super(props);
        this.newGame = this.newGame.bind(this);
        this.state = {
            buttonClicked: false,
        }
    }

    componentDidMount() {
        this.props.dispatch(actions.mount());
    }

    newGame(value) {
        this.setState({buttonClicked: true});
        this.props.dispatch(actions.startGame(this.props.match.params.deckId, value));
    }

    cardToRender() {
        if (this.state.buttonClicked) {
        return (
            <div className="cardList">
                <h3>{this.props.reduxState.playerOneDeck[0].name}</h3>
                <Card className="cardList"
                radioButton={true}
                hits={this.props.reduxState.playerOneDeck[0].hits}
                avg={this.props.reduxState.playerOneDeck[0].avg}
                runsBattedIn={this.props.reduxState.playerOneDeck[0].runsBattedIn}
                onBasePercentage={this.props.reduxState.playerOneDeck[0].onBasePercentage}
                winsAboveReplacement={this.props.reduxState.playerOneDeck[0].winsAboveReplacement}
                isolatedPower={this.props.reduxState.playerOneDeck[0].isolatedPower}
                battingAverageOnBallsInPlay={this.props.reduxState.playerOneDeck[0].battingAverageOnBallsInPlay}
                weightedOnBaseAverage={this.props.reduxState.playerOneDeck[0].weightedOnBaseAverage}
                weightedRunsCreatedPlus={this.props.reduxState.playerOneDeck[0].weightedRunsCreatedPlus}
                baseRunning={this.props.reduxState.playerOneDeck[0].baseRunning}
                />
            </div>
        )};
    }

    computerTurn() {
        this.props.dispatch(actions.computerTurn());
    }

    render() {
        let clicked = this.state.buttonClicked ? " clicked" : "";
        let cardAppears = this.state.buttonClicked ? "" : "hidden ";
        if (this.props.playerOneTurn != true) {
            this.computerTurn();
        }
        console.log(this.props);
        return (
            <div className="battlePage">
                <div className={"weaponPage" + clicked}>
                    <h1 className="weaponTitle">Battle with:</h1>
                    <button className={"weaponButton btn btn-lg btn-primary"} onClick={() => this.newGame("standard")}>
                    Standard Statistics
                    </button>
                    <button className={"weaponButton btn btn-lg btn-danger"} onClick={() => this.newGame("advanced")}>
                    Advanced Statistics
                    </button>
                </div>
                {this.cardToRender()}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    reduxState: state,
})

export default connect(mapStateToProps)(Weapon);