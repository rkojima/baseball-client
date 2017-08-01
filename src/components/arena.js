import React from 'react';
import {connect} from 'react-redux';

export class Arena extends React.Component {
    constructor(props) {
        super(props);
        this.backToAttributes = this.backToAttributes.bind(this);
    }

    backToAttributes() {
        setTimeout(this.props.history.goBack(), 5000);
    }

    render() {
        return(
            <div>
                <p>{this.props.reduxState}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    reduxState: state,
});

export default connect(mapStateToProps)(Arena);