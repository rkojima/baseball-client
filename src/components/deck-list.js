import React from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Decks from '../data/decks.json';
import Deck from './deck';

export default (props) => {
    // Get decks and titles from props somehow, make sure to pass in props
    return (
        <div className="deckList">
            {Decks.map(function(deck) {
                return (
                    <div>
                        {deck.name}
                        <Deck image={deck.image} name={deck.name} />
                    </div>
                );
            })}
        </div>
    )
}