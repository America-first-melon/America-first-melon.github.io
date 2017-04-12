---
title: IOS下微信的遮罩
date: 2017-03-14 17:57:50
categories:
- 前端
- 兼容性
---

### 问题表述：

类同 另一栏目 [SUI 下的遮罩](https://america-first-melon.github.io/2016/11/11/SUI/overlay/)

发现在IOS微信浏览器下用`visibility: hidden;&opacity: 0;`点击之后并没有反应。。
Android下的微信正常打开。

<!--more-->


见网上说 opacity从0到1不支持是因为没有加浏览器前缀，可是本地代码早就有-webkit的。

所以就没有再深究下去，换`display:none;&display:block;`完事。
