/**
 * Created by Ninghai on 2017/7/11.
 */
import React, {Component} from 'react'
import styles from './index.scss'

export default class SOStatus extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {stageName, status} = this.props

        return (
            <div className={styles.soStatus + " " + styles[status]}>
                {stageName}
            </div>
        )
    }
}