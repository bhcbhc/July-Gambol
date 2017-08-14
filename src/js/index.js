/**
 * Created by Ninghai on 2017/7/10.
 */
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from './redux/createStore'
import AsyncApp from './container/index'

import '../styles/app.scss'

const store = configureStore()

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AsyncApp/>
			</Provider>
		)
	}

}

