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


export default class App extends Component{
    render(){
        return (
            <div>
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
              <Footer/>
            </div>
          );
    }   
}