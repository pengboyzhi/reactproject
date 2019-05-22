import React,{Component} from "react";
import  '../assets/css/base.css'
import '../assets/css/style.css'

export default class Home extends Component{
    render(){
		 let btnClass = "container pd";
		 let btnClass1="left_btn hide";
        return (
			<div className='wrap'>
				<div className="top_fixed">
					<a href="javascript:window.history.back()" className={btnClass1}><i>&#xe622;</i></a>
					<h1>宠尚门</h1>
					<a href="javascript:;" class="right_btns"><i>&#xe609;</i></a>
				</div>
				<div className={btnClass}>
					<div className="swiper-container">
						<div className="swiper-wrapper">
							<div className="swiper-slide"><img src="img/banner0.png"/></div>
							<div className="swiper-slide"><img src="img/banner1.png"/></div>
						</div>
					</div> 
					
					<ul className="nine_grid">
						<li>
							<a href="sjavascript:;">
								<img src="img/im1.png"/>
								<p>洗澡</p>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<img src="img/im2.png"/>
								<p>美容</p>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<img src="img/im4.png"/>
								<p>特色服务</p>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<img src="img/im6.png"/>
								<p>主粮精选</p>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<img src="img/im5.png"/>
								<p>美味零食</p>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<img src="img/im3.png"/>
								<p>牵引绳</p>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<img src="img/im7.png"/>
								<p>冬季潮流</p>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<img src="img/im8.png"/>
								<p>清洁护理</p>
							</a>
						</li>
						<li className="hide">
							<a href="javascript:;">
								<img src="img/im9.png"/>
								<p>自定义类别</p>
							</a>
						</li>
					</ul>
				
				<ul className="tabs1">
						<li><a href="javascript:;">特色服务</a></li>
						<li  className="on"><a href="javascript:;">推荐医院</a></li>
						<li><a href="javascript:;">宠物百科</a></li>
                    </ul>
                    <ul className="service_list">
							<li>
								<a href="javascript:;">
									<img src="img/yy1.png" />
									<div>
										<h3>医院名称</h3>
										<p className="service_time">地址:<span>武汉市洪山区关山街155号</span></p>
										<p className="service_price">距离:<span>3KM</span></p>
									</div>
								</a>
							</li>
							<li>
								<a href="javascript:;">
									<img src="img/yy2.png" />
									<div>
										<h3>医院名称</h3>
										<p className="service_time">地址:<span>武汉市洪山区关山街155号</span></p>
										<p className="service_price">距离:<span>3KM</span></p>
									</div>
								</a>
							</li>
							</ul>
					</div>
				</div>
		);
    }
}