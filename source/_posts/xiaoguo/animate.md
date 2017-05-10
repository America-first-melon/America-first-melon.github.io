---
title: 链接至锚点[平滑滚动]
date: 2016-11-17 18:45:06
categories:
- 前端
- 页面效果
---


#### 代码：

搜索框：
``` bash
 $('.column').click(function () {
     $('html, body').animate({
         scrollTop:$($(this).attr('href')).offset().top
     }, 500);
     return false;
 });
```
