import React from 'react';
import logo from './S7Logo.png';
import Route from './Route/Route';

const Ticket = ({price, segments}) => {
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
            <Route segments={segments[0]}/>
            <Route segments={segments[1]}/>
        </div>
    )
}

export default Ticket

