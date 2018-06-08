import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmationRow from './ConfirmationRow.jsx';
import { CSSTransitionGroup } from 'react-transition-group';

class ReservationConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.createRows = this.createRows.bind(this);
        this.updateTotal = this.updateTotal.bind(this);
    }

    createRows(rooms) {
        let roomsArray = [];
        for (var i in rooms) {
            roomsArray.push(rooms[i]);
        }
        return roomsArray;
    }



    updateTotal(rooms) {
        let total = 0;
        for (var i in rooms) {
            if (rooms[i].reservedBeds !== "Select") {
                total += rooms[i].reservedBeds * rooms[i].avg * rooms[i].length;
            }
        }
        return total;
    }

    render() {
        return (
            <div id="confirmation"> 
                <table id="dorms">
                    <thead>
                        <tr id="header">
                            <th className="dormName"><h4>My Selection</h4></th>
                            <th className="normalHeader">Bed</th>
                            <th className="normalHeader">Price Per Night</th>
                            <th>Nights</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createRows(this.props.selected).map((room, index) =>  <ConfirmationRow room={room} key={index}/>)}
                    </tbody>
                </table>
                <table id="dorms">
                    <tbody>
                        <tr>
                            <td className="total">Total:<span id="totalNumber">${this.props.total}</span></td>
                        </tr>
                    </tbody>
                </table>
                <button id="confirmButton">Confirm</button>

            </div>
        )
    }
}

export default ReservationConfirm;