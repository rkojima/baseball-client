import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default (props) => {
    console.log(props);
    console.log(props.match.params.deckId);
    return (
        <div className="weaponPage">
            <h1 className="weaponTitle">Battle with:</h1>
            <Link className="weaponButton btn btn-lg btn-primary" 
            to={"/battle/" + props.match.params.deckId + "/standard/computer"}>Standard Statistics
            </Link>
            <Link className="weaponButton btn btn-lg btn-danger" 
            to={"/battle/" + props.match.params.deckId + "/advanced/computer"}>Advanced Statistics
            </Link>
        </div>
    )
}