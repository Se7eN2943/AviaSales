import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Filters from '../Filters/Filters'
import Content from '../Content/Content'
import logo from './avia.png';
import AviaSales from '../../services';
import { setSearchId, setTickets } from '../../actions'

const aviaSales = new AviaSales();


const Logo = () => <div className="headerLogo"><img src={logo} alt="aviaLogo" /></div>

const App = ({ setSearchId, setTickets, searchId }) => {

    const getSerch = async () => await aviaSales.getSearchId().then(id => setSearchId(id))

    const getTickets = () => aviaSales.getTickets(searchId).then(ticket => {
        setTickets(ticket)
        if (!ticket.stop) return getTickets()
        return
    })

    useEffect(async () => {
        await getSerch()
        getTickets()
    }, [])


    return (
        <React.Fragment>
            <header><Logo /></header>
            <main>
                <Filters />
                <Content />
            </main>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        searchId: state.searchId,
        tickets: state.tickets
    }
}


export default connect(mapStateToProps, { setSearchId, setTickets })(App)