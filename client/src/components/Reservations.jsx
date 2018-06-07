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
                        <tr id="header">
                            <th className="dormName"><h4>Dorm Beds</h4>
                                <span>Prices are per room</span>
                            </th>
                            <th className="averagePrice">Average price per night</th>
                            <th className="countRooms">Rooms</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="dormName">Random Stuff</td>
                            <td>$10</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td className="dormName">Random Stuff</td>
                            <td>$10</td>
                            <td>2</td>
                        </tr>                        
                        <tr>
                            <td className="dormName">Random Stuff</td>
                            <td>$10</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Reservations;