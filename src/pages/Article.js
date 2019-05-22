import React,{Component} from "react";
import  '../assets/css/base.css'
import '../assets/css/style.css'
import empty from '../assets/img/empty.png'

class Proservice extends Component {
  render() {
    return (
        <div className="wrap">
	    <div className="top_fixed">
	    	<a href="javascript:window.history.back()" className="left_btn"><i>&#xe622;</i></a>
	    	<h1>单页模板</h1>
	    	<a href="javascript:;" className="right_btn hide">预约</a>
	    </div>
	    
	  
	    
	    <div className="container">
			 <div className="art">
				<p className="empty"><img src={empty}/></p>
			  </div>
	    </div>

</div>
    )
    }
}
export default Proservice;