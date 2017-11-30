---
title: 呼吸灯
date: 2016-11-08 20:27:28
categories:
- 页面效果
- 呼吸灯
---


#### 效果如图：

![](/assets/xiaoguo/4.gif)


<!--more-->


#### 代码：

搜索框：
``` bash
  @-webkit-keyframes greenPulse {
      from { background-color: #749a02; -webkit-box-shadow: 0 0 9px #333; }
      50% { background-color: #91bd09; -webkit-box-shadow: 0 0 18px #91bd09; }
      to { background-color: #749a02; -webkit-box-shadow: 0 0 9px #333; }
  }
  #element{
    -webkit-animation-name: greenPulse;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
  }
```
