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
        this.cardToRender = this.cardToRender.bind(this);
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
        console.log(this.props);
        this.props.history.push('/battle/' + this.props.match.params.deckId + '/fight', [this.state]);
    }

    cardToRender() {
        console.log(this.props.match.params.deckId);
        if (this.state.buttonClicked) {
            console.log(this.props);
    };
    }

    render() {
        let clicked = this.state.buttonClicked ? " clicked" : "";
        let cardAppears = this.state.buttonClicked ? "" : "hidden ";
        // TODO Isn't working right now, playerOneTurn is undefined
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
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    reduxState: state,
})

export default connect(mapStateToProps)(Weapon);