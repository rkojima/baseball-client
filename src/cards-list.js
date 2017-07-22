import React from 'react';
import Decks from './data/decks.json';
import Card from './card';

export default (props) => {

    return(
        <div className="cardList">
            {Decks.map(function(eachDeck) {
                if (eachDeck.name === props.deckId) {
                    return (eachDeck.deck.map(function(card) {
                        return (
                            <div>
                                {card.name}
                                <Card hits={card.hits}/>
                            </div>
                        )
                    }));
                }
            })}
        </div>
    );
}