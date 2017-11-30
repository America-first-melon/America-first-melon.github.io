---
title: P2.react监听scroll事件
date: 2017-07-30 19:55:42
categories:
- React.js
- canvas小项目
---

<!--more-->

#### scroll事件

componentDidMout添加了addEventListener，scroll获取不到this，如下：

如图：![](/assets/rj/6.png)

还是要bind(this)

如图：![](/assets/rj/7.png)

但还是找不到this.scroll

需要获得(e)=>{console.log(e.target)};

如图：![](/assets/rj/8.png)



