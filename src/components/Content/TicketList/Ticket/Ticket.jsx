import React from 'react';
import logo from './S7Logo.png';
import Route from './Route/Route';

const Ticket = () => {

    return (
        <div className="ticket block-shadow">
            <div className="priceAndCompany">
                <div className="price">
                    13 000 Р
                </div>
                <div className="company">
                    <img src={logo} alt="CompanyLogo" />
                </div>
            </div>
            <Route />
            <Route />
        </div>
    )
}

export default Ticket