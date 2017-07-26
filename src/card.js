import React from 'react';

export default (props) => {
    // For deck of cards, needs cards, stats, possibly picture
    if (props.isolatedPower === undefined) {
        return (
            <div>
                <img className="playerPicture" 
                width="300" height="400"/>
                <ul>
                    <li>Average: {props.avg}</li>
                    <li>Hits: {props.hits}</li>
                    <li>Runs Batted In (RBI): {props.runsBattedIn}</li>
                    <li>On Base Percentage (OPS): {props.onBasePercentage}</li>
                    <li>Wins Above Replacement (WAR): {props.winsAboveReplacement}</li>
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                <img className="playerPicture" 
                width="300" height="400"/>
                <ul>
                    <li>Isolated Power (ISO): {props.isolatedPower}</li>
                    <li>Batting Average On Balls In Play (BABIP): {props.battingAverageOnBallsInPlay}</li>
                    <li>Weighted On Base Average (WOBA): {props.weightedOnBaseAverage}</li>
                    <li>Weighted Runs Created Plus (wRC+): {props.weightedRunsCreatedPlus}</li>
                    <li>Base Running (BR): {props.baseRunning}</li>
                </ul>
            </div>
        );
    }
}