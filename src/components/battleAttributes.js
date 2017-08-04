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

    showBattle(e, value) {
        e.preventDefault();
        console.log("Value: " + value);
        this.setState({
            battling: true,
        });
        this.props.dispatch(actions.setOnlyAttribute(value));
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
        const {battling} = this.state.battling;
        const p1Card = this.props.playerOneDeck[0];
        const p2Card = this.props.playerTwoDeck[0];
        if (this.state.battling) {
            // These could be components
            return (
                <div>
                    <Battle 
                    p1Name={p1Card.name}
                    p2Name={p2Card.name}
                    p1Value={p1Card[this.props.selection]}
                    p2Value={p2Card[this.props.selection]}
                    statsAsText={this.props.statsAsText}
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
                        onSubmit={(e, attribute) => this.showBattle(e, attribute)}/>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return state;
}
export default connect(mapStateToProps)(BattleAttributes);