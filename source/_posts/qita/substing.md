---
title: substring截取
date: 2016-11-14 17:56:46
categories:
- 前端
- 其他（原生？）
---

#### 一

`substring()` 方法用于提取字符串中介于两个指定下标之间的字符

例如： $('.title').html() --> '如何培养小学生之我的笔记'；

<!--more-->

```bash
var s = $('.title').html();
s.substring(0,s.indexOf('之'))；   //获取前面的
s.substring(s.indexOf('之')+1,s.length);    //获取后面的﻿​

```


#### 二

只截取图中所示内容：
![](/assets/qita/1.png)

```bash
arr[i].split('/').pop().split('.')[0]
```

解释：
split,用于把一个字符串分割成字符串数组
pop,用于删除并返回数组的最后一个元素
