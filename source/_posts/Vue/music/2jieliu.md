---
title: P2:$watch进阶实现input输入节流
date: 2017-10-01 20:08:16
categories:
- 【VUE】
- 常用技巧
---


#### 介绍

例：

<!--more-->

```bash

function jieliu(func,delay){
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}

//延时执行

created(){
    data(){
        return{
            query:''    //输入框内容
        }
    },
    this.$watch('query',jieliu((newQuery)=>{
        //每次输入都会去请求搜索接口。。
        this.$emit('query',newQuery)
        //暴露给父组件，输入的字符为何，做另外的处理
    },200))
}

```



