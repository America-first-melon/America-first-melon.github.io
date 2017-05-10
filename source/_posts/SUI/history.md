---
title: WEBAPP中history.back()返回没有效果
date: 2016-11-11 21:35:40
categories:
- js库
- jQuery+zepto+SUI
---


#### 表述

在谷歌浏览器模拟页面用的返回方式：

```bash
<a class="icon frjj_font pull-left" href="#" onclick="window.history.go(-1);"></a>
<a class="icon frjj_font pull-left" href="<?php echo $back_url;?>"></a>﻿​

```
<!--more-->

javascript中后退的写法： `history.back()`或者`history.go(-1)`.例如：`onClick="javascript :history.back(-1);"`

FireFox:
只需要改成如下方式 : `<a href="#" onclick="window.history.back()">返回</a>；`

Chrome：
sosososos： <a href="#" onclick="window.history.back(); return false;">返回</a>；

测试后退功能正常，
嵌套到手机的APP里面之后，后退失效。。。

#### 原因

对于Chrome来说，首先执行window.history.back()，执行完成之后再接着执行href="#"，所以无法返回。

正确代码：
```bash
<a class="icon frjj_font pull-left" onClick="javascript :window.history.go(-1); return false;"></a>
```
