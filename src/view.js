import React from 'react';
import CardList from './cards-list';

export default (props) => {
    console.log(props.match.params.deckId);
    return (
        <div className="view">
            <p>2016 Deck</p>
            <CardList deckId={props.match.params.deckId}/>
        </div>
    );
}