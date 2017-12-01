---
title: 洗牌函数
date: 2017-10-15 11:08:53
categories:
- 【常用总结】
- 如何数组洗牌
---

#### 睡眠排序

代码：

<!--more-->

```bash
//创造随机
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min+1) + min)
}
//输出
export function shuffle(arr){
    let _arr = arr.slice();     //防止对原arr破坏
    for(let i = 0 ; i < _arr.length ; i++){
        let j = getRandomInt(0,i);
        let t = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = t;
    }
    return _arr;
}

/*slice() 方法可从已有的数组中返回选定的元素。*/

```