/**
 * Created by Ninghai on 2017/7/10.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

const selected1x = require('../../../../images/selected_1x.png')
const selected2x = require('../../../../images/selected_2x.png')
const unselected1x = require('../../../../images/unselected_1x.png')
const unselected2x = require('../../../../images/unselected_2x.png')

import  styles from './index.scss'


class OrderInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // 最多显示四个soiData
        const {
            soId, salesOrg, soType, soClient, soStatus, shipClient,
            updateDate, quotationDate, updateUser, dueDate, soiList
        } = this.props

        let {isInsert, isAlone} = this.props
        let showList = []
        let selectedImg, unselectedImg;
        if (typeof window.devicePixelRatio === 'undefined' || window.devicePixelRatio === 1) {
            selectedImg = <img src={selected1x} width="20" height="20" alt=""/>
            unselectedImg = <img src={unselected1x} width="20" height="20" alt=""/>
        } else {
            selectedImg = <img src={selected2x} width="20" height="20" alt=""/>
            unselectedImg = <img src={unselected2x} width="20" height="20" alt=""/>
        }


        //是否插单 独立生产
        isInsert = isInsert === null ? '' : isInsert.toUpperCase()
        isAlone = isAlone === null ? '' : isAlone.toUpperCase()

        if (soiList instanceof Array) {
            if (soiList.length >= 3) {
                showList = soiList.slice(0, 3)
            } else {
                showList = soiList
            }
        }

        return (
            <div className={styles.orderInfoContainer}>
                <table className={styles.orderInfo}>
                    <tbody>
                    <tr>
                        <td>销售订单Id</td>
                        <td>{soId}</td>
                        <td>销售组织</td>
                        <td>{salesOrg}</td>
                        <td>{isInsert === 'Y'
                            ? selectedImg
                            : unselectedImg}紧急插单
                        </td>
                    </tr>
                    <tr>
                        <td>类型</td>
                        <td>{soType}</td>
                        <td>下单客户</td>
                        <td>{soClient}</td>
                        <td>{isAlone === 'Y'
                            ? selectedImg
                            : unselectedImg}独立生产
                        </td>
                    </tr>
                    <tr>
                        <td>状态</td>
                        <td>{soStatus}</td>
                        <td>收货客户</td>
                        <td>{shipClient}</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>更新时间</td>
                        <td>{updateDate}</td>
                        <td>下单时间</td>
                        <td>{quotationDate}</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>更新用户</td>
                        <td>{updateUser}</td>
                        <td>交货时间</td>
                        <td>{dueDate}</td>
                        <td>&nbsp;</td>
                    </tr>
                    </tbody>
                </table>
                <h2>订单行项目</h2>
                <table className="soi-info">
                    <thead>
                    <tr>
                        <td>物料</td>
                        <td>重量</td>
                        <td>单位</td>
                        <td>包装方式</td>
                        <td>个性化标签</td>
                    </tr>
                    </thead>
                    <tbody>
                    {showList.map((soiD, index) => {
                        return (<tr key={index}>
                                <td>{soiD.defName}</td>
                                <td>{soiD.weight}</td>
                                <td>{soiD.unit}</td>
                                <td>{soiD.packageMode}</td>
                                <td>{soiD.labelName}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.orderDetail
}

export default connect(mapStateToProps)(OrderInfo)