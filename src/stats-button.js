import React from 'react';

export default class buttons extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClicked = this.handleButtonClicked.bind(this);
    }

    handleButtonClicked(e) {
        this.props.buttonClick(e.target.value);
    }

    render() {
        return (
            <div className="toggleButtons btn-group btn-group-justified" role="group">
                <button className="btn btn-primary" onClick={this.handleButtonClicked} style={{width: "150px"}} value="standard">
                    Standard Stats
                </button>
                <button className="btn btn-danger" onClick={this.handleButtonClicked} style={{width: "150px"}} value="advanced">
                    Advanced Stats
                </button>
            </div>
        );
    };
}