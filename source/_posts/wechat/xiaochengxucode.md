---
title: 小程序的代码
date: 2016-10-11 19:39:36
categories:
- 框架+库
- 小程序
---

#### 1/10

1. navigator url 不能请求外部链接。。。。

2. showToast 没有失败的图标，只支持loading 和 success

3. 标签只能写在Wxml里，遍历数据出来的标签不被支持。

<!--more-->

#### 代码

- `app.js`  可以放置公共方法，其他组件引用的时候可以app.funName;

``` bash
//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  getDateDiff : function(dateTimeStamp){
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    if(diffValue < 0){return;}
    var monthC =diffValue/month;
    var weekC =diffValue/(7*day);
    var dayC =diffValue/day;
    var hourC =diffValue/hour;
    var minC =diffValue/minute;
    if(monthC>=1){
      result="" + parseInt(monthC) + "月前";
    }
    else if(weekC>=1){
      result="" + parseInt(weekC) + "周前";
    }
    else if(dayC>=1){
      result=""+ parseInt(dayC) +"天前";
    }
    else if(hourC>=1){
      result=""+ parseInt(hourC) +"小时前";
    }
    else if(minC>=1){
      result=""+ parseInt(minC) +"分钟前";
    }else
    result="刚刚";
    return result;
  },
  unicodeStr : function(can){
    var str = unescape(can.replace(/\u/g, "%u"));
    return str;
  },
  tihuan : function(canshu){
    var subStr=new RegExp('p>','g');
    var xinStr=canshu.replace(subStr,"text>");
    return xinStr;
  }
})
```
- `app.josn`  这里包含引用的页面 还有 导航栏目的图标

``` bash
{
  "pages":[
    "pages/index/index",
    "pages/index/details/details",
    "pages/index/lists/lists",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#158cc6",
    "navigationBarTitleText": "测试数据",
    "navigationBarTextStyle":"white",
    "enablePullDownRefresh":true
  },
  "tabBar": {
    "color": "#a0a0a0",
    "selectedColor": "#158cc6",
    "backgroundColor":"#fafafa",
    "borderStyle":"white",
    "list": [{
      "pagePath": "pages/index/index",
      "text": "资讯",
      "iconPath": "images/no2.png",
      "selectedIconPath": "images/no1.png"
    },{
      "pagePath": "pagePath",
      "text": "比赛",
      "iconPath": "images/no2.png",
      "selectedIconPath": "images/no1.png"
    },{
      "pagePath": "pagePath",
      "text": "数据",
      "iconPath": "images/no2.png",
      "selectedIconPath": "images/no1.png"
    },{
      "pagePath": "pagePath",
      "text": "其他",
      "iconPath": "images/no2.png",
      "selectedIconPath": "images/no1.png"
    }]
  },
  "networkTimeout": {
    "request": 5000,
    "connectSocket": 5000,
    "uploadFile": 5000,
    "downloadFile": 5000
  },
  "debug":true
}

```

这里是 pages 的层级结构
![](/assets/wechat/3.png)

- `index.wxml`  这里是页面的布局
- `index.js`  这里是页面的方法

``` bash
<!--index.wxml-->
<view wx:if="{{hasRefesh}}" style="display: flex;flex-direction: row;align-items: center;align-self: center;justify-content: center;">
      <icon type="waiting" size="25"/><text>刷新中...</text></view>
      <view wx:else  style="display:none" ><text></text></view>
<swiper indicator-dots="{{indicatorDots}}"
  autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}" circular="{{circular}}">
  <block wx:for="{{imgUrls}}">
    <swiper-item catchtap="swipeTo" id="{{index}}">
      <image src="{{item.uri}}" class="slide-image" />
        <View class="slide-text-wrap">
          <text class="slide-text">{{item.txt}}</text>
        </View>
    </swiper-item>
  </block>
</swiper>

<scroll-view  style="height: 800px" scroll-y="true" bindscrolltolower="lower">
<View wx:for-items="{{zixunList}}">
  <!--index默认为下标，item为每项-->
  <View class="zixunList-wrap" id="{{item.id}}" catchtap="listTo">
    <View class="zixunList-left">
      <image class="zixunList-left-thumb" src="{{item.member.avatar_mini}}"></image>
    </View>
    <View class="zixunList-middle">
      <View class="zixunList-middle-member">
          <text class="zixunList-middle-node-title">{{item.node.title}}</text>
          <text>·</text>
          <text class="zixunList-middle-node-username">{{item.member.username}}</text>
      </View>
      <View class="zixunList-middle-title">
          <text> {{item.title}}</text>
      </View>
      <View class="zixunList-middle-response">
          <text wx:if="{{item.replies == 0}}">暂无回复</text>
          <text wx:else >最新回复 ： {{item.chuo}}</text>
      </View>
    </View>
    <View class="zixunList-right">
      <text> {{item.replies}}</text>
    </View>
  </View>
</View>
</scroll-view>
```

``` bash
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [{
      uri:'http://cdn-s3.si.com/s3fs-public/2017/02/27/james-harden-dwight-howard.jpg',
      txt:'詹姆斯破茧重生',
      url:'http://bbs.hupu.com/18657042.html',
    },{
      uri:'https://c2.hoopchina.com.cn/uploads/star/event/images/170307/38d602e779e53d8b8bd05f88d76b8563316d6267.jpg',
      txt:'库班谈塞思-库里：我们希望他永远留在球队',
      url:'http://bbs.hupu.com/18658465-2.html',
    },{
      uri:'http://cdn.fansided.com/wp-content/uploads/usat-images/2016/04/9874357-nba-san-antonio-spurs-at-new-york-knicks-850x560.jpeg',
      txt:'卡梅罗-安东尼想赢下总冠军',
      url:'http://bbs.hupu.com/18626439.html',
    }],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    zixunList: [],
    hasRefesh:false,
    hasMore:true
  },
  swipeTo: function(res){
    wx.navigateTo({
      url: './details/details?id='+res.currentTarget.id,
    })
  },
  listTo:function(res){
    wx.navigateTo({
      url: './lists/lists?id='+res.currentTarget.id,
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: "https://www.v2ex.com/api/topics/latest.json",
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        if(res.statusCode == 200){
          for(var i in res.data){
            res.data[i].chuo = app.getDateDiff(res.data[i].last_touched*1000);
          }
          that.setData({
              zixunList:res.data
          })
        }else{
          wx.showModal({
            title: '提示',
            content: '数据加载失败，请稍后重试',
          })
        }
      }
    });
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onPullDownRefresh:function(){
    var qita = this;
        qita.setData({
          hasRefesh:true
        });
    wx.showNavigationBarLoading();
    wx.request({
      url: "https://www.v2ex.com/api/topics/hot.json",
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        if(res.statusCode == 200){
          for(var i in res.data){
            res.data[i].chuo = app.getDateDiff(res.data[i].last_touched*1000);
          }
          qita.setData({
              zixunList:res.data
          })
        }else{
          wx.showModal({
            title: '提示',
            content: '数据加载失败，请稍后重试',
          })
        }
      },
      complete:function(){
         wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
        qita.setData({
      hasRefesh:false
    });
      }
    })
  },
  lower:function(e){
    console.log(e);
  }
})
```
- `details.js`  这里仅仅传过来了id

``` bash
// pages/index/details/details.js
Page({
  data:{
    post:[]
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.showToast({  
        title: '加载中',  
        icon: 'loading',  
        duration: 1000 ,
        success : function(){
          that.setData({
            post:options.id
          })
        }
      })
  },
  onReady:function(){
    console.log(this.data.post)
    // 生命周期函数--监听页面初次渲染完成
    wx.setNavigationBarTitle({
      title: '标题ID为 :  '+this.data.post
    })
  }
})
```
- `lists`  详情

``` bash
<!--pages/index/lists/lists.wxml-->
<View wx:for-items="{{neirong}}">
    <View class="logo-area">Anthony</View>
    <View class="items-wrap">
        <View class="items-title">{{item.title}}</View>
        <View class="items-author">
            <text>By   </text>
            <text>{{item.member.username}}   </text>
            <text>at   </text>
            <text>{{item.chuo}}</text>
        </View>
        <View class="items-content">
            {{item.xincontent}}
        </View>
    </View>

    <view wx:if="{{pinglun.length == 0}}">
        <view class="items-nores" >
            <text>暂无回复。。。</text>
        </view>
    </view>
    <view wx:else class="pinglunList">
        <view wx:for="{{pinglun}}" class="pinglun-list-wrap">
            <View class="pinglun-left">
                    <image class="pinglun-left-thumb" src="{{item.member.avatar_mini}}"></image>
            </View>
            <View class="pinglun-middle">
                    <View class="pinglun-middle-member">
                        <text class="pinglun-middle-node-username">{{item.member.username}}   </text>
                         <text style="color:#ccc;font-size:12px;">{{item.chuo}}</text>
                    </View>
                    <View class="pinglun-middle-content">
                        <text> {{item.content}}</text>
                    </View>
            </View>
            <View class="pinglun-right">
                  <text class="pinglun-louceng"> {{index+1}}</text>
            </View>
        </view>
    </view>
</View>

```

``` bash
// pages/index/lists/lists.js
var app = getApp()
Page({
  data:{
      neirong:[],
      pinglun:[],
      biaoti:null,
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.showToast({  
        title: '加载中',  
        icon: 'loading',  
        duration: 1000 ,
        success : function(){
          //内容
          wx.request({
                  url: 'https://www.v2ex.com/api/topics/show.json?id='+options.id,
                  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                  // header: {}, // 设置请求的 header
                  success: function(res){
                    for(var i in res.data){
                        res.data[i].chuo = app.getDateDiff(res.data[i].created*1000);
                        res.data[i].xincontent = app.unicodeStr(res.data[i].content_rendered);
                        res.data[i].xincontent = app.tihuan(res.data[i].xincontent);
                        that.data.biaoti = res.data[i].title
                    }
                    // success
                     that.setData({
                      neirong:res.data,
                     })
                  }
                });
          //评论
          wx.request({
            url: 'https://www.v2ex.com/api/replies/show.json?topic_id='+options.id,
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
              // success
              if(res.data.length == 0){
                 that.setData({
                   pinglun:[]
                 })
              }else{
                for(var i in res.data){
                        res.data[i].chuo = app.getDateDiff(res.data[i].last_modified*1000);
                    }
                 that.setData({
                    pinglun:res.data
                 })
                 console.log(that.data.pinglun)
              }
            }
          });
        }
      })
  },
  onReady:function(){
    console.log(this.data.biaoti)
    // 页面渲染完成
    wx.setNavigationBarTitle({
      //bug?第一次为undefined
      //title: this.data.neirong[0].title
      title:this.data.biaoti
    })
  }
})
```

![](/assets/wechat/4.gif)
