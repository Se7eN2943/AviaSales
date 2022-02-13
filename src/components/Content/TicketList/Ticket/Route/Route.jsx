import React from 'react';


const Route = () => {
    return (
        <div className="route">
            <div className="routeName routeBlock">
                <span className="name">
                    MOW – HKT
                </span>
                <span className="time">
                    10:45 – 08:00
                </span>
            </div>

            <div className="travelTime routeBlock">
                <span className="name">
                    В пути
                </span>
                <span className="time">
                    21ч 15м
                </span>
            </div>
            <div className="transplants routeBlock">
                <span className="name">
                    2 пересадки
                </span>
                <span className="time">
                    HKG, JNB
                </span>
            </div>

        </div>
        

    )
}

export default Route