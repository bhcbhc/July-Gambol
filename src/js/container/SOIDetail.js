import React, {Component} from 'react'
import {OrderInfo, OrderStatus, PetImage} from '../components/SOIDetail'

export default class SOIDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <OrderInfo/>
                    <PetImage/>
                </div>
                <OrderStatus/>
            </div>
        )
    }
}