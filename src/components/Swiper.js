import React,{Component} from "react";

import '../assets/css/swiper.min.css'
import $ from 'jquery';
import Swiper from '../library/swiper.min';
import '../assets/css/style.css'
import banner0 from '../assets/img/banner0.png'
import banner1 from '../assets/img/banner1.png'

class Swipercontainer extends Component {
  render(){
    return(
      <div className="swiper-container">
		        <div className="swiper-wrapper">
		        	<div className="swiper-slide"><img src={banner0}/></div>
		        	<div className="swiper-slide"><img src={banner1}/></div>
		        </div>
             </div> 
    )
  }
  componentDidMount(){
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween:0,
          loop: true,
          autoplay: 2500
            //autoplayDisableOnInteraction: false
      });
      $(function(){
          $(".swiper-container").height("200px");
          $(".tabs1>li").click(function(){
            var index=$(this).index();
            $(".tabs1>li").removeClass().eq(index).addClass("on");
            $(".content>li").hide().eq(index).show()
          })
    })
  }
}

export default Swipercontainer;