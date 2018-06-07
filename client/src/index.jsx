import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/SearchBar.jsx'
import Reservations from './components/Reservations.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelRooms: { rooms: [] },
            startDate: 0,
            endDate: 0
        }
    }

    componentDidMount() {
        this.initializeRoom()
    }
    
    initializeRoom() {
        fetch('http://localhost:3003/api')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            // this.setState(prevState => ({
            //     hotelRooms: [...prevState, response.rooms]
            // }))
            this.setState({hotelRooms: response})
            console.log(this.state.hotelRooms)
        })
    }

    render(){
        return (
            <div id="container">
            <h2>Check Availability</h2>
            This is the SearchBar
                <SearchBar/>
                <Reservations state={this.state}/>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));
