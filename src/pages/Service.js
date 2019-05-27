import React,{Component} from "react";
import  '../assets/css/base.css'
import '../assets/css/style.css'
import {Link} from 'react-router-dom'

import connect from "react-redux/es/connect/connect";
import {action1} from '../store/actions';
class Service extends Component{
	constructor(props){
		super();
		//读取数据
		props.get({url: '/mock/service',params:{_limit:10},typename: 'UPDATE_SERVICE'});
		}
    render(){
			console.log(this.props.service)
        return (
        <div className="wrap">
	    <div className="top_fixed">
	    	<a href="javascript:window.history.back()" className="left_btn   hide"><i>&#xe60b;</i></a>
	    	<input type="search" placeholder="请输入服务项目"/>
	    	<i className="sr">&#xe620;</i>
	    	<a href="#" className="right_btn">确定</a>
	    </div>
	    <div className="container pb">
			<ul className="service_list">
			{
				this.props.service.map(item =>(
					<li key={item.id}>
					<Link 
					to={{
						pathname:'/proservice/'+item.id,
						search:"?dataName=" + 'service'

					}}
				>
							<img src={item.image} />
							<div>
								<h3>{item.title}</h3>
								<p className="service_time">服务时间:<span>{item.number}分钟</span></p>
								<p className="service_price">服务价格:<span>￥{item.price}元</span></p>
							</div>
					</Link>
					</li>
				))
			}
	    	</ul>
	    </div>
	    <div className="sxtj">
		    	<a href="javascript:;">按摩</a>
		    	<a href="javascript:;">洗澡</a>
		    	<a href="javascript:;">训练</a>
        </div>
        </div>
        );
	}   
}

const initMapStateToProps=state=>({
	service:state.service
  });
  
  const initMapDispatchToProps=dispatch=>({
	get:({url,params,typename})=>dispatch(action1({
	  dispatch,url,params,typename
	}))
  });
  
  export default connect(
	initMapStateToProps,
	initMapDispatchToProps
  )(Service)