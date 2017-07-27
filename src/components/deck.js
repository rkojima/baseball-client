import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default (props) => {

// Make deck hoverable for larger screens
    return (
        <div className="deck">
            <img className="playerPicture" 
                src={props.image}
                width="300" height="400"/>
            <div className="btn-group btn-group-justified" role="group">
                <Link className="btn btn-info" to={`/view/${props.name}`}>View Deck</Link>
                <Link className="btn btn-success" to={`/battle/${props.name}`}>Battle!</Link>
            </div>
        </div>
    )
}