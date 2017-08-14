import React, {Component} from 'react'
import {OrderInfo, OrderStatus, PetImage} from '../components/SOIDetail'

export default class SOIDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="order-detail">
                <div className="order-info">
                    <OrderInfo/>
                    <PetImage/>
                </div>
                <OrderStatus/>
            </div>
        )
    }
}