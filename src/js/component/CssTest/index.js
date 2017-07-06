/**
 * Created by Ninghai on 2017/7/6.
 */
import React,{Component} from 'react'
import styles from "./index.scss"

export default  class Csstest extends Component{
    render(){
        return (
            <div className="mb20">
                <button className={"center-center mb5"+styles.btnTest}>
                    <i className="icon-cool font-size-24 pr5"/>
                    <span>button标签按钮带图标</span>
                    <i className="icon-happy font-size-24 pl10"/>
                </button>
            </div>
        )
    }
}