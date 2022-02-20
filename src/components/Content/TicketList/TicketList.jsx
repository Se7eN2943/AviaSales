import React from 'react';
import { connect } from 'react-redux'
import Ticket from './Ticket/Ticket';



const TicketList = ({ tickets, filterList, sortFlag }) => {
console.log(filterList) 
    const filteredTickets = tickets.filter(ticket => {
        switch (filterList){
            case filterList:
            default: return ticket
        }
    }) 


    const elements = tickets.map((ticket, i) => {
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
                {filterList.length === 0
                    ? <div className="jg">Не удалось загрузить страницу</div>
                    : elements}
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

