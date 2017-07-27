import React from 'react';
import DeckList from './deck-list';

export default class DeckPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <DeckList />
            </div>
        )
    }
}