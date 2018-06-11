import React from 'react';
import ReactDOM from 'react-dom';

class ConfirmationRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.room.reservedBeds === 'Select') {return <tr></tr>}
        return (
            <tr>
                <td>{this.props.room[0].maxBeds} Bed Room </td>
                <td>{this.props.room.reservedBeds} Beds</td>
                <td>${this.props.room.avg * this.props.room.reservedBeds}</td>
                <td>{this.props.room.length}</td>
                <td id="totalPrice">${this.props.room.avg * this.props.room.reservedBeds * this.props.room.length}</td>
            </tr>
        )
    }
}

export default ConfirmationRow;