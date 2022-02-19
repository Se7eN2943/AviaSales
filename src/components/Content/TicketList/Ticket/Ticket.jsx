import React from 'react';
import logo from './S7Logo.png';
import Route from './Route/Route';

const Ticket = ({price, carrier, segments}) => {

    return (
        <div className="ticket block-shadow">
            <div className="priceAndCompany">
                <div className="price">
                    {price + 'Р'}
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

