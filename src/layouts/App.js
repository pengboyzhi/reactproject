import React,{Component} from "react";
import  '../assets/css/base.css'
import '../assets/css/style.css'
import Footer from './Footer'
import AuthRoute from '../guard/Auth'

import { Switch, Route, Redirect} from 'react-router-dom'
import Home from "../pages/Home";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import Service from "../pages/Service"
import Prodetail from '../pages/Prodetail'
import Proservice from '../pages/Proservice'
import Article from '../pages/Article'
import propTypes from 'prop-types'
import Loading from '../layouts/Loading'
import {action1} from "../store/actions";
import connect from "react-redux/es/connect/connect";
class App extends Component{
  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname;
    this.checkRoute(path);
  }
  componentDidMount(){
    let path = this.props.location.pathname;
    this.checkRoute(path);
  }

  checkRoute = (path) => {
    let {viewFoot} = this.props;
    if (/home/.test(path)){
    viewFoot(true);
    }
    if (/login|reg|proservice/.test(path)){
      viewFoot(false);
    }
    if (/user/.test(path)){
     viewFoot(true);
    }
  };
    render(){
      let {bLoad,bFoot} =this.props;
        return (
            <div>
            {bLoad && <Loading/>}
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/reg" component={Reg}/>
                <Route path="/detail" component={Detail}/>
                <Route path="/service" component={Service}/>
                <Route path="/article/:id" component={Article}/>
                <Route path="/prodetail/:id" component={Prodetail}/>
                <Route path="/proservice/:id" component={Proservice}/>
                <AuthRoute path="/user" component={User}/>
                <Redirect exact from="/" to="/home"/>
                <Route component={Error}/>
              </Switch>
              {bFoot && <Footer {...this.props} />}
            </div>
          );
    }   
}

const initMapStateToProps=state=>({
  bFoot:state.bFoot,
  bLoading:state.bLoading,
});

const initMapDispatchToProps=dispatch=>({
  viewFoot:(bl)=>dispatch({type:'VIEW_FOOT',payload:bl}),
  viewLoading:(bl)=>dispatch({type:'VIEW_LOADING',payload:bl}),
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App)