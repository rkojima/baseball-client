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
        this.props.dispatch(actions.chooseAttribute(value));
    }

    render() {
        let radioButton = this.props.radioButton === undefined ? "" : "radioButton";
        if (this.props.isolatedPower === undefined) {
            console.log(radioButton);
            return (
                <div>
                    <img className="playerPicture" 
                    width="300" height="400"/>
                    <form className="stats" onSubmit={(e) => this.chooseAttribute(e, document.querySelector('input[name="radio"]:checked').id)}>
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
                    width="300" height="400"/>
                    <form className="stats" onSubmit={(e) => this.chooseAttribute(e, document.querySelector('input[name="radio"]:checked').id)}>
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

export default connect()(Card);