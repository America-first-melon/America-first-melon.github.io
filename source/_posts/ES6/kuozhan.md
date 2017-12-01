---
title: 扩展运算符
date: 2017-11-01 21:18:28
categories:
- 【ES6】
- ...扩展运算符
---

#### 例1

```bash
var str = '1234';
var arr5 = [...str];

arr5;   //["1", "2", "3", "4"]
```


#### 例

<!--more-->

例：

需要实现,搜索歌手，歌手名字需要在最上一排

![](/assets/es6/1.gif)

正常的返回格式如下：

搜索歌曲

![](/assets/es6/1.png)

搜索歌手

![](/assets/es6/2.png)


```bash

data(){
    return{
        result : []
    }
},
methods:{
    some(){
        //搜索接口
        this.result = this.format(data);
    },
    format(data){
        let ret = [];
        if(data.zhida && data.zhida.singerid){
            //确定包含歌手
            ret.push({
                ...data.zhida,  //传入歌手信息
                //？？如何进行判断是歌手还是歌曲进行图标替换？？
                //改写字段的type
                ...{type:'singer'}
            })
        }
        if(data.song){
            ret = ret.concat(data.song.list)
        }
    },
    //这里就可以更改icon了
    getIcon(item){
        if(item.type === 'singer'){
            return 'icon-mine';
        }else{
            return 'icon-music';
        }    
    }
    //<i class="icon" :class="getIcon(item)"></i>
}
```

更改后的字段：

![](/assets/es6/3.png)


PS:引用扩展运算符：

ES6 的 合并

```bash
1：
var arr1 = ['a']
var arr2 = ['b','c']
var arr3 = ['d']
[...arr1,...arr2,...arr3]   //["a", "b", "c", "d"]

2：
var a = {a:1,type:2}
var b = {...a,...{type:'1111'}}
b;  //{a: 1, type: "1111"}  //覆盖合并了
```










