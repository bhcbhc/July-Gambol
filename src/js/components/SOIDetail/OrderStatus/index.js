/**
 * Created by Ninghai on 2017/7/10.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import  styles from './index.scss'


class OrderStatus extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <h1>test</h1>
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(OrderStatus)