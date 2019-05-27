import React, { Component } from 'react';
import style from '../assets/css/Footer.css'
import '../assets/css/base.css'
import {NavLink} from 'react-router-dom'


export default class Footer extends Component {
    render() {
      return (
        <div className="footer">
        <ul>
            <li><NavLink to="/home" activeClassName={style.active}><p><i>&#xe61d;</i></p><h4>宠尚门</h4></NavLink></li>
            <li><NavLink to="/detail" activeClassName={style.active}><p><i>&#xe61d;</i></p><h4>商品</h4></NavLink></li>
            <li><NavLink to="/service" activeClassName={style.active}><p><i>&#xe61d;</i></p><h4>服务</h4></NavLink></li>
            <li><NavLink to="/user" activeClassName={style.active}><p><i>&#xe61d;</i></p><h4>个人中心</h4></NavLink></li>
        </ul>
    </div>
        // <div className={style['foot-btn']}>
        //   <ul>
        //     <li className={style.home}>
        //       <NavLink to="/home" />
        //     </li>
        //     <li className={style.write}>
        //       <NavLink to="/shopcart"/>
        //     </li>
        //     <li className={style.my}>
        //       <NavLink to="/user"/>
        //     </li>
        //   </ul>
        // </div>
      );
    }
  }