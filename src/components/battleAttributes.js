import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Battle from './battle';

import Card from './card';

export class BattleAttributes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log(this);
        if (this.props.playerOneDeck.length === 0 || this.props.playerTwoDeck.length === 0) {
            // Right here
            console.log("Hi");
            // this.props.dispatch(actions.computerTurn());
        } else {
            console.log("Not dead yet");
        }
    }

    showBattle(e, value) {
        e.preventDefault();
        this.props.dispatch(actions.setOnlyAttribute(value));
    }

    hideBattle(e,) {
        console.log("hiding battle");
        if (this.props.playerOneTurn) {
            this.props.dispatch(actions.chooseAttribute(this.props.selection));
        } 
        else {
            console.log("hideBattle activated");
            if (this.props.computerSelected) {
                this.props.dispatch(actions.computerTurn());
            } else {
                this.props.dispatch(actions.computerSelection());                
            }
        }
    }

    render() {
        // <Link to="/battle/:deckId" className="btn btn-primary">Link</Link>
        // <Link to={"/battle/" + this.props.match.params.deckId + "/compare"} className="btn btn-primary">Button Here</Link>
        // onSubmit={(e, attribute) => this.showBattle(e, attribute)}
        const card = this.props.playerOneDeck[0];
        const p1Card = this.props.playerOneDeck[0];
        const p2Card = this.props.playerTwoDeck[0];
        if (this.props.battling) {
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
            if (!this.props.playerOneTurn) {
                return (
                    <div className="battlePage">
                        <div className="cardList">
                            <h3>{card.name}</h3>
                            <Card className="cardList"
                            radioButton={true}
                            required={false}
                            disabled={true}
                            {...card}
                            {...this.props}
                            onClick={(e) => this.hideBattle(e)}
                            />
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="battlePage">
                        <div className="cardList">
                            <h3>{card.name}</h3>
                            <Card className="cardList"
                            radioButton={true}
                            required={true}
                            disabled={false}
                            {...card}
                            {...this.props}
                            onSubmit={(e, attribute) => this.showBattle(e, attribute)}/>
                        </div>
                    </div>
                )
            }  
        }
    }
}

const mapStateToProps = (state, props) => {
  return state;
}
export default connect(mapStateToProps)(BattleAttributes);