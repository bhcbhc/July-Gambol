/**
 * Created by Ninghai on 2017/7/10.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import fetchData from '../redux/action'

import {Header} from '../components/index'
import OrderList from './OrderList'
import SOIDetail from './SOIDetail'

const _soiDeatail = 'ORDER_DETAIL'

class AsyncApp extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		const {dispatch} = this.props
		dispatch(fetchData)
	}

	render() {
		const {pageSelect} = this.props
		return (
			<div>
				<Header pageSelect={pageSelect}/>
				{pageSelect === _soiDeatail
					? <SOIDetail/>
					: <OrderList/>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps)(AsyncApp)