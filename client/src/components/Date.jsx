import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FlexDate = styled.li`
    text-align: center;
    width: 13.69%;
    height: 35px;
    border: 1px solid black;
`

const Text = styled.p`
    margin-top: 10px;
`


class Date extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <FlexDate className="nullClick"><Text>{this.props.day}</Text></FlexDate>
        )
    }
}

export default Date;