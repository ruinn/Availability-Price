import React from 'react';
import ReactDOM from 'react-dom';


class Date extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className="flexDate nullClick">{this.props.day}</li>
        )
    }
}

export default Date;