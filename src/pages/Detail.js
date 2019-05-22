import React,{Component} from "react";
import  '../assets/css/base.css'
import '../assets/css/style.css'
import {Link} from 'react-router-dom'

import axios from 'axios';

class Detail extends Component {
	state={
		detailDate:[]
	}
  render() {
	let btnClass = "container pd";
	let btnClass1="left_btn hide";
    return (
      <div className="wrap">
      <div className="top_fixed">
      <a href="javascript:window.history.back()" className={btnClass1}><i>&#xe622;</i></a>
      <h1>全部商品</h1>
      <a href="javascript:;" className="right_btn">筛选</a>
    </div>
    <div className={btnClass}>
				 <ul className="pro_list clearfix">
				 {
					 this.state.detailDate.map(item => (
						<li key={item.id}>
							<Link
								to={{
									pathname:'/prodetail/'+item.id
								}}
							>
								<div className="img">
									<img src={item.image}/>
									<h3>{item.title}</h3>
								</div>
								<p>售价：<span>{item.price}元</span></p>
								</Link>
						</li>
					 ))
				 }
	        </ul>   	
       </div>
	    <div className="zzc"></div>
	    <div className="zj_list">
		    <h4>选择筛选条件</h4>
		    <ul>
		    	<li>全部商品</li>
		    	<li>主粮精选</li>
		    	<li>美味零食</li>
		    	<li>牵引绳</li>
		    	<li>冬季潮流</li>
		    	<li>清洁护理</li>
		    </ul>
		    <p>取消</p>
      </div>
      </div>
    )
	}
	async componentDidMount(){
		let resDetail = await axios({url:'/mock/detail',params:{_limit:20}});
		this.setState({detailDate:resDetail.data.page_data})
		
	}
}
export default Detail;