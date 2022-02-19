import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { setSortFlag } from '../../../actions'


const Nav = ({ sortFlag, setSortFlag }) => {
    console.log(sortFlag)
    let discountActiv = 'active'
    let fastActiv = ''
    let optimalActiv = ''

    const onSortClick = (e) => {
        setSortFlag(e.target.name)
        switch (e.target.name) {
            case 'discount':
                discountActiv = 'active'
                fastActiv = ''
                optimalActiv = ''
                break
            case 'fast':
                discountActiv = ''
                fastActiv = 'fast'
                optimalActiv = ''
                break
            case 'optimal':
                discountActiv = ''
                fastActiv = ''
                optimalActiv = 'optimal'
                break
        }
    }

    return (
        <nav>
            <button
                name='discount'
                onClick={onSortClick}
                className={`navBtn_start navBtn  weight600 ${discountActiv}`}>
                самый дешевый
            </button>
            <button
                name='fast'
                onClick={onSortClick}
                className={`navBtn_center navBtn  weight600 ${fastActiv}`}>
                самый быстрый
            </button>
            <button
                name='optimal'
                onClick={onSortClick}
                className={`navBtn_end navBtn  weight600 ${optimalActiv}`}>
                оптимальный
            </button>
        </nav>
    )
}

const mapStateToProps = state => ({ sortFlag: state.sortFlag })

export default connect(mapStateToProps, { setSortFlag })(Nav)