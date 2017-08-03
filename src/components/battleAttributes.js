import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Battle from './battle';

import Card from './card';

export class BattleAttributes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
            battling: false, 
        }
        this.arenaScreen = this.arenaScreen.bind(this);
        this.hideState = this.hideState.bind(this);
    }

    componentDidUpdate() {
        console.log("Hello?");
        console.log(this.state.battling);
        if (this.props.playerOneTurn === false) {
            console.log("Did this trigger?");
            this.computerTurn();
        }
    }

    showBattle(e) {
        e.preventDefault();
        this.setState({
            battling: true,
        })
    }

    hideBattle() {
        this.setState({
            battling: false,
        })
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

    render() {
        console.log(this.props);

        // <Link to="/battle/:deckId" className="btn btn-primary">Link</Link>
        // <Link to={"/battle/" + this.props.match.params.deckId + "/compare"} className="btn btn-primary">Button Here</Link>
        const card = this.props.playerOneDeck[0];
        console.log(this.props);
        const {battling} = this.state.battling;
        if (this.state.battling) {
            // These could be components
            return (
                <div>
                    <Battle 
                    p1Name={this.props.playerOneDeck[0].name}
                    p2Name={this.props.playerTwoDeck[0].name}
                    p1Value={this.props.playerOneDeck[0][this.props.location.state.value]}
                    p2Value={this.props.playerTwoDeck[0][this.props.location.state.value]}
                    onClick={() => this.hideBattle()} />
                </div>
            )
        } else {
            return(
                <div className="battlePage">
                    <div className={"cardList" + this.arenaScreen()}>
                        <h3>{card.name}</h3>
                        <Card className="cardList"
                        radioButton={true}
                        {...card}
                        {...this.props}
                        onSubmit={(e) => this.showBattle(e)}/>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, props) => state;

export default connect(mapStateToProps)(BattleAttributes);