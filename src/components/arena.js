import React from 'react';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';

export class Arena extends React.Component {
    constructor(props) {
        super(props);
        this.backToAttributes = this.backToAttributes.bind(this);
    }

    backToAttributes() {
        this.props.history.goBack();
        this.props.dispatch(actions.chooseAttribute(this.props.location.state.value));
        // this.props.dispatch(actions.chooseAttribute(value));
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <h3>{this.props.playerOneDeck[0].name}</h3>
                <p>{this.props.playerOneDeck[0][this.props.location.state.value]}</p>
                <h2>VS.</h2>
                <h3>{this.props.playerTwoDeck[0].name}</h3>
                <p>{this.props.playerTwoDeck[0][this.props.location.state.value]}</p>
                <button className="btn btn-primary" onClick={() => this.backToAttributes()}>Go Back</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => state;

export default connect(mapStateToProps)(Arena);