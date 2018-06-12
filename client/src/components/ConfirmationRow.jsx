import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid rgb(196, 196, 196);
    white-space:nowrap;
    padding:.5rem;
`;

class ConfirmationRow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.total > 0) {
            this.props.appear();
        }
    }

    render() {
        if(this.props.room.reservedBeds === 'Select') {return <tr></tr>}
        return (
            <tr>
                <Td>{this.props.room[0].maxBeds} Bed Room </Td>
                <Td>{this.props.room.reservedBeds} Beds</Td>
                <Td>${(this.props.room.avg * this.props.room.reservedBeds).toFixed(2)}</Td>
                <Td>{this.props.room.length}</Td>
                <Td>${this.props.room.avg * this.props.room.reservedBeds * this.props.room.length}</Td>
            </tr>
        )
    }
}

export default ConfirmationRow;