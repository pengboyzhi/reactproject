import React, { Component } from 'react'
import  '../assets/css/base.css'
import '../assets/css/style.css'
import dog from '../assets/img/dog.png'
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";
import  {action2} from "../store/actions";


class Login extends Component {
	state={
    username:'',
    password:'',

  }
  changeIpt = (ev) => {
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }

  submit = async () => {
    this.props.get({
      url:'/mock/login',
      params: {
        username:this.state.username,
        password:this.state.password
      },
      typename:'UPDATE_USER'
    }).then(
      error => {
        console.log(error);
        if (error === 0){
          localStorage.setItem('rc_user',JSON.stringify(this.props.user))
          this.props.history.push('/user')
        } else {
          alert('error')
        }
      }
    )


  }
  render() {
    return (
        <div className="wrap login">
    	<div className="log_banner"><img src={dog}/></div>
    	<form>
    		<div className="yhmm">
    			<label><i>&#xe657;</i></label><input type="text" name="username" value={this.state.username} onChange={this.changeIpt} placeholder="请输入手机号"/> 
    		</div>
    		<div className="yhmm">
    			<label><i>&#xe66b;</i></label><input type="text" name="password" value={this.state.password} onChange={this.changeIpt} placeholder="请输入密码"/> 
    		</div>
    		<div className="wj">
    			<a className="wjmm" >忘记密码？</a>
    		</div>
    		<div className="dl">
    			<a className="tjan" onClick={this.submit}>登录</a>
    		</div>
    		<div className="qx">
    			<Link to='reg' className="tjan" >注册</Link>
    		</div>
    	</form>
    </div>
    )
  }
}

const initMapStateToProps=state=>({
  user: state.user
});

const initMapDispatchToProps=dispatch=>({
  get:({url,params,typename})=>dispatch(action2({
    url,params,typename
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Login)
