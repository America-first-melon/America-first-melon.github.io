---
title: 背景色平滑变换
date: 2016-11-20 11:31:11
categories:
- 【页面效果】
- 背景色平滑变换
---

#### 效果如图：

![](/assets/xiaoguo/2.gif)


<!--more-->

#### 代码：

搜索框：
``` bash
  .trans {
    display: inline-block;
    padding: 1px 8px;
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.3s;
    -webkit-transition-timing-function: ease;
  }
  .trans:hover {
    background-color: #486AAA;
    color: #fff;
  }
  /*使用*/
  <a href="/" class="trans">经过我~~</a>
```
