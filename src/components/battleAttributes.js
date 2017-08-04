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
        if (this.props.playerOneTurn === false) {
            this.computerTurn();
        }
    }

    showBattle(e, value) {
        e.preventDefault();
        this.props.dispatch(actions.setOnlyAttribute(value));
    }

    hideBattle() {
        if (this.props.playerOneTurn) {
            this.props.dispatch(actions.chooseAttribute(this.props.selection));
        } 
        else {
            this.props.dispatch(actions.computerTurn());
        }
    }

    render() {
        // <Link to="/battle/:deckId" className="btn btn-primary">Link</Link>
        // <Link to={"/battle/" + this.props.match.params.deckId + "/compare"} className="btn btn-primary">Button Here</Link>
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
            return(
                <div className="battlePage">
                    <div className="cardList">
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
  return state;
}
export default connect(mapStateToProps)(BattleAttributes);