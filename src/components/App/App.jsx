import React from 'react';
import Filters from '../Filters/Filters'
import TicketList from '../TicketList/TicketList'


const Logo = () => <div className="headerLogo"><img src="./img/1.png" alt="aviaLogo" /></div>

const App = () => {






    return (
        <React.Fragment>
            <header><Logo /></header>
            <main>
                <Filters />
                <TicketList />
            </main>
        </React.Fragment>
    )
}

export default App