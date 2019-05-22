import React, { Component } from 'react'
import  '../assets/css/base.css'
import '../assets/css/style.css'
import dog from '../assets/img/dog.png'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {
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
    let res = await axios({
      url:'/mock/login',
      params:{
        username:this.state.username,
        password:this.state.password
      }
    });

    // console.log(res)
    if (res.data.error===0){
      //写入local && 跳转user
      localStorage.setItem('rc_user',JSON.stringify(res.data.page_data))
      this.props.history.push('/user')
    } else {
      alert('失败')
    }
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
