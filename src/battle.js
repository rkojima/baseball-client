import React from 'react';

export default class Battle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.match.params.weapon);
        return (
            <div>

            </div>
        );
    }
}