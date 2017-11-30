---
title: SUI翻页之后不加载CSS/JS
date: 2016-11-11 20:30:58
categories:
- 【JS库】
- jQuery+SUI
---

### 问题描述

这个问题是写这个框架碰见最棘手的问题，其实明白原理之后，你会觉得你很**

如图所示：
点击返回，或者点击a链接，并没有加载css、js

![](/assets/sui/2.gif)

<!--more-->

而去查看network，并没有看到什么。。

![](/assets/sui/3.png)

#### 解决

一开始的时候并没有解决这个问题，
只是去禁用了路由功能，这样看起来也不像个APP了。。。
[Router默认开启，会自动拦截所有链接的Touch行为，如果希望一个链接走浏览器原生跳转而不使用router，可以在链接上增加 class="external" 或者自定义属性,如 <a href="xxx" external>xxx</a>];


后续使用中发现和排版是有关系的，
- **style样式代码需要放在`content`里面,[否则不加载]**
- **jq需要引用在head的最下面,[否则$.alert报错]**
- **计时函数的话就禁用这个页面的路由吧，因为总是叠加，会越来越快**

原理：路由的原理，a页面跳转到b页面，b的div:page放置在a的div:page之下,所以两个页面需要的css和js都要写到一起，或者说写在第一个页面；
     js引用最开始都要初始化页面。还有最后加上init(),需要路由的页面综合写到一个js里面

如下图：
![](/assets/sui/4.png)

#### 解决2

这个是位仁兄给的，可以参考。
![](/assets/sui/5.png)
![](/assets/sui/5.png)
![](/assets/sui/7.png)
![](/assets/sui/8.png)
