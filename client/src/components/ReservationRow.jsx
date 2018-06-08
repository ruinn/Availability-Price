import React from 'react';
import ReactDOM from 'react-dom';

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
                <td>{this.props.room[0].maxBeds} Bed Room </td>
                <td>${this.avg}</td>
                <td>
                    <select className="dropDown" onChange={this.handleChange}>
                        <option>Select</option>
                        {this.arrayOfAvailability(this.leastBedsLeft(this.props.room)).map((bed) => <option key={bed} value={bed}>{bed} bed(s)</option>)}
                    </select>
                </td>
            </tr>
        )
    }
}

export default ReservationRow;