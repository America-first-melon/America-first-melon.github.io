---
title: IE8 下的 RGBA 兼容问题
date: 2016-11-14 15:32:50
categories:
- 前端
- 兼容性
---

### 问题表述：

``` bash
background:rgba(0,0,0,.5);  /*支持rgba的浏览器*/
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#7f000000,endColorstr=#7f000000); /*IE8支持*/
```



下图为 rgba 和 IE filter 的转换

![](/assets/jianrong/ie8/6.png)


<!--more-->

#### 代码：

hack写法:
[不直接在样式里面添加filter,而是判断是否为ie添加filter]
[IE9同时支持RGBA和filter]

``` bash
<!--[if lt IE 9]>
    <style type="text/css"> 
        .color-block { 
               background:transparent; 
               filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#7f000000,endColorstr=#7f000000); 
               zoom: 1; 
         } 
    </style>
<![endif]-->
```

