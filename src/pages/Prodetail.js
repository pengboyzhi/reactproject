import React,{Component} from "react";
import  '../assets/css/base.css'
import '../assets/css/style.css'
import banner0 from '../assets/img/banner0.png'
import banner1 from '../assets/img/banner1.png'

import axios from 'axios';
import $ from 'jquery'

class Prodetail extends Component {
	state={
		detailDate:{},
		num:1
	}
	jian(){
		this.setState({
			num:this.state.num - 1
		})
	}
	jia(){
		this.setState({
			num:this.state.num + 1
		})
	}
  render() {
	let date =this.state.detailDate;
    return (
        <div className="wrap">
	    <div className="top_fixed">
	    	<a href="javascript:window.history.back()" className="left_btn"><i>&#xe622;</i></a>
	    	<h1>产品详情</h1>
	    	<a href="shopcar.html" className="right_btns"><i>&#xe609;</i><span>0</span></a>
	    </div>
	    <div className="footer">
      	   <a className="next" href="javascript:;">加入购物车</a>
        </div>
	    
	    <div className="container">
	    <div className="swiper-container">
	        <div className="swiper-wrapper">
	            <div className="swiper-slide"><img src={banner0}/></div>
	        </div>
        </div>
        
        <div className="pro_detail">

         <ul className="detail_list">
         	<h2>{date.title}</h2>
         	<li><span>单价:</span><a>{date.price}</a>元</li>
         	<li><span>数量:</span><input type="button" defaultValue="-" onClick={this.jian.bind(this)}/><input type="number" value={this.state.num} id="num" onChange={()=>{}}/><input type="button" defaultValue="+" onClick={this.jia.bind(this)}/></li>
         </ul>
         
         <h3>商品介绍</h3>
         <div className="details">
         	<img src={date.detail && date.detail.img1}/>
         </div>
         </div>
		</div>
		<div className="footer">
      	   <a className="next" href="javascript:;">加入购物车</a>
        </div>
   </div>
    )
	}
	async componentDidMount(){
		let id = this.props.match.params.id;
        let res = await axios({url:`/mock/detail/${id}`});
		this.setState({detailDate:res.data.page_data})
		
	}
	
}
export default Prodetail;