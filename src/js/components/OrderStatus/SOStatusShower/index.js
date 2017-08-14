/**
 * Created by Ninghai on 2017/7/11.
 */
import React, {Component} from 'react'
import {SOStatus} from '../../SOIDetail'

const arrow1x = require('../../../../images/arrow_right_1x.png')
const arrow2x = require('../../../../images/arrow_right_2x.png')

const soStatusEnum = [
	{
		stageName: '订单确认',
		statusCode: 'N'
	}, {
		stageName: 'array',
	}, {
		stageName: '生产排程',
		statusCode: 'S'
	}, {
		stageName: 'array'
	}, {
		stageName: '生产中',
		statusCode: 'A'
	}, {
		stageName: 'array'
	}, {
		stageName: '拣配中',
		statusCode: 'F'
	}, {
		stageName: 'array'
	}, {
		stageName: '发运',
		statusCode: 'T'
	}]

export default class SOStatusShower extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {soStatus} = this.props
		let complete = true
		let status = soStatusEnum.map(soStat => {
			if (soStat.stageName === 'array') {
				let img1x = <img src={arrow1x} width="30" height="30" alt=""/>
				let img2x = <img src={arrow2x} width="30" height="30" alt=""/>

				if (typeof window.devicePixelRatio === 'undefined' || window.devicePixelRatio === 1) {
					return img1x
				} else {
					return img2x
				}
			}

			if (complete) {
				if (soStatus.toUpperCase() == soStat.statusCode) {
					complete = false
					return <SOStatus stageName={soStat.stageName} status="executing"/>
				}

				return <SOStatus stageName={soStat.stageName} status="complete"/>
			}

			return <SOStatus stageName={soStat.stageName} status="unfinished"/>
		})

		return (
			<div className="so-status-c">
				{status}
			</div>
		)
	}
}