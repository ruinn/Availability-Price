import React from 'react';
import ReactDom from 'react-dom';
import Calendar from './Calendar.jsx';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startCal: false,
            endCal: false,
        }
        this.parseDate = this.parseDate.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.turnOff = this.turnOff.bind(this);
    }

    parseDate(input) {
        const yearMonthDay = input.split('-');
        let date = new Date(yearMonthDay[0], yearMonthDay[1], yearMonthDay[2])

        return date.toDateString()
    }

    clickHandler(event) {
        event.preventDefault();
        this.setState({[event.target.id]: !this.state[event.target.id]}, () => console.log(this.state.startCal))
    }

    turnOff(event) {
        console.log(event.target.className)
        if (!event.target.className.includes("nullClick")) {
            this.setState({
                startCal: false,
                endCal: false,
            })
        }
    }


    render() {
        return (
            <div id="SearchBar" onClick={this.turnOff}>
                <p className="searchItem">Reservation dates for {this.parseDate(this.props.startDate)}</p>
                <a className="searchItem" id="startCal" className="nullClick" href onClick={this.clickHandler}>Click</a>
                <p className="searchItem"> - {this.parseDate(this.props.endDate)}</p>
                <a className="searchItem" id="endCal" className="nullClick" href onClick={this.clickHandler}>Click</a>
                <div>
                { this.state.startCal ? <Calendar startDate={this.props.startDate} id="Calendar" className="Calendar"/> : null }
                { this.state.endCal ? <Calendar startDate={this.props.endDate} id="Calendar2" className="Calendar"/> : null }
                </div>
            </div>
        )
    }
}

export default SearchBar;