/**
 * Created by Ninghai on 2017/7/6.
 */
import React, {Component} from 'react'
import styles from './index.scss'

class Tab extends Component {
    state = {
        current: 0
    }

    handleClick = (index) => {
        this.setState(
            {current: index}
        )
    }

    render() {
        const {items} = this.props
        const {current} = this.state

        return (
            <div>
                <ul>
                    {items.map((item, index) =>
                        <li
                            key={index}
                            className={current===index?styles.focused:styles.normal}
                            onClick={this.handleClick.bind(null,index)}
                        >
                            {item}
                        </li>
                    )}
                </ul>
                <p>当前的选择是：{items[this.state.current]}</p>
            </div>
        )
    }
}

export default Tab