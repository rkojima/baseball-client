import React from 'react';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';


export class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let radioButton = this.props.radioButton === undefined ? "" : "radioButton";
        if (this.props.isolatedPower === undefined) {
            return (
                <div>
                    <img className="playerPicture" 
                    width="300" height="400" alt="Player with Standard Stats"/>
                    <form className="stats" onSubmit={(e, value) => this.props.onSubmit(e, document.querySelector('input[name="radio"]:checked').id)}>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="avg" required={this.props.required} disabled={this.props.disabled}/>
                            <label htmlFor="avg">Average: {this.props.avg}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="hits" disabled={this.props.disabled}/>
                            <label htmlFor="hits">Hits: {this.props.hits}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="runsBattedIn" disabled={this.props.disabled}/>
                            <label htmlFor="rbi">Runs Batted In (RBI): {this.props.runsBattedIn}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="onBasePercentage" disabled={this.props.disabled}/>
                            <label htmlFor="ops">On Base Percentage (OPS): {this.props.onBasePercentage}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="winsAboveReplacement" disabled={this.props.disabled}/>
                            <label htmlFor="war">Wins Above Replacement (WAR): {this.props.winsAboveReplacement}</label>
                        </div>
                        <button type="submit" className="btn btn-info" onClick={this.props.onClick}>Battle!</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <img className="playerPicture" 
                    width="300" height="400" alt="Player with Advanced Stats"/>
                    <form className="stats" onSubmit={(e, value) => this.props.onSubmit(e, document.querySelector('input[name="radio"]:checked').id)}>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="isolatedPower" required={this.props.required} disabled={this.props.disabled}/>
                            <label htmlFor="iso">Isolated Power (ISO): {this.props.isolatedPower}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="battingAverageOnBallsInPlay" disabled={this.props.disabled}/>
                            <label htmlFor="babip">Batting Average On Balls In Play (BABIP): {this.props.battingAverageOnBallsInPlay}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="weightedOnBaseAverage" disabled={this.props.disabled}/>
                            <label htmlFor="woba">Weighted On Base Average (WOBA): {this.props.weightedOnBaseAverage}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="weightedRunsCreatedPlus" disabled={this.props.disabled}/>
                            <label htmlFor="wrcp">Weighted Runs Created Plus (wRC+): {this.props.weightedRunsCreatedPlus}</label>
                        </div>
                        <div className="row">
                            <input className={radioButton} type="radio" name="radio" id="baseRunning" disabled={this.props.disabled}/>
                            <label htmlFor="br">Base Running (BR): {this.props.baseRunning}</label>
                        </div>
                        <button type="submit" className="btn btn-info" onClick={this.props.onClick}>Battle!</button>
                    </form>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, props) => {
  return state;
}
export default connect(mapStateToProps)(Card);