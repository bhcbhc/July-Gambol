/**
 * Created by Ninghai on 2017/7/10.
 */
import React, {Component} from 'react'
import SOStatusShower from './SOStatusShower'

export default class OrderStatus extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {soId, soClient, soStatus, soDate} = this.props.data

        if (typeof soId === 'undefined') {
            return (
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            )
        }

        return (
            <tr>
                <td>{soId}</td>
                <td>{soClient}</td>
                <td>
                    <SOStatusShower soStatus={soStatus}/>
                </td>
                <td>{soDate}</td>
            </tr>
        )
    }
}