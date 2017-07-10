/**
 * Created by Ninghai on 2017/7/10.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import  styles from './index.scss'


class PetImage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {name, birthday, breed, weight, src} = this.props
        return (
            <div className={styles.InfoContainer}>
                <img src={src} width="230" height="230" alt=""/>
                <div className={styles.petInfo}>
                    {name !== null && name != '' ? <p>{name}</p> : null}
                    {birthday !== null && birthday != '' ? <p>{birthday}</p> : null}
                    {breed !== null && breed != '' ? <p>{breed}</p> : null}
                    {weight !== null && weight != '' ? <p>{`${weight}kg`}</p> : null}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.orderDetail.petName,
        birthday: state.orderDetail.birthday,
        breed: state.orderDetail.breed,
        weight: state.orderDetail.weight,
        src: "http://222.175.7.188:8060/Desktop/Images/" + state.orderDetail.src
    }
}

export default connect(mapStateToProps)(PetImage)