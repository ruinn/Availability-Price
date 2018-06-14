import React from 'react';
import ReactDOM from 'react-dom';
import CalDate from './Date.jsx';
import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';

const slideIn = keyframes`
    0% {
        transform: scaleY(0);
    }
    100% {
        transform: scaleY(1);
    }		
}
`

const slideUp = keyframes`
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-140%);
        opacity: 0%;
        display: none;
    }		
}
`


const Cal = styled.div`
    width: 350px;
    height: 250px;
    background-color: white;
    border: 1px solid black;
    position: absolute;
    z-index: 2;
    top: 15%;
    ${props => !props.id && css` animation: ${slideUp} .3s linear forwards;`}
    ${props => props.id && css` animation: ${slideIn} .1s linear;`}
`;

const FlexCal = styled.ul`
    display: flex;
    list-style: none;
    flex-flow: wrap;
    justify-content: left;
    padding: 5px;
    position: relative;
`

const FlexMonth = styled.div`
    display:block;
`

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left: false,
            currentMonth: 0,
            currentYear: 0,
            currentDate: 0,
            firstDay: 0,
            clicked: false,
            standard: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ,26, 27, 28, 29, 30],
            days: [],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            clickedDate: null,
        }

        this.leftOrRightCalendar = this.leftOrRightCalendar.bind(this);
        this.getFirstDay = this.getFirstDay.bind(this);
        this.oneClick = this.oneClick.bind(this);
        this.backMonth = this.backMonth.bind(this);
        this.forwardMonth = this.forwardMonth.bind(this);
        this.clickDate = this.clickDate.bind(this);
    }

    componentDidMount() {
        const date = this.props.date.split('-')
        const month = date[1];
        const year = date[0];
        const day = date[2];
        this.leftOrRightCalendar();
        this.getFirstDay(year, month, day);
    }

    leftOrRightCalendar() {
        if (!this.props.endDate) {
            this.setState({left: true})
        }
    }

    getFirstDay(year, month, day) {
        let first = new Date(year, month, 1).getDay()
        let temp = this.state.standard;
        let newDays = temp.slice();
        if (month == 1) {
            newDays.pop();
            newDays.pop();
        }
        while (first > 0) {
            newDays.unshift(' ')
            first -= 1;
        }
        while (newDays.length < 35) {
            newDays.push(' ')
        }
        this.setState({ 
            days: newDays,
            currentMonth: month,
            currentYear: year,
            currentDay: day,
            clicked: false,
            clickedDate: null,
         })
    }

    oneClick() {
        this.setState({ clicked: true })
    }

    clickDate(num) {
        this.setState({ clickedDate: num })
        
    }

    backMonth() {
        if(this.state.currentMonth > 0) {
            this.setState({ clicked: false })
            let newMonth = this.state.currentMonth;
            newMonth -= 1;
            if (newMonth < 10) {
                newMonth = '0' + newMonth;
            }
            this.getFirstDay(this.state.currentYear, newMonth)
        }
    }

    forwardMonth() {
        if(this.state.currentMonth < 11) {
            let newMonth = Number(this.state.currentMonth);
            newMonth += 1;
            if (newMonth < 10) {
                newMonth = '0' + newMonth;
            }
            this.getFirstDay(this.state.currentYear, newMonth, this.state.day)
            this.setState({ clicked: false })
        }
    }

    render() {
        return (
                <Cal id={this.props.id} className="nullClick">
                    <FlexMonth className="nullClick">
                        <button className="nullClick" onClick={this.backMonth}>Prev</button>
                        <button className="nullClick" onClick={this.forwardMonth}>Next</button>
                        {this.state.months[Number(this.state.currentMonth)]}
                    </FlexMonth>
                    <FlexCal className="nullClick">
                        {this.state.days.map((item, index)=>
                            <CalDate key={index}
                                id={this.props.id}
                                day={item - this.state.firstDay}
                                month={this.state.currentMonth}
                                year={this.state.currentYear}
                                setStartDate={this.props.setStartDate}
                                setEndDate={this.props.setEndDate}
                                dateSelected={this.state.clicked}
                                oneClick={this.oneClick}
                                clickDate={this.clickDate}
                                clickedDate={this.state.clickedDate}
                                startHolder={this.props.startHolder}
                                hotelRooms={this.props.hotelRooms}
                                unfiltered={this.props.unfiltered}
                            />)}
                    </FlexCal>
                </Cal>
        )
    }
}

export default Calendar