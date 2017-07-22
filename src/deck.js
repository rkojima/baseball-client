import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default (props) => {

// Make deck hoverable for larger screens
    return (
        <div className="deck">
            <img className="playerPicture" 
                src={props.image}
                width="300" height="400"/>
            <div className="links">
                <Link className="dashboardButton" to={`/view/${props.name}`}>View Deck</Link>
                <Link className="dashboardButton" to={`/battle/${props.name}`}>Battle!</Link>
            </div>
        </div>
    )
}