import React,{Component} from "react";
import  '../assets/css/base.css'
import  '../assets/css/style.css'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Swiper from '../components/Swiper'
import $ from 'jquery'

import im1 from '../assets/img/im1.png'
import im2 from '../assets/img/im2.png'
import im3 from '../assets/img/im3.png'
import im4 from '../assets/img/im4.png'
import im5 from '../assets/img/im5.png'
import im6 from '../assets/img/im6.png'
import im7 from '../assets/img/im7.png'
import im8 from '../assets/img/im8.png'

import connect from "react-redux/es/connect/connect";
import {action1} from '../store/actions';
class Home extends Component{
	constructor(props){
	super();
	//读取数据
	props.get({url: '/mock/home',params:{_limit:10},typename: 'UPDATE_HOME'});
	props.get({url: '/mock/recom',params:{_limit:20},typename: 'UPDATE_RECOM'});
	}
    render(){
		 let btnClass = "container pd";
		 let btnClass1="left_btn hide";
        return (
			<div className='wrap'>
				<div className="top_fixed">
					<a href="javascript:window.history.go(-1)" className={btnClass1}><i>&#xe622;</i></a>
					<h1>宠尚门</h1>
					<a href="javascript:;" className="right_btns"><i>&#xe609;</i></a>
				</div>
				<div className={btnClass}>
					<Swiper/>
					
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
						<li className="on"><a href='#'>特色服务</a></li>
						<li><a href='#'>推荐医院</a></li>
						<li><a href='#'>宠物百科</a></li>
					</ul>
					<ul className="content">
						<li>
							<ul className="service_list">
							{this.props.home.map(item =>(
								<li key={item.id}>
								<Link 
									to={{
										pathname:'/proservice/'+item.id,
										search:"?dataName=" + 'home'

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
							))}
							</ul>
						</li>

						<li style={{display:'none'}}>
							<ul className="service_list">
							{
								this.props.recom.map(items =>(
									<li key={items.id}>
									<Link 
									to={{
										pathname:'/article/'+items.id,
										search:"?dataName=" + 'home'

									}}
								>
											<img src={items.img} />
											<div>
												<h3>{items.title}</h3>
												<p className="service_time">地址:<span>{items.address}</span></p>
												<p className="service_price">距离:<span>{items.distance}KM</span></p>
											</div>
									</Link>
									</li>
								))
							}
							</ul>
						</li>

						<li style={{display:'none'}}>
							<ul className="service_list">
                            <li>宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科宠物百科</li>	
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
		}
		
		async componentDidMount(){
			$(".tabs li").click(function(){
                var index=$(this).index();
                $(".tabs li").removeClass().eq(index).addClass("on");
                $(".content li").hide().eq(index).show()
            })
		}
}

const initMapStateToProps=state=>({
	home:state.home,
	recom:state.recom
  });
  
  const initMapDispatchToProps=dispatch=>({
	get:({url,params,typename})=>dispatch(action1({
	  dispatch,url,params,typename
	}))
  });
  
  export default connect(
	initMapStateToProps,
	initMapDispatchToProps
  )(Home)