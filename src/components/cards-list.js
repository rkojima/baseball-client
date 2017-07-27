import React from 'react';
import Decks from '../data/decks.json';
import Card from './card';

export default (props) => {
    // How do I want to organize all the stats? Pass in as card.stats,
    // then card.js manipulates it?
    return(
        <div className="cardList">
            {Decks.map(function(eachDeck) {
                if (eachDeck.name === props.deckId) {
                    return (eachDeck.deck.map(function(card) {
                        if (props.buttonClicked === "standard"){
                            return (
                                <div>
                                    {card.name}
                                    <Card
                                    avg={card.avg} 
                                    hits={card.hits}
                                    runsBattedIn={card.runsBattedIn}
                                    onBasePercentage={card.onBasePercentage}
                                    winsAboveReplacement={card.winsAboveReplacement}/>
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    {card.name}
                                    <Card 
                                    isolatedPower={card.isolatedPower}
                                    battingAverageOnBallsInPlay={card.battingAverageOnBallsInPlay}
                                    weightedOnBaseAverage={card.weightedOnBaseAverage}
                                    weightedRunsCreatedPlus={card.weightedRunsCreatedPlus}
                                    baseRunning={card.baseRunning}
                                    />
                                </div>
                            );
                        }
                    }));
                }
            })}
        </div>
    );
}