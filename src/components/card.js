import React from 'react';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';


export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.chooseAttribute = this.chooseAttribute.bind(this);
    }
    // For deck of cards, needs cards, stats, possibly picture

    chooseAttribute(e, value) {
        e.preventDefault();
        console.log("triggered from card.js");
        this.setState({battling: true});
        this.props.history.push({pathname: '/battle/' + this.props.match.params.deckId + '/fight/arena',
            state: {value: value}});
    }

    computerTurn() {
        console.log("Did this go here?");
        this.props.history.push('/battle/' + this.props.match.params.deckId + '/fight/arena');
        this.props.dispatch(actions.computerTurn());
    }


    // Player One turn, show modal page saying who won, which stats were compared

    //(e) => this.chooseAttribute(e, document.querySelector('input[name="radio"]:checked').id)
    //used for form, onSubmit
    render() {
        let radioButton = this.props.radioButton === undefined ? "" : "radioButton";
        if (this.props.isolatedPower === undefined) {
            return (
                <div>
                    <img className="playerPicture" 
                    width="300" height="400" alt="Player with Standard Stats"/>
                    <form className="stats" onSubmit={(e, value) => this.props.onSubmit(e, document.querySelector('input[name="radio"]:checked').id)}>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="avg" required/>
                            <label htmlFor="avg">Average: {this.props.avg}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="hits" />
                            <label htmlFor="hits">Hits: {this.props.hits}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="runsBattedIn" />
                            <label htmlFor="rbi">Runs Batted In (RBI): {this.props.runsBattedIn}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="onBasePercentage" />
                            <label htmlFor="ops">On Base Percentage (OPS): {this.props.onBasePercentage}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="winsAboveReplacement" />
                            <label htmlFor="war">Wins Above Replacement (WAR): {this.props.winsAboveReplacement}</label>
                        </div>
                        <button type="submit" className="btn btn-info">Battle!</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <img className="playerPicture" 
                    width="300" height="400" alt="Player with Advanced Stats"/>
                    <form className="stats" onSubmit={this.props.onSubmit}>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="isolatedPower" required/>
                            <label htmlFor="iso">Isolated Power (ISO): {this.props.isolatedPower}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="battingAverageOnBallsInPlay" />
                            <label htmlFor="babip">Batting Average On Balls In Play (BABIP): {this.props.battingAverageOnBallsInPlay}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="weightedOnBaseAverage" />
                            <label htmlFor="woba">Weighted On Base Average (WOBA): {this.props.weightedOnBaseAverage}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="weightedRunsCreatedPlus" />
                            <label htmlFor="wrcp">Weighted Runs Created Plus (wRC+): {this.props.weightedRunsCreatedPlus}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="baseRunning" />
                            <label htmlFor="br">Base Running (BR): {this.props.baseRunning}</label>
                        </div>
                        <button type="submit" className="btn btn-info">Battle!</button>
                    </form>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return state;
}
export default connect(mapStateToProps)(Card);