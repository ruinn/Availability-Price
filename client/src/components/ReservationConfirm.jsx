import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmationRow from './ConfirmationRow.jsx';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const StyledBody = styled.tbody`
    background-color: rgb(255, 255, 255);
`;

const Th = styled.th`
    border: 1px solid rgb(196, 196, 196);
    white-space:nowrap;
    padding:.5rem;
`;

const Td = styled.td`
    border: 1px solid rgb(196, 196, 196);
    white-space:nowrap;
    padding:.5rem;
`;

const Tr = styled.tr`
    font-size: 12px;
    color: rgb(105, 105, 105);
    vertical-align: bottom;
`
const Button = styled.button`
    float: right;
`

const DormName = styled.th`
    border: 1px solid rgb(196, 196, 196);
    white-space:nowrap;
    padding:.5rem;
    text-align: left;
    width: 100%;   
`

const NormalHeader = styled.th`
    border: 1px solid rgb(196, 196, 196);
    white-space:nowrap;
    padding:.5rem;
    min-width: 100px;
`

const H4 = styled.h4`
    color: black;
    font-size: 16px;
    margin:0px;
`

const Span = styled.span`
    float:right;
`;

const Transit = styled.div`
visibility: ${props => props.total === 0 ? 'hidden': 'visible'};
${ props => props.total && css` transition: height 100ms ease-in-out;`};
animation: fadeIn 1s linear;
`

class ReservationConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.createRows = this.createRows.bind(this);
        this.updateTotal = this.updateTotal.bind(this);
    }

    createRows(rooms) {
        let roomsArray = [];
        for (var i in rooms) {
            roomsArray.push(rooms[i]);
        }
        return roomsArray;
    }



    updateTotal(rooms) {
        let total = 0;
        for (var i in rooms) {
            if (rooms[i].reservedBeds !== "Select") {
                total += rooms[i].reservedBeds * rooms[i].avg * rooms[i].length;
            }
        }
        return total;
    }

    render() {
        return (
            <Transit total={this.props.total}>
                <StyledTable>
                    <thead>
                        <Tr>
                            <DormName><H4>My Selection</H4></DormName>
                            <NormalHeader>Bed</NormalHeader>
                            <NormalHeader>Price Per Night</NormalHeader>
                            <Th>Nights</Th>
                            <Th>Total</Th>
                        </Tr>
                    </thead>
                    <StyledBody>
                        {this.createRows(this.props.selected).map((room, index) =>  <ConfirmationRow room={room} key={index}/>)}
                    </StyledBody>
                </StyledTable>
                <StyledTable>
                    <StyledBody>
                        <tr>
                            <Td>Total:<Span>${this.props.total}</Span></Td>
                        </tr>
                    </StyledBody>
                </StyledTable>
                <Button>Confirm</Button>

            </Transit>
        )
    }
}

export default ReservationConfirm;