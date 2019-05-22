import React,{Component} from "react";
import  '../assets/css/base.css'
import style from '../assets/css/style.css'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'

import im1 from '../assets/img/im1.png'
import im2 from '../assets/img/im2.png'
import im3 from '../assets/img/im3.png'
import im4 from '../assets/img/im4.png'
import im5 from '../assets/img/im5.png'
import im6 from '../assets/img/im6.png'
import im7 from '../assets/img/im7.png'
import im8 from '../assets/img/im8.png'
import banner0 from '../assets/img/banner0.png'
import banner1 from '../assets/img/banner1.png'


export default class Home extends Component{
    render(){
		 let btnClass = "container pd";
		 let btnClass1="left_btn hide";
        return (
				<div className="top_fixed">
					<a href="javascript:window.history.go(-1)" className={btnClass1}><i>&#xe622;</i></a>
					<h1>宠尚门</h1>
					<a href="javascript:;" class="right_btns"><i>&#xe609;</i></a>
				</div>
				<div className={btnClass}>
					<div className="swiper-container">
						<div className="swiper-wrapper">
							<div className="swiper-slide"><img src={banner0}/></div>
						</div>
					</div> 
					
					<ul className="nine_grid">
						<li>
						<NavLink to="/home">
							<img src={im1}/>
							<p>洗澡</p>
						</NavLink>
						</li>
						<li>
							<NavLink to="/home">
								<img src={im2}/>
								<p>美容</p>
							</NavLink>
						</li>
						<li>
						<NavLink to="/home">
						<img src={im4}/>
						<p>特色服务</p>
							</NavLink>
						</li>
						<li>
						<NavLink to="/home">
						<img src={im6}/>
						<p>主粮精选</p>
							</NavLink>
						</li>
						<li>
						<NavLink to="/home">
						<img src={im5}/>
						<p>美味零食</p>
							</NavLink>
						</li>
						<li>
						<NavLink to="/home">
							<img src={im3}/>
							<p>牵引绳</p>
							</NavLink>
						</li>
						<li>
						<NavLink to="/home">
						<img src={im7}/>
						<p>冬季潮流</p>
							</NavLink>
						</li>
						<li>
						<NavLink to="/home">
							<img src={im8}/>
							<p>清洁护理</p>
							</NavLink>
						</li>						
					</ul>
				
					<ul className="tabs1">
						<li className="on"><a href="javascript:;">特色服务</a></li>
						<li><NavLink to='recom'><a href="javascript:;">推荐医院</a></NavLink></li>
						<li><NavLink to='ency'><a href="javascript:;">宠物百科</a></NavLink></li>
					</ul>
				</div>
		);
        }
    }