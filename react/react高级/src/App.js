import './App.css';
import { useState, Component, useEffect } from 'react';
// import Effects from './adv/use/effects';
import Line from './adv/Line';
import Expose from './adv/use/Expose';
import Reducer from './adv/use/Reducer';
import Func from './adv/hoc/Func';
import Class from './adv/hoc/Class';
import Auth from './adv/hoc/Auth';
import Renderr from './adv/hocExtend/renderr';
import Dom from './adv/hocExtend/dom';
import Callback from './adv/use/Callback';
// 函数组件
function App() {
  return <div>
    {/* <Effects /> */}
    <Line  />
    <Expose />
    <Line />
    <Reducer />
    <Line />
    HOC
    <Line />
    <Auth />
    <Line />
    <Func />

    <Renderr />
    <Dom />
    <Line />
    <Callback />
  </div>
}

export default App;




