---
title: CSS3动画在手机浏览器或者微信浏览器里不显示
date: 2016-11-11 20:24:01
categories:
- 前端
- 兼容性
---

### 问题表述

如图所示效果，只在电脑端显示正常，
传到服务器上就完啦。。。

![](/assets/sui/1.gif)

<!--more-->

### 原因

[需要在@keyframes加前缀，另外在动画里面的属性如transform也要加前缀]--[粗心]


``` bash
@keyframes scaleout {
   0% {
       transform: scale(1.0);
   }
   100% {
       transform: scale(1.1);
   }
}
@-moz-keyframes scaleout {
   0% {
       -moz-transform: scale(1.0);
   }
   100% {
       -moz-transform: scale(1.1);
   }
}
@-webkit-keyframes scaleout {
   0% {
       -webkit-transform: scale(1.0);
   }
   100% {
       -webkit-transform: scale(1.1);
   }
}
@-o-keyframes scaleout {
   0% {
       -o-transform: scale(1.0);
   }
   100% {
       -o-transform: scale(1.1);
   }
}
.circle1 {
   /*画出圆圈*/
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: transparent;
   border-radius: 50%;
   border: 5px solid rgba(255, 255, 255, 0.5);
   animation: scaleout 1.3s infinite ease-in-out;
   -moz-animation: scaleout 1.3s infinite ease-in-out;
   -webkit-animation: scaleout 1.3s infinite ease-in-out;
   -o-animation: scaleout 1.3s infinite ease-in-out;
}
```
