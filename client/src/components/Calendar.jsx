import React from 'react';
import ReactDOM from 'react-dom';
import Date from './Date.jsx';

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMonth: 7,
            longMonths: [1, 3, 5, 6, 8, 10, 12],
            shortMonths:[4, 7, 9, 11],
            longDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14 ,15 ,16 ,17 ,18 ,19, 20, 21, 22, 23, 24, 25 , 26, 27, 28, 29, 30, 31],
            shortDays: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ,26, 27, 28, 29, 30],
        }
    }


    render() {
        if (this.state.shortMonths.includes(this.state.currentMonth)) {
            return (
                    <div id={this.props.id} className="Calendar">
                        {console.log(this.props.startDate)}
                        <ul className="flexCal nullClick">
                            {this.state.shortDays.map((item, index)=> <Date key={index} day={index + 1}/>)}
                        </ul>
                    </div>
            )
        }
    }
}

export default Calendar