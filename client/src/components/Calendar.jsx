import React from 'react';
import ReactDOM from 'react-dom';
import Date from './Date.jsx';
import styled from 'styled-components';

const Cal = styled.div`
    width: 350px;
    height: 250px;
    background-color: white;
    border: 1px solid black;
    position: fixed;
    z-index: 2;
    top: 15%;
    animation: fadein 2s;
`;

const FlexCal = styled.ul`
    display: flex;
    list-style: none;
    flex-flow: wrap;
    justify-content: left;
    padding: 5px;
`

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left: false,
            currentMonth: 7,
            longMonths: [1, 3, 5, 6, 8, 10, 12],
            shortMonths:[4, 7, 9, 11],
            longDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14 ,15 ,16 ,17 ,18 ,19, 20, 21, 22, 23, 24, 25 , 26, 27, 28, 29, 30, 31],
            shortDays: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ,26, 27, 28, 29, 30],
        }
    }

    componentDidMount() {
        if (!this.props.endDate) {
            this.setState({left: true})
        }
    }

    render() {
        return (
                <Cal id={this.props.id}>
                    {console.log(this.props)}
                    <FlexCal className="nullClick">
                        {this.state.shortDays.map((item, index)=> <Date key={index} day={index + 1}/>)}
                    </FlexCal>
                </Cal>
        )
    }
}

export default Calendar