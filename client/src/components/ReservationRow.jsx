import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid rgb(196, 196, 196);
    white-space:nowrap;
    padding:.5rem;
`;

const DropDown = styled.select`
    display:table;
    margin:auto;
    min-width: 100%;
    margin-bottom: 10px;
`;

class ReservationRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value : 0,
        }
        let avg = 0;
        this.leastBedsLeft = this.leastBedsLeft.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let average = (this.props.room.reduce((a, b) => {
            if(!a) return b.price;
            if(!a.price) return a + b.price;
            return a.price + b.price;
        })/4).toFixed(2);
        this.avg = average;
    }

    leastBedsLeft(beds) {
        return beds.reduce((a, b) => {
            if(!a) return b.bedsLeft;
            if(!a.price) return a < b ? a : b.bedsLeft = a;
            return a.bedsLeft < b.bedsLeft ? a.bedsLeft : b.bedsLeft = a.bedsLeft;
        })
    }

    arrayOfAvailability(beds) {
        let current = 1;
        let final = [];
        while (current <= beds) {
            final.push(current)
            current += 1;
        }
        return final;
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        this.props.set(this.props.room, e.target.value, this.avg, this.props.index)
    }

    render() {
        return (
            <tr>
                <Td>{this.props.room[0].maxBeds} Bed Room </Td>
                <Td>${this.avg}</Td>
                <Td>
                    <DropDown onChange={this.handleChange}>
                        <option>Select</option>
                        {this.arrayOfAvailability(this.leastBedsLeft(this.props.room)).map((bed) => <option key={bed} value={bed}>{bed} bed(s)</option>)}
                    </DropDown>
                </Td>
            </tr>
        )
    }
}

export default ReservationRow;