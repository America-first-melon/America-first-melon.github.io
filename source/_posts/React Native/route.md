---
title: 首页路由
date: 2016-12-20 14:25:16
categories:
- 【React Native】
- 一种首页路由
---


#### 介绍

其他组件需要的时候直接 `route={this.props.route} navigator={this.props.navigator}`

<!--more-->


有其他按钮跳转的时候,像listview需要传值
`onPress={this._pressRow.bind(this,rowData)}`
这个时候就需要
```bash
_pressRow(info){
  this.props.navigator.push({
      name:'详情',
      component:List_Detail,
      params:{
        info:info
      }
    })
}
```
获取的时候：
`{this.props.route.params.info}`

下面是首页路由：

```bash
/*index.android.js*/

/**
*页面路由
*/

import React , {Component} from 'react';
import {
  AppRegistry,
  BackAndroid,
  Navigator,
} from 'react-native';


import Home from './src/components/home/home';
var _navigator;

class Routes extends Component{
  configureScene(){
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route,navigator){
    _navigator = navigator;
    let Component = route.component;
    return <Component route={route} navigator={navigator} />
  }

  render(){
    return(
      <Navigator
          initialRoute={{name:'主页',component:Home}}
          configureScene={this.configureScene.bind(this)}
          renderScene={this.renderScene.bind(this)}
      />
    )
  }
}

//监听硬件的back键操作
BackAndroid.addEventListener('hardwareBackPress', function() {
	if(_navigator == null){
		return false;
	}
	if(_navigator.getCurrentRoutes().length === 1){
		return false;
	}
	_navigator.pop();
	return true;
})

AppRegistry.registerComponent('fanrenjiajiao', () => Routes);

```
