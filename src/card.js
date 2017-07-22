import React from 'react';

export default (props) => {
    
    // For deck of cards, needs cards, stats, possibly picture

    return (
        <div>
            <img className="playerPicture" 
            width="300" height="400"/>
            <ul>
                <li>{props.hits}</li>
            </ul>
        </div>
    )
}