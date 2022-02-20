import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { setSortFlag } from '../../../actions'


const Nav = ({ sortFlag, setSortFlag }) => {
    let discountActiv
    let fastActiv
    let optimalActiv

    const onSortClick = async (e) => {
        console.log(e.target.className)
        await setSortFlag(e.target.name)
        e.target.name === 'fast' && (fastActiv = 'active')
        console.log(e.target.className)
        // switch (sortFlag) {
        //     case 'discount':
        //         discountActiv = 'active'
        //         fastActiv = ''
        //         optimalActiv = ''
        //         break
        //     case 'fast':
        //         discountActiv = ''
        //         fastActiv = 'fast'
        //         optimalActiv = ''
        //         break
        //     case 'optimal':
        //         discountActiv = ''
        //         fastActiv = ''
        //         optimalActiv = 'optimal'
        //         break
        // }
    }
    console.log(fastActiv)
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
                className={'navBtn_center navBtn  weight600' + ' ' + fastActiv}>
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