import React from 'react';
import ReactDOM from 'react-dom';
import ReservationRow from './ReservationRow.jsx'
class Reservations extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div id="reservations">
                <table id="dorms">
                    <thead>
                        <tr id="header">
                            <th className="dormName"><h4>Dorm Beds</h4>
                                <span>Prices are per room</span>
                            </th>
                            <th className="normalHeader">Average price per night</th>
                            <th className="countRooms">Rooms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.rooms.map((room, index) => {
                            let hasRoom = true;
                            room.room.forEach(date => {if (date.bedsLeft === 0) hasRoom = false;})
                            if (hasRoom) return <ReservationRow key={index} room={room.room} index={index} set={this.props.set}/>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Reservations;