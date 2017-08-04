import React from 'react';
import {connect} from 'react-redux';

export default class Battle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
           <div>
                <h3>{this.props.p1Name}</h3>
                <p>{this.props.statsAsText} {this.props.p1Value}</p>
                <h2>VS.</h2>
                <h3>{this.props.p2Name}</h3>
                <p>{this.props.statsAsText} {this.props.p2Value}</p>
                <button className="btn btn-primary" onClick={this.props.onClick}>Go Back</button>
           </div>
        );
    }
}