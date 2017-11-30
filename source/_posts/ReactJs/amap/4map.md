---
title: P3:map进阶
date: 2017-11-01 21:18:26
categories:
- 【React.js】
- AMap公众号
---

<!--more-->

#### 问题

在后台返回的一个对象里面需要增加自己所需的某个字段

例：

```bash

let {talentOrderList}  = res ;      //res解构，包含talentOrderList字段，type=Array

this.needList = talentOrderList.map(order => {
    //增加所需字段
    order.needCode1 = order.code == 1 && '等于1'
    order.needCode2 = order.code == 1 ? '等于1' : order.other == 0 ? '等于0' : '其他'
    return order;
})

```


