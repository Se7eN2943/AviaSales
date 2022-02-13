import React from 'react';
import Ticket from './Ticket/Ticket';



const TicketList = () => {
    return (
        <React.Fragment>
            <div className="tickets">
                <Ticket />
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

export default TicketList;