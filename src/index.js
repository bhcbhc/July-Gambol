/**
 * Created by Ninghai on 2017/7/4.
 */
import React from "react"
import {render} from 'react-dom'
import App from './js/container/App'

import './styles/normalize.scss'
import './styles/app.scss'
import  './styles/font.scss'

render(
    <App/>,
    document.getElementById('app')
);