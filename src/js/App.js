/**
 * Created by Ninghai on 2017/7/4.
 */
import  React, {Component} from 'react'
import '../styles/app.css'
import icon from  '../images/small.png'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.lastName}{this.props.firstName}</h1>
                <image src={icon}></image>
            </div>
        )
    }
}

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {counter: 1}
        this.interval = setInterval(() => this.ticks(), 2000)
    }

    ticks() {
        let {counter} = this.state;
        counter >= 6 ?
            this.setState({
                counter: 1
            }) :
            this.setState({
                counter: this.state.counter + this.props.increment
            })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return <p style={{color: this.props.color}}> 第{this.state.counter}次出祁山</p>
    }
}

class List extends Component {
    state = {
        list: [
            {
                name: '刘备',
                job: "皇帝",
                relationShip: ["leader", "friends", 'comrade-in-arms'],
            }, {
                name: '姜维',
                job: "大将军",
                relationShip: ["student", "friends", 'comrade-in-arms'],
            }, {
                name: '司马懿',
                job: '丞相',
                relationShip: ["enemy", "friends"],
            }, {
                name: '黄月英',
                relationShip: ["wife"],
            }
        ]
    }

    render() {
        const {list} = this.state;

        return (
            <table>
                <thead>
                <tr>
                    <td>姓名</td>
                    <td>官职</td>
                    <td>关系</td>
                </tr>
                </thead>
                <tbody>
                {
                    list.map((item, index) =>
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.job?item.job:'unknow'}</td>
                        <td>{
                        item.relationShip.map((it,ind)=>
                            <p key={ind}>{it}</p>)
                    }</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        )
    }
}

export default  class App extends Component {
    render() {
        return (
            <div>
                <Header firstName="亮" lastName="诸葛" className="atn"/>
                <Counter color="red" increment={1}/>
                <List/>
            </div>
        )
    }
}