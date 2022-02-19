import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../actions'


const Nav = () => {

    const onSortClick = (e) => {
        
    }

    let discountActiv
    let fastActiv
    let optimalActiv


    return (
        <nav>
            <button
                name='discount'
                onClick={onSortClick}
                className={"navBtn_start navBtn  weight600" + discountActiv}>
                самый дешевый
            </button>
            <button
                name='fast'
                onClick={onSortClick}
                className={"navBtn_center navBtn  weight600" + fastActiv}>
                самый быстрый
            </button>
            <button
                name='optimal'
                onClick={onSortClick}
                className={"navBtn_end navBtn  weight600" + optimalActiv}>
                оптимальный
            </button>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        searchId: state.searchId,
        tickets: state.tickets
    }
}

export default connect(mapStateToProps, actions)(Nav)