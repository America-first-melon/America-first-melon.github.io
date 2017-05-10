---
title: 子->父传值
date: 2016-12-28 14:26:21
categories:
- 框架+库
- React Native
---

#### 介绍

父给子传值略过。。。

上代码：

<!--more-->


```bash
/**
*Sample React Native App
｡ 　　 ∧＿∧｡ﾟ
　ﾟ 　(ﾟ ´Д｀ﾟ)っﾟ
　　　(つ　　/
　　 　| （⌒）
　　　 し⌒
*@Anthony
*/
import React,{Component} from 'react';

import{
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ListView,
  Image,
} from 'react-native';

//引用头部
import Header from '../common/commonHeader';

import SubTabContent from './subTabContent';

//获取屏幕宽高
const {height} = Dimensions.get('window');
//获取json数据
var SubTabView = require('./studyView.json');
var SubTabViewData = SubTabView.lession;
var ItemArrLeft = [];
var ItemArrRight = [];
for(var i in SubTabViewData){
  ItemArrLeft.push(
    SubTabViewData[i].title
  );
  ItemArrRight.push(
    SubTabViewData[i].neirong
  );
}

//整个选项视图
class SubTab extends Component{
  constructor(props){
    super(props);
    this.state = {
      val:null,
    };
  }
  _getSubView(val){
    this.setState({
      val : val,
    })
   const { navigator } = this.props;
   if(navigator) {
       navigator.push({
           name: 'SubTabContent',
           component: SubTabContent,
           params:{
             val:val,
           }
       })
      }
  }
  render(){
    return(
      <View style={styles.container}>
        <Header title={'爸爸妈妈上课了'} />
        <Tab navs={ItemArrLeft} contents={ItemArrRight} onSelect={this._getSubView.bind(this)} />
      </View>
    );
  }
}
//自定义的选项Tab
var Tab = React.createClass({
    getInitialState : function() {
        return {
            index : 0,
        };
    },
    handleClick : function(index) {
        this.setState({
            index : index,
        })
    },
    render : function() {
        return (
          <View style={{flex: 1,flexDirection:'row'}}>
            <NavClass clk={this.handleClick} index={this.state.index} navs={this.props.navs} />
            <ContentsClass index={this.state.index} contents={this.props.contents} onSelect={this.props.onSelect} />
          </View>
      )
    }
});

//Tab左边侧栏目
class NavClass extends Component{
  render(){
    return(
        <View style={styles.subTab}>
          {this.props.navs.map(
            (ele,index)=>{
              let statedBg = {
                backgroundColor:  this.props.index == index ? '#fafafa' : 'transparent',
                zIndex:1
              }
              return(<TouchableOpacity activeOpacity={0.8} style={[styles.button,statedBg]} onPress={this.props.clk.bind(null,index)} key={index}><Text>{ele}</Text></TouchableOpacity>)
            }
          )
        }
          <View style={styles.line}></View>
        </View>
    );
  }
};
//Tab右边侧栏目
class ContentsClass extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
    this.state = {
      dataSource:ds,
      data:this.props.contents
    };
  }
  renderSubListWrap(rowData,sectionId,rowId){
    let specialLenth = this.props.contents.length-1;
    let tagBg = {
      backgroundColor:this.props.index == specialLenth ? 'red' : 'transparent',
    }
    let tagCol = {
      color:this.props.index == specialLenth ? '#fff' : 'transparent',
    }
    let specialDataLenth = this.state.data[specialLenth].length;
    let rowIdNew = Math.abs(rowId - specialDataLenth);

    return(
      <TouchableOpacity activeOpacity={0.8} style={styles.subListWrap} onPress={()=>{this.props.onSelect(rowData)}}>
        <Image style={styles.subListImg} resizeMode={Image.resizeMode.stretch} source={{uri: rowData.thumb}}/>
        <View style={styles.textView}>
          <Text>{rowData.title}</Text>
        </View>
        <View style={[styles.tagNum,tagBg]}>
            <Text style={tagCol}>{rowIdNew}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render(){
    let num = this.props.index;
    return(
      <View style={styles.subList}>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.state.data[num])}
          renderRow={this.renderSubListWrap.bind(this)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
};

//View样式
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  /*左侧按钮*/
  subTab:{
    flex: 1,
    backgroundColor:'#def4ff',
  },
  button:{
    height:50,
    borderBottomWidth:2,
    borderColor:'#dce3e9',
    justifyContent:'center',
    alignItems:'center',
  },
  line:{
    width:2,
    height,
    backgroundColor:'#dce3e9',
    position:'absolute',
    top:0,
    right:0,
    zIndex:0
  },
  /*右侧数据*/
  subList:{
    flex: 2,
  },
  subListWrap:{
    marginLeft:10,
    marginRight:10,
    marginTop:10,
  },
  subListImg:{
    height:80,
  },
  textView:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
    height:25,
  },
  tagNum:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:0,
    right:0,
    width:15,
    height:15,
  }
})

export default SubTab;

```

#139行 onPress={()=>{this.props.onSelect(rowData)}} 传给父级的onSelect
#91行  onSelect={this.props.onSelect} 传的父级的onSelect
#70行  onSelect={this._getSubView.bind(this)}
#51行  _getSubView的val就是rowData

[父组件不知道rowdata]  这样通过子组件传过来  
#56行  通过navigator传给第二级页面，二级页面可以获取传的值，这里是标题title


#### 未测

下面这个方法是偶然看见的，尚未测试。

![](/assets/rn/7.jpg)
