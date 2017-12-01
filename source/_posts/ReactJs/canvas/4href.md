---
title: P4.reactjs下modal跳转
date: 2017-07-30 19:55:39
categories:
- 【React.js】
- canvas小项目
---


#### react-route的modal/index跳转

index与modal多次跳转，componentWillUpdate会被多次触发，点击事件也触发该事件。

<!--more-->

但路由跳转只触发了componentWillReceiveProps

如图：![](/assets/rj/10.png)
如图：![](/assets/rj/11.png)

<b>react-router4的各种关键都在this.props里面的match/location/history里面，需要多研究文档里面这三个的用法</b>


