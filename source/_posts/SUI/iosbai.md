---
title: SUI打包WEBAPP后IOS的position:fixed 白屏
date: 2016-11-12 18:24:02
categories:
- js库
- jQuery+SUI
---

#### 表述

主要是IOS有这问题
![](/assets/sui/9.jpg)
部分Android也有这问题
![](/assets/sui/10.jpg)

#### 解决

解决方法:absolute模拟fixed效果.

上代码：

```bash
body {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;}
fixed{
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    background: #def4ff;
}

```
或者html/body设置100%

```bash
html { height:100%; overflow:hidden;}
body { height:100%; overflow:hidden;}
.fixed { position:absolute; top:10px; left:10px; width:200px; height:350px; background:#fc0; }
.wrapper { height:100%; overflow:auto;}
<html>
    <body>
        <div class="fixed">左边无论怎么滚动这个窗口它都不会动的</div>
        <div class="wrapper">
    </body>
</html>

```

**其他：**

另外：官方的issues也有类似的解决方案
[如果是ios,则使用position:sticky来布局](https://github.com/sdc-alibaba/SUI-Mobile/issues/688﻿)
