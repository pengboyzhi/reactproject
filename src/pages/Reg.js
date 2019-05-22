import React, { Component } from 'react'
import  '../assets/css/base.css'
import '../assets/css/style.css'
import dog from '../assets/img/dog.png'
import {NavLink} from 'react-router-dom'
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
      url:'/mock/reg',
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
    			<label><i>&#xe657;</i></label><input type="text" placeholder="请输入手机号" name="username" value={this.state.username} onChange={this.changeIpt}/> 
    		</div>
    		<div className="yhmm">
    			<label><i>&#xe66b;</i></label><input type="text" placeholder="请输入密码" name="password" value={this.state.password} onChange={this.changeIpt}/> 
    		</div>
    		<div className="wj">
    			<NavLink className="wjmm" to='login'>已有账号，点击登录</NavLink>
    		</div>
    		<div className="dl" >
    			<a className="tjan" onClick={this.submit}>注册</a>
    		</div>
    	</form>
    </div>
    )
  }
}
