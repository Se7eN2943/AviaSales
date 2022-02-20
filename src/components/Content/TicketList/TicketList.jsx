import React from 'react';
import { connect } from 'react-redux'
import Ticket from './Ticket/Ticket';

const TicketList = ({ tickets, filterList, sortFlag }) => {

    let filteredTickets = []

    if (filterList.length === 4) filteredTickets = tickets

    if (filterList.some(filter => filter === 'Без пересадок')) {
        filteredTickets = filteredTickets.concat(
            tickets.filter(
                ticket => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
            )
        )
    }
    if (filterList.some(filter => filter === '1 пересадка')) {
        filteredTickets = filteredTickets.concat(
            tickets.filter(
                ticket => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1
            )
        )
    }
    if (filterList.some(filter => filter === '2 пересадки')) {
        filteredTickets = filteredTickets.concat(
            tickets.filter(
                ticket => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2
            )
        )
    }
    if (filterList.some(filter => filter === '3 пересадки')) {
        filteredTickets = filteredTickets.concat(
            tickets.filter(
                ticket => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3
            )
        )
    }

    const sorted = () => {

        switch (sortFlag) {

            case 'fast':
                return filteredTickets.sort((prev, next) => {
                    if (prev.segments[0].duration > next.segments[0].duration && prev.segments[1].duration > next.segments[1].duration) return 1
                    if (prev.segments[0].duration < next.segments[0].duration && prev.segments[1].duration < next.segments[1].duration) return -1
                    return 0;
                })

            case 'optimal':
                const discount = filteredTickets.sort((prev, next) => prev.price - next.price)
                return discount.sort((prev, next) => {
                    if (prev.segments[0].duration > next.segments[0].duration && prev.segments[1].duration > next.segments[1].duration) return 1
                    if (prev.segments[0].duration < next.segments[0].duration && prev.segments[1].duration < next.segments[1].duration) return -1
                    return 0;
                })
            // const arifmPrice = Math.floor(tickets.reduce((acc, ticket) => {
            //     acc += ticket.price
            //     return acc
            // }, 0) / tickets.length)

            // const arifmDuration = Math.floor(tickets.reduce((acc, ticket) => {
            //     acc += ticket.segments[0].duration + ticket.segments[1].duration
            //     return acc
            // }, 0) / tickets.length / 2)
            default:
                return filteredTickets.sort((prev, next) => prev.price - next.price)
        }
    };

    const elements = sorted().map((ticket, i) => {
        return <Ticket
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
            key={i}
        />
    })

    return (
        <React.Fragment>
            <div className="tickets">
                {elements.length === 0
                    ? <div className="jg">Не удалось загрузить страницу</div>
                    : elements.slice(0, 5)}
            </div>
            <button className="allTicketsBtn active">
                Показать еще 5 билетов!
            </button>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        tickets: state.tickets,
        filterList: state.filterList,
        sortFlag: state.sortFlag
    }
}

export default connect(mapStateToProps)(TicketList)

