---
title: label>input结构触发两次
date: 2016-11-25 14:22:54
categories:
- js库
- jQuery+L7
---


### 框架结构

``` bash
<label class="label-checkbox item-content new-add">
    <input type="radio" name="action">
    <div class="item-media">
        <i class="icon icon-form-checkbox"></i>
    </div>
    <div class="item-inner item-inner-pad">
        <div class="item-title color-333">新增</div>
    </div>
</label>
<label class="label-checkbox item-content connect">
    <input type="radio" name="action">
    <div class="item-media">
        <i class="icon icon-form-checkbox"></i>
    </div>
    <div class="item-inner item-inner-pad">
        <div class="item-title color-333">关联</div>
    </div>
</label>
```
<!--more-->

``` bash
$(document).on('click', '.connect', function(e) {
    if($(e.target).is("input")) return;
    console.log('新增1')
});
$(document).on('click', '.new-add', function() {
    console.log('添加1')
});
```

### 触发多次
![](/assets/l7/1.png)

### 分析
w3school 给出的结构是这样的，通过for去关联。
``` bash
<form>
  <label for="male">Male</label>
  <input type="radio" name="sex" id="male" />
  <br />
  <label for="female">Female</label>
  <input type="radio" name="sex" id="female" />
</form>﻿​
```

target 事件属性可返回事件的目标节点（触发该事件的节点）。

所以在点击事件加上 ` if($(e.target).is("input")) return;`解决。


补充：
判断 单选框 是否被选中
` if($("input[name=radioName]:checked").size()!=0) ` 就被选中了。
` size()` 表示被选择器选中的数量。
