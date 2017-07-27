import React from 'react';
import CardList from './cards-list';
import StatsButtons from './stats-button';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: 'standard',
        }; 
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(value) {
        this.setState({
            buttonClicked: value,
        });
    }

    render() {
        return (
            <div className="view">
                <p className="deckName">2016 Deck</p>
                <div className="statsContainer">
                    <StatsButtons buttonClick={this.buttonClick}/>
                </div>
                <CardList buttonClicked={this.state.buttonClicked} deckId={this.props.match.params.deckId}/>
            </div>
        );
    }
}