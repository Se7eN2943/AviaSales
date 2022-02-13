import React from 'react';
import Filters from '../Filters/Filters'
import Content from '../Content/Content'
import logo from './avia.png'; 



const Logo = () => <div className="headerLogo"><img src={logo} alt="aviaLogo" /></div>

const App = () => {






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

export default App