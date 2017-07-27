import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Deck from '../data/decks.json';
import * as actions from '../actions/actions';

export class Weapon extends React.Component {
    constructor(props) {
        super(props);
        this.newGame = this.newGame.bind(this);
    }

    newGame(value) {

        this.props.dispatch(actions.startGame(this.props.match.params.deckId, value));
    }

    render() {
        return (
            <div className="battlePage">
                <div className="weaponPage">
                    <h1 className="weaponTitle">Battle with:</h1>
                    <button className="weaponButton btn btn-lg btn-primary" onClick={() => this.newGame("standard")}>
                    Standard Statistics
                    </button>
                    <Link className="weaponButton btn btn-lg btn-primary" 
                    to={"/battle/" + this.props.match.params.deckId + "/standard/computer"}>Standard Statistics
                    </Link>
                    <Link className="weaponButton btn btn-lg btn-danger" 
                    to={"/battle/" + this.props.match.params.deckId + "/advanced/computer"}>Advanced Statistics
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect()(Weapon);