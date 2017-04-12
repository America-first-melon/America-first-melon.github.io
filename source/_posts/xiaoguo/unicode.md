---
title: unicode编码转换
date: 2016-10-10 15:35:10
categories:
- 前端
- 页面效果
---


#### 需求

如图：这是一个json数据，其中包含unicode编码

![](/assets/xiaoguo/5.jpg)


<!--more-->


#### 方法

1.` eval解析或new Function("'+ str +'")()`

``` bash
  str = eval("'" + str + "'");
```

2.`unescape 解析`

``` bash
  str = unescape(str.replace(/\u/g, "%u"));
```

![](/assets/xiaoguo/6.jpg)


可惜在小程序中是不识别的，转换成<text>标签也是不可以的，留存。


![](/assets/xiaoguo/7.jpg)

**OR**

![](/assets/xiaoguo/8.jpg)
