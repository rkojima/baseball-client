import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as actions from '../actions/actions';

export class Weapon extends React.Component {
    constructor(props) {
        super(props);
        this.newGame = this.newGame.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(actions.mount());
    }

    newGame(value) {
        this.props.dispatch(actions.startGame(this.props.match.params.deckId, value));
    }

    render() {
        // TODO Isn't working right now, playerOneTurn is undefined
        if (this.props.deck) {
           return (
            <Redirect to={{pathname: "/battle/" + this.props.deck + "/fight", state: this.props.location}} />
            );
        }
        return (
            <div className="battlePage">
                <div className="weaponPage">
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

const mapStateToProps = (state, props) => {
  return state;
}
export default connect(mapStateToProps)(Weapon);