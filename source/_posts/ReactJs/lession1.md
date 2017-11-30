---
title: 基本说明
date: 2016-10-08 10:58:21
categories:
- React.js
- L1:基本说明
---


#### 上代码

修改的是 `src/index.js` 

<!--more-->

```javascript

import React , {Component}from 'react';
//从react的包中引入React 和 React.js的组件父类 [只要写组件，这个引用就是必须的]
import ReactDOM from 'react-dom';
//把React组件渲染到页面中
import App from './App';
import './index.css';

//JSX --> 用js的对象表示HTML结构。因为HTML信息可以用合法的js对象表示。
//return的时候就会编译成React.creatElement;[这就是编译。所以JSX就是JS对象]

class Header extends Component {
  renderWord(m,n){
    const flag = true;
    return flag ? m : n;
  }
render(){
  //class关键字在这里应该是className；[还有一个是for属性，如<lable for='male'>Male</lable>，这里用htmlFor替代]
  const className = 'header';
  const isGoodWord = true;
  return(
    <div className = {className}>
      <h1>涛涛的长河中{
            (function(){
              return ('--韩')
            })()
      }</h1>
      
      <h2>
        再试试
        {
          isGoodWord ? <strong>true</strong> : <span>false</span> //如果三元判断：后是个null 就什么都不显示
        }
      </h2>
      
      
      <h3>
        继续
        {
          this.renderWord(<strong>true</strong> ,<span>false</span>)
        }
      </h3>
    </div>
   )
  }
 }

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);


```
