import React from 'react';
import ReactDom from 'react-dom';

import '../src/assets/css/base.css';//基础样式引入
// import 'library/font';

import App from '../src/layouts/App'

import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from "./store";

let  local = JSON.parse(localStorage.getItem('rc_user'));
local && store.dispatch({type:'UPDATE_USER',payload:local})

ReactDom.render(
  <Provider store={store}>
  <BrowserRouter>
    <Route component={App}/>
  </BrowserRouter>
</Provider>
  ,
  document.querySelector('#root')
);