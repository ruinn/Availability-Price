import React from 'react';
import ReactDOM from 'react-dom';
class Reservations extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.state)
    }
    render() {
        return (
            <div id="reservations">
                <table id="dorms2">
                    <thead>
                        <tr id="header">
                            <th className="dormName"><h4>Dorm Beds</h4>
                                <span>Prices are per room</span>
                            </th>
                            <th className="averagePrice">Average price per night</th>
                            <th className="countRooms">Rooms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log('yeet boi', this.props.state.hotelRooms.rooms)}
                        {this.props.state.hotelRooms.rooms.map((room, index) => {
                            console.log('hit this')
                            return (
                                <tr>
                                    <td>
                                        This is the Name
                                    </td>
                                    <td>
                                        $10
                                    </td>
                                    <td>
                                        2
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Reservations;