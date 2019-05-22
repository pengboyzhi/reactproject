import React from 'react';
import ReactDom from 'react-dom';

import '../src/assets/css/base.css';//基础样式引入
// import 'library/font';

import App from '../src/layouts/App'

import {BrowserRouter} from 'react-router-dom'

ReactDom.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ,
  document.querySelector('#root')
);