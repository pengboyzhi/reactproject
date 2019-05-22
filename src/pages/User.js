import React,{Component} from "react";
import  '../assets/css/base.css'
import '../assets/css/style.css'
import {NavLink} from 'react-router-dom'


export default class User extends Component{
    render(){
		let {fans, follow, icon, nikename, time } = this.props.data;
		console.log(this.props.data)
		let btnClass = "container pd";
		let btnClass1="left_btn hide";
        return(
            <div className="wrap">
				<div className="top_fixed">
					<a href="javascript:window.history.back()" className={btnClass1}><i>&#xe622;</i></a>
					<h1>个人中心</h1>
					<a className="right_btn" href="javascript:;" onClick={()=>{
						localStorage.removeItem('rc_user');
						this.props.history.push('/home')
					}}>注销</a>
				</div>	    
				<div className={btnClass}>
					<div className="my_top">
						<a href="#"><img src={icon}/></a>
						<ul>
						<li>您好,<span>{nikename}</span></li>
						<li>当前关注：<span>{fans}</span></li>
						</ul>
					</div>
					<ul className="my_list">
						<li><NavLink to="/home"><i>&#xe609;</i>购物车</NavLink></li>
						<li><NavLink to="/home"><i>&#xe606;</i>商品订单</NavLink></li>
						<li><NavLink to="/home"><i>&#xe645;</i>服务订单</NavLink></li>
						<li><NavLink to="/home"><i>&#xe660;</i>地址管理</NavLink></li>
						<li><NavLink to="/home"><i>&#xe61f;</i>消费记录</NavLink></li>
						<li className="hide"><NavLink to="/home"><i>&#xe72b;</i>积分商城</NavLink></li>
						<li><NavLink to="/home"><i>&#xe66b;</i>修改密码</NavLink></li>
						<li><NavLink to="/home"><i>&#xe627;</i>关于我们</NavLink></li>
					</ul>
				</div>
			</div>
        )
    }
}