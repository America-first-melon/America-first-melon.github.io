---
title: tab-navigator
date: 2017-02-25 14:31:29
categories:
- 【React Native】
- tab-navigator
---


#### 介绍

**option只是传入的一个数组，而contentVIew是个组件,所以可以这样写标签 <options.contentView/> **

<!--more-->


```bash
import React,{Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Tab_Home from './tab_home';
import Tab_Suggest from './tab_suggest';
import Tab_Mine from './tab_mine';
import Tab_Find from './tab_find';


const TAB_ITEM = [{
  code:'Home',
  name:'首页',
  icon_n:require('./images/tab/tab_messagecenter_n.png'),
  icon_p:require('./images/tab/tab_messagecenter_p.png'),
  contentView: Tab_Home
},{
  code : 'Suggest',
	name : '推荐',
	icon_n : require('./images/tab/tab_contact_n.png'),
	icon_p : require('./images/tab/tab_contact_p.png'),
	contentView: Tab_Suggest
},{
	code : 'Find',
	name : '发现',
	icon_n : require('./images/tab/tab_discovery_n.png'),
	icon_p : require('./images/tab/tab_discovery_p.png'),
	contentView: Tab_Find
},{
	code : 'Mine',
	name : '我的',
	icon_n : require('./images/tab/tab_myself_n.png'),
	icon_p : require('./images/tab/tab_myself_p.png'),
	contentView: Tab_Mine
}];

class Tab extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:TAB_ITEM,
      selectedTab:TAB_ITEM[0].code
    }
  }
  _onpress(tabCode){
    this.setState({
      selectedTab:tabCode
    })
  }
  _renderTabView(options){
    let tabNomal = options.icon_n;
		let tabPress = options.icon_p;
    return(
      }
				renderSelectedIcon={()=>}
        onPress={this._onpress.bind(this,options.code)}
      >
    )
  }
  render(){
    let items = [];
    for(var i = 0; i < this.state.item.length; i++){
      items.push(this._renderTabView(this.state.item[i]))
    }
    return(
					{items}
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tab:{
    height: 55,
    alignItems:'center',
    backgroundColor:'#f4f5f6',
  },
  tabIcon:{
    width:25,
    height:25,
  },
  badgeView:{
    width:22,
    height:14 ,
    backgroundColor:'#f85959',
    borderWidth:1,
    marginLeft:10,
    marginTop:3,
    borderColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },
  badgeText:{
    color:'#fff',
    fontSize:8,
  }
});

export default Tab;

```
