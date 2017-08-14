/**
 * Created by Ninghai on 2017/7/10.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {OrderStatus} from '../components'

class OrderList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			page: 1
		}
	}

	componentWillUnmount() {
		if (typeof this.interval !== 'undefined') {
			clearInterval(this.interval)
		}
	}

	componentWillReceiveProps(nextProps) {
		const intervalTime = Number(nextProps.interval)

		if (!isNaN(intervalTime) && intervalTime !== -1) {
			if (typeof this.interval === 'undefined') {
				(function (ol, np) {
					ol.interval = setInterval(function () {
						console.log(new Date())

						let page = ol.state.page + 1
						let orderData = np.orderInfo.orderData
						if (orderData instanceof Array && page > Math.ceil(orderData.length / 12)) {
							page = 1
						}

						ol.setState({page: page})
					}, intervalTime * 1000)
				})(this, nextProps)
			} else if (intervalTime !== Number(this.props.interval)) {

				(function (ol, np) {
					clearInterval(ol.interval)
					ol.interval = setInterval(function () {
						console.log(new Date())

						let page = ol.state.page + 1
						let orderData = np.orderInfo.orderData
						if (orderData instanceof Array && page > Math.ceil(orderData.length / 12)) {
							page = 1
						}

						ol.setState({page: page})
					}, intervalTime * 1000)
				})(this, nextProps)
			}
		}
	}

	render() {
		const {totalNum, nNum, sNum, aNum, fNum, tNum, orderData} = this.props.orderInfo

		const currentPage = this.state.page
		let showData = []
		if (orderData instanceof Array) {
			showData = orderData.slice((currentPage - 1) * 12, currentPage * 12)
		}

		return (
			<div className="order-list">
				<table>
					<thead>
						<tr>
							<td>销售订单ID</td>
							<td>下单客户</td>
							<td>状态</td>
							<td>下单时间</td>
						</tr>
					</thead>
					<tbody>
						{showData.map(d =>
							<OrderStatus data={d}/>
						)}
					</tbody>
				</table>
				<div className="footer">
					<span>当前订单数量{totalNum}个</span>
					<span>订单确认数量{nNum}个</span>
					<span>生产排程数量{sNum}个</span>
					<span>生产中数量{aNum}个</span>
					<span>拣配中数量{fNum}个</span>
					<span>发运数量{tNum}个</span>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		interval: state.interval,
		orderInfo: state.orderList
	}
}

export default connect(mapStateToProps)(OrderList)