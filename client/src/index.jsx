import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/SearchBar.jsx';
import Reservations from './components/Reservations.jsx';
import ReservationConfirm from './components/ReservationConfirm.jsx';
import { CSSTransitionGroup } from 'react-transition-group'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unfiltered: {},
            hotelRooms: { rooms: [] },
            startDate: '2018-06-01',
            endDate: '2018-06-04',
            startPoint: 0,
            endPoint: 0,
            currentRoom: {},
            numberOfBeds: 0,
            averagePrice: 0,
            selectedRooms: {},
            total: 0,
        }
        this.setCurrentRoom = this.setCurrentRoom.bind(this);
        this.updateTotal = this.updateTotal.bind(this);
    }

    componentDidMount() {
        this.initializeRoom()
    }
    
    initializeRoom() {
        fetch('http://localhost:3003/api/hostels/1/reservations')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            this.filterByDate(response);
            this.setState({unfiltered: response});
        })
    }


    filterByDate(unfiltered) {
        const dateList = unfiltered.rooms[0].room;
        dateList.forEach((data, index) => {
            const date = data.date.split('T')[0];
            if (this.parseDate(date) === this.parseDate(this.state.startDate)) {
                this.setState({ startPoint: index});
            }   else if (this.parseDate(date) === this.parseDate(this.state.endDate)) {
                this.setState({ endPoint: index });
            }
        });
        const roomList = unfiltered.rooms;
        roomList.map((room, index) => {
            room.room = room.room.slice(this.state.startPoint, this.state.endPoint + 1)
        });
        this.setState({hotelRooms: {rooms: roomList}});
    }

    parseDate(string) {
        let date = string.split('-')
        let year = date[0];
        let month = date[1];
        let day = date[2];
        return new Date(year, month, day).getTime();
    }

    setCurrentRoom(room, beds, avg, index) {
        this.setState({
            currentRoom: room,
            numberOfBeds: beds,
            averagePrice: avg
        })
        let rooms = this.state.selectedRooms;
        rooms[index] = room;
        rooms[index].reservedBeds = beds;
        rooms[index].avg = avg;
        this.setState({
            selectedRooms: rooms,
        })
        this.updateTotal(rooms)
    }

    updateTotal(rooms) {
        let total = 0;
        for (var i in rooms) {
            if (rooms[i].reservedBeds !== "Select") {
                total += rooms[i].reservedBeds * rooms[i].avg * rooms[i].length;
            }
        }
        this.setState({total: total});
    }


    render(){
        const test = <ReservationConfirm room={this.state.currentRoom}
        beds={this.state.numberOfBeds}
        average={this.state.averagePrice}
        selected={this.state.selectedRooms}
        total={this.state.total}
        update={this.updateTotal}/>
        if (this.state.total === 0) {
            return (
                <div id="container">
                    <h2>Check Availability</h2>
                    This is the SearchBar
                    <SearchBar/>
                    <Reservations rooms={this.state.hotelRooms.rooms} set={this.setCurrentRoom}/>
                </div>
            )
        }
        return (
            <div id="container">
                <h2>Check Availability</h2>
                This is the SearchBar
                <SearchBar/>
                <Reservations rooms={this.state.hotelRooms.rooms} set={this.setCurrentRoom}/>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                        {test}
                </CSSTransitionGroup>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));
