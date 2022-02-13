import React from 'react';


const Nav = () => {
    return (
        <nav>
            <button className="navBtn navBtn_start weight600 active">самый дешевый</button>
            <button className="navBtn navBtn_center weight600">самый быстрый</button>
            <button className="navBtn navBtn_end weight600">оптимальный</button>
        </nav>
    )
}

export default Nav