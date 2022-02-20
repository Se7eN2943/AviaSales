import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Progress } from 'antd';
import Filters from '../Filters/Filters'
import Content from '../Content/Content'
import logo from './avia.png';
import AviaSales from '../../services';
import { setSearchId, setTickets } from '../../actions'

const aviaSales = new AviaSales();

const Logo = () => <div className="headerLogo"><img src={logo} alt="aviaLogo" /></div>

const App = ({ setSearchId, setTickets, searchId, ticketsFlag }) => {

    const getSerch = () => aviaSales.getSearchId().then(id => setSearchId(id))

    const getTickets = () => aviaSales.getTickets(searchId).then(ticket => {
        setTickets(ticket)
        if (!ticket.stop) return getTickets()
        return
    })

    useEffect(async () => {
        await getSerch()
    }, [])

    useEffect(() => {
        getTickets()
    }, [searchId])


    return (
        <React.Fragment>
            <header><Logo /></header>
            {!ticketsFlag && <Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={70}
                showInfo={false}
            />}
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
        tickets: state.tickets,
        ticketsFlag: state.ticketsFlag
    }
}

export default connect(mapStateToProps, { setSearchId, setTickets })(App)



