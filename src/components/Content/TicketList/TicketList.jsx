import React from 'react';
import { connect } from 'react-redux'
import Ticket from './Ticket/Ticket';



const TicketList = ({ tickets }) => {
    const elements = tickets.map(ticket => {
        return <Ticket
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
        />
    })
    return (
        <React.Fragment>
            <div className="tickets">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
            <button className="allTicketsBtn active">
                Показать еще 5 билетов!
            </button>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({ tickets: state.tickets })

export default connect(mapStateToProps)(TicketList)

