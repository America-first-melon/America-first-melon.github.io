---
title: map进阶
date: 2017-11-01 21:18:26
categories:
- 【ES6】
- map进阶使用
---


#### 问题

在后台返回的一个对象里面需要增加自己所需的某个字段

<!--more-->

例：

```bash

let {talentOrderList}  = res ;      //res解构，包含talentOrderList字段，type=Array

this.needList = talentOrderList.map(order => {
        //增加所需字段
        order.needCode1 = order.code == 1 && '等于1'
        order.needCode2 = order.code == 1 ? '等于1' : order.other == 0 ? '等于0' : '其他'
        return order;
})

//也可以

talentOrderList = talentOrderList.map(order=>{
         return new Order(order)
         //new Order 是一个构造类，可以对order进行另外的处理
})

```


