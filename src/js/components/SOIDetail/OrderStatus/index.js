/**
 * Created by Ninghai on 2017/7/10.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SOStatus} from '../'
import  styles from './index.scss'

const soStatusEnum = [
    {
        stageName: '订单确认',
        statusCode: 'N'
    }, {
        stageName: 'td',
    }, {
        stageName: '生产排程',
        statusCode: 'S'
    }, {
        stageName: 'td'
    }, {
        stageName: '生产中',
        statusCode: 'A'
    }, {
        stageName: 'td'
    }, {
        stageName: '拣配中',
        statusCode: 'F'
    }, {
        stageName: 'td'
    }, {
        stageName: '发运',
        statusCode: 'T'
    }]

class OrderStatus extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {soStatus} = this.props

        let complete = true
        let status = soStatusEnum.map((soStat, index) => {
            if (soStat.stageName === 'td') {
                return <td key={index}>&nbsp;</td>
            }

            if (complete) {
                if (soStatus.toUpperCase() == soStat.statusCode) {
                    complete = false;
                    return <td key={index}><SOStatus stageName={soStat.stageName} status="executing"/></td>
                }

                return <td key={index}><SOStatus stageName={soStat.stageName} status="complete"/></td>
            }

            return <td key={index}><SOStatus stageName={soStat.stageName} status="unfinished"/></td>
        })

        let statusImg,
            arrow,
            order,
            schedule,
            production,
            picking,
            dispatch;

        if (typeof window.devicePixelRatio === 'undefined' || window.devicePixelRatio === 1) {
            const arrow1x = require('../../../../images/arrow_right_40.png')
            const order1x = require('../../../../images/order_1x.png')
            const schedule1x = require('../../../../images/schedule_1x.png')
            const production1x = require('../../../../images/production_1x.png')
            const picking1x = require('../../../../images/picking_1x.png')
            const dispatch1x = require('../../../../images/dispatch_1x.png')

            arrow = <img src={arrow1x} width="40" height="40" alt=""/>
            order = <img src={order1x} width="100" height="100" alt=""/>
            schedule = <img src={schedule1x} width="100" height="100" alt=""/>
            production = <img src={production1x} width="100" height="100" alt=""/>
            picking = <img src={picking1x} width="100" height="100" alt=""/>
            dispatch = <img src={dispatch1x} width="100" height="100" alt=""/>
        } else {
            const arrow2x = require('../../../../images/arrow_right_80.png')
            const order2x = require('../../../../images/order_2x.png')
            const schedule2x = require('../../../../images/schedule_2x.png')
            const production2x = require('../../../../images/production_2x.png')
            const picking2x = require('../../../../images/picking_2x.png')
            const dispatch2x = require('../../../../images/dispatch_2x.png')


            arrow = <img src={arrow2x} width="40" height="40" alt=""/>
            order = <img src={order2x} width="100" height="100" alt=""/>
            schedule = <img src={schedule2x} width="100" height="100" alt=""/>
            production = <img src={production2x} width="100" height="100" alt=""/>
            picking = <img src={picking2x} width="100" height="100" alt=""/>
            dispatch = <img src={dispatch2x} width="100" height="100" alt=""/>
        }

        statusImg = (<tr>
            <td>{order}</td>
            <td>{arrow}</td>
            <td>{schedule}</td>
            <td>{arrow}</td>
            <td>{production}</td>
            <td>{arrow}</td>
            <td>{picking}</td>
            <td>{arrow}</td>
            <td>{dispatch}</td>
        </tr>)

        return (
            <div className={styles.orderSchedule}>
                <h2>订单进度</h2>
                <table>
                    <tbody>
                    {statusImg}
                    <tr>
                        {status}
                    </tr>
                    </tbody>
                </table>
                <ul>
                    <li>
                        <div className={"square-15 " + styles.unfinished}></div>
                        <span>未完成</span></li>
                    <li>
                        <div className={"square-15 " + styles.executing}></div>
                        <span>正在进行</span></li>
                    <li>
                        <div className={"square-15 " + styles.complete}></div>
                        <span>已完成</span></li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        soStatus: state.orderDetail.soStatus
    }
}


export default connect(mapStateToProps)(OrderStatus)