import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Link} from 'react-router-dom';
import * as actions from '../actions/actions';

import Card from './card';

export class BattleAttributes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
        }
        this.viewForFew = this.viewForFew.bind(this);
        this.computerTurn = this.computerTurn.bind(this);
        this.arenaScreen = this.arenaScreen.bind(this);
        this.arenaScreenOpposite = this.arenaScreenOpposite.bind(this);
        this.hideState = this.hideState.bind(this);
    }

    viewForFew() {
        setTimeout(function() {
            this.props.history.goBack();
        }.bind(this), 5000);
    }

    computerTurn() {
        console.log("Did this go here?");
        this.props.dispatch(actions.computerTurn());
    }

    componentDidUpdate() {
        console.log("Hello?");
        if (this.props.reduxState.playerOneTurn === false) {
            console.log("Did this trigger?");
            this.computerTurn();
        }
    }

    hideState() {
        this.setState({
            hide: !(this.state.hide),
        })
    }

    arenaScreen() {
        if (this.state.hide === true) {
            return " hidden";
        }
        else {
            return "";
        }
    }

    arenaScreenOpposite() {
        if (this.state.hide === false) {
            return " hidden";
        }
        else {
            return "";
        }
    }

    render() {
        console.log(this.props);
        // <Link to="/battle/:deckId" className="btn btn-primary">Link</Link>
        // <Link to={"/battle/" + this.props.match.params.deckId + "/compare"} className="btn btn-primary">Button Here</Link>

        return(
            <div className="battlePage">
                <div className={"cardList" + this.arenaScreen()}>
                    <h3>{this.props.reduxState.playerOneDeck[0].name}</h3>
                    <Card className="cardList"
                    radioButton={true}
                    lotsOfStuff={this.props}
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
                <div className={this.arenaScreenOpposite()}>
                    <p>Hi</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    reduxState: state,
})

export default connect(mapStateToProps)(BattleAttributes);