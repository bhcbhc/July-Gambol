/**
 * Created by Ninghai on 2017/7/10.
 */
import React, {Component} from 'react'
import styles from './index.scss'

const pageList = {
	ORDER_LIST: '未完工订单列表',
	ORDER_DETAIL: '销售订单详细进度'
}

class Header extends Component {

	render() {
		const {pageSelect} = this.props
		return (
			<div className={styles.header}>
				<h1>{pageList[pageSelect]}</h1>
			</div>
		)
	}
}

export default Header
