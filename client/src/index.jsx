import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/SearchBar.jsx'
import Reservations from './components/Reservations.jsx'
class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return (
            <div id="container">
            <h2>Check Availability</h2>
            This is the SearchBar
                <SearchBar/>
                <Reservations/>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));