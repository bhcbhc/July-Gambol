/**
 * Created by Ninghai on 2017/7/4.
 */
import  React, {Component} from 'react'
import {
    ComponTitle,
    CssTest,
    Tab
} from '../component'


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

class Header extends Component{
    render(){
        return <h1>Hello,{this.props.lastName+this.props.firstName}</h1>
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
     state={
        items:["关羽",'张飞','马超','黄忠','姜维']
    };

    render() {
         const {items}=this.state;
        return (
            <div>
                <ComponTitle title="第一个标题"/>
                <Header firstName="亮" lastName="诸葛" className="atn"/>
                <ComponTitle title="第二个标题"/>
                <CssTest/>
                <ComponTitle title="第三个标题"/>
                <Tab items={items}/>
                <Counter color="red" increment={1}/>
                <List/>
            </div>
        )
    }
}