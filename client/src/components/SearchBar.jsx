import React from 'react';
import ReactDom from 'react-dom';
import Calendar from './Calendar.jsx';
import styled from 'styled-components';

const InlineP = styled.p`
    display: inline-block;
`
const InlineA = styled.a`
    display: inline-block;    
`

const SearchDisplay = styled.div`
    display: inline-block;
`

const DropDown = styled.div`
    display: flex;
    flex-direction: column;
`
// display: flex;
// flex-direction:column;
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.parseDate = this.parseDate.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    parseDate(input) {
        const yearMonthDay = input.split('-');
        let date = new Date(yearMonthDay[0], yearMonthDay[1], yearMonthDay[2])

        return date.toDateString()
    }

    clickHandler(event) {
        event.preventDefault();
        this.props.toggler(event)
    }

    render() {
        return (
            <SearchDisplay onClick={this.props.turnOff}>
                <InlineP>Reservation dates for {this.parseDate(this.props.startDate)}</InlineP>
                    <SearchDisplay>
                        <DropDown>
                            <InlineA id="startCal" className="nullClick" href="true" onClick={this.clickHandler}>Click</InlineA>
                            { this.props.startCal ? <Calendar startDate={this.props.startDate} id="Calendar"/> : null }
                        </DropDown> 
                    </SearchDisplay>
                <InlineP> - {this.parseDate(this.props.endDate)}</InlineP>
                <SearchDisplay>
                        <DropDown>
                            <InlineA id="endCal" className="nullClick" href="true" onClick={this.clickHandler}>Click</InlineA>
                            { this.props.endCal ? <Calendar endDate={this.props.endDate} id="Calendar2"/> : null }
                        </DropDown> 
                </SearchDisplay>
            </SearchDisplay>
        )
    }
}

export default SearchBar;