---
title: 链接平滑滚动至锚点
date: 2016-11-17 18:45:06
categories:
- 页面效果
- 链接平滑滚动到锚点
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
