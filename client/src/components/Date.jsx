import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FlexDate = styled.li`
    text-align: center;
    width: 13.69%;
    height: 35px;
    border: 1px solid black;
    background-color: ${props => props.color || props.clicked ? 'pink' : 'white'}
`

const Text = styled.p`
    margin-top: 10px;
`



class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            clicked: false,
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.enter = this.enter.bind(this);
        this.leave = this.leave.bind(this);
    }

    clickHandler(event) {
        if(!this.props.dateSelected) {
            if (this.props.id == 'Calendar') this.props.setStartDate(this.props.year, this.props.month, event.target.textContent)
            if (this.props.id == 'Calendar2') this.props.setEndDate(this.props.year, this.props.month, event.target.textContent)
            this.setState({ clicked: true })
        }
        this.props.oneClick();
    }

    enter() {
        this.setState({ hover: true })
    }

    leave() {
        this.setState({ hover: false })
    }

    render() {
        if (!this.props.day) {
            return (
                <FlexDate className="nullClick"><Text> </Text></FlexDate>
            )
        }
            return (
                
                <FlexDate
                color={this.state.hover} clicked={this.state.clicked}
                onMouseEnter={this.enter}
                onMouseLeave={this.leave}
                className="nullClick">
                    <Text className="nullClick" onClick={this.clickHandler}>{this.props.day}</Text>
                </FlexDate>
            )
    }
}

export default Date;