---
title: swipe.js 滑动之后停止
date: 2016-11-01 20:15:59
categories:
- 【JS插件】
- swipe.js
---


### 问题描述：

swipe.js在手机端测试，滑动之后自动播放函数就会失效!

<!--more-->

### 解决方案：

修改源代码的stop函数,

``` bash
  function stop() {
    //delay = 0;
    delay = options.auto > 0 ? options.auto : 0;
    clearTimeout(interval);
  }
```
