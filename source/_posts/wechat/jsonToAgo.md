---
title: 根据json返回个几分钟前
date: 2016-10-09 17:37:28
categories:
- 框架+库
- 小程序
---


#### 步骤

用方法**wx.request** 请求一个 url 地址。
返回需要的json数据，如下图所示：

![](/assets/wechat/1.jpg)

<!--more-->


#### 代码

要点：先不去`setData`。在 `wx.ruquest`成功之后通过自定义的方法转换掉时间戳，再更新data.

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
  },
  swipeTo: function(res){
    wx.navigateTo({
      url: './details/details?id='+res.currentTarget.id,
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
  onLoad: function () {
    var that = this;
    wx.request({
      url: "https://www.v2ex.com/api/topics/latest.json",
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        for(var i in res.data){
          res.data[i].chuo = that.getDateDiff(res.data[i].last_modified*1000);
        }
        that.setData({
          zixunList:res.data
        })
      },
      fail: function() {
        // fail
        alert('稍后重试');
      }
    });
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
```

#### 效果

如下所示：
![](/assets/wechat/2.jpg)
