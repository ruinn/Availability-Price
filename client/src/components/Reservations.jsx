import React from 'react';
import ReactDOM from 'react-dom';
class Reservations extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div id="reservations">
                {/* <div id="dorms">
                    <div className="header">Dorm Beds<br/><p>Prices are per room</p></div>
                    <div className="header"><p>Average price per night</p></div>
                    <div className="header"><p>Rooms</p></div>                    
                </div> */}
                <table id="dorms2">
                    <thead>
                        <th id="header">
                            <td className="dormName"><h4>Dorm Beds</h4>
                                <span>Prices are per room</span>
                            </td>
                            <td className="averagePrice">Average price per night</td>
                            <td className="countRooms">Rooms</td>
                        </th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Reservations;