---
title: react-native-video Android 获取视频总时长
date: 2017-02-25 17:22:58
categories:
- 框架+库
- React Native
---


#### 介绍

在 npm install 之后, 在Android上面,只能获取到currentTime 和 缓存的Time,并没有包含总时长。
这样写进度条就不行了。

在IOS上开发详见：http://coding.imooc.com/learn/questiondetail/2076.html;

在Android上开发需要修改： \node_modules\react-native-video\android\src\main\java\com\brentvatne\react\ReactVideoView.java

<!--more-->


第一步：
![](/assets/rn/4.png)
第二步：
![](/assets/rn/5.png)
第三步：
![](/assets/rn/6.png)
然后：

``` bash
_onProgress = (data) => {
  console.log('_onProgress',data);
}

```
