import React,{Component} from "react";
import  '../assets/css/base.css'
import '../assets/css/style.css'
import querystring from 'query-string'
import {Link} from 'react-router-dom'
import $ from 'jquery'

import axios from 'axios';

class Proservice extends Component {
    state={
        prodate:{},
        list:['服务内容','适用','服务范围'],
        content:[]

    }
  render() {
    let date =this.state.prodate;
    console.log(date)
    return (
        <div className="wrap">
            <div className="top_fixed">
                <a href="javascript:window.history.back()" className="left_btn"><i>&#xe622;</i></a>
                <h1>服务详情</h1>
                <a href="yylc1.html" className="right_btn">预约</a>
            </div>  
            <div className="container">
                <ul className="service_list">
                <li className="bgwhite">
                    <a href="javascript:;">
                        <img src={date.image} />
                        <div>
                            <h3>{date.title}</h3>
                            <p className="service_time">服务时间:<span>{date.number}分钟</span></p>
                            <p className="service_price">服务价格:<span>￥{date.price}元</span></p>
                        </div>
                    </a>
                </li>
                </ul>
                
                <ul className="tabs">
                    <li className="on"><a href="javascript:;">服务内容</a></li>
                    <li><Link to='proservice'>适用</Link></li>
                    <li><Link to='proservice'>服务范围</Link></li>
                </ul>
                <ul className="content">
                    <li>{date.detail && date.detail.fuwu}</li>
                    <li>{date.detail && date.detail.content}</li> 
                    <li>{date.detail && date.detail.fanwei}</li> 
                </ul>
            </div>
        </div>
    )
    }
    async componentDidMount(){
        let id = this.props.match.params.id;
        let dataName = querystring.parse(this.props.location.search).dataName;
        let res = await axios({url:`/mock/${dataName}/${id}`});
        this.setState({prodate:res.data.page_data})

        $(function(){
            $(".content li").height($(window).height()-254)
            $(".tabs li").click(function(){
                var index=$(this).index();
                $(".tabs li").removeClass().eq(index).addClass("on");
                $(".content li").hide().eq(index).show()
            })
        })
    }
}
export default Proservice;