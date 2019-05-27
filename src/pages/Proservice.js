import React,{Component} from "react";
import  '../assets/css/base.css'
import '../assets/css/style.css'
import querystring from 'query-string'
import {Link} from 'react-router-dom'
import $ from 'jquery'

import {action1} from "../store/actions";
import connect from "react-redux/es/connect/connect";

class Proservice extends Component {
  render() {
    let date =this.props.data;
    console.log(date)
    return (
        <div className="wrap">
            <div className="top_fixed">
                <a href="javascript:;" onClick={()=>this.props.history.go(-1)} className="left_btn"><i>&#xe622;</i></a>
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
                    <li style={{display:'none'}}>{date.detail && date.detail.content}</li> 
                    <li style={{display:'none'}}>{date.detail && date.detail.fanwei}</li> 
                </ul>
            </div>
        </div>
    )
    }
    async componentDidMount(){
        let id = this.props.match.params.id;
        let dataName = querystring.parse(this.props.location.search).dataName;
        this.props.get({url:`/mock/${dataName}/${id}`,typename: 'UPDATE_DETAIL'})


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
const initMapStateToProps=state=>({
    data:state.detail,
  });
  
  const initMapDispatchToProps=dispatch=>({
    get:({url,params,typename})=>dispatch(action1({
      dispatch,url,params,typename
    }))
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Proservice)