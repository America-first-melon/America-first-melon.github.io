---
title: 面试题总结
date: 2017-06-06 16:16:16
categories:
- 【面试】
- 面试题总结
---

### ES6

+ map

```javascript

var arr = ["a","b","c"];

arr.map((i)=>console.log(i));

//a b c

arr.map((v,i)=>console.log(i+v));

//0a 1b 2c


```

<!--more-->

+ for...of / for...in

```javascript

var arr = ["a","b","c"];

for(var i in arr ){
  console.log(i); //0 1 2
}

for(var i of arr){
  console.log(i); //a b c
}

```

+ 函数的继承

```javascript
//定义类
class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  toString(){
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p1 = new Point(1, 2);


//继承类

class ColorPonit extends Point{
  constructor(x,y,color){
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }
  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
var p2 = new ColorPonit(1);

//"undefined (1, undefined)"

var p3 = new ColorPonit(1,2,'black');

//"black (1, 2)"

```

+ 合并

```javascript
const json1 = {a:1,b:2};
const json2 = {a:3};

function foo(){
  return Object.assign(json1,json2);
}
foo();
//返回{a:3,b:2};

/**
  *jQuery.extend也可以
  **/

```

### js基本问题

+ 递归函数

<b>自己调用自己</b>

例如：公园里有一堆桃子，猴子每天吃掉一半，挑出一个坏的扔掉，第6天的时候发现还剩1个，问原来有多少个桃子

```javascript

var s1;

function total(n){
  if(n == 6){
    s1 = 1;
  }else{
    s1 = (total(n+1)+1)*2 //当天的数量 = （下一天的数量+1）*2；
  }
  return s1;
}

```

+ 可枚举属性

for in 会顺着原型链,把可枚举属性都枚举出来,只遍历可枚举属性。;
像 Array 和 Object 使用内置构造函数所创建的对象都会继承自 
Object.prototype 和 String.prototype 的不可枚举属性，
例如 String 的 indexOf()  方法或者 Object 的 toString 方法。

```javascript
var obj = {name:"张三",age:18}
for(var key in obj){
  console.log("key:" + key + "，value:" + obj[key]);
}
//输出:key:name，value:张三和key:age，value:18
```

+ 冒泡

比如有20个li有相同的点击事件如何写？

不能写在li上，20个还好，100个呢？

写在e.target上就是ul上。

jq写法：

```javascript
<table id="t">  
  <tr>  
    <td>我是单元格</td>  
  </tr>  
</table>
```
比如我们要在上边的单元格上绑定一个单击事件，不注意的朋友可能随手写成下边的样子：
```script
$('#t').find('td').on('click', function () {  
  $(this).css({ 'color': 'red', 'background': 'yellow' });  
});
```
这样会为每个td绑上事件，在为100个单元格绑定click事件的测试中，两者性能相差7倍之多，好的做法应该是下边写法：
```javascript
$('#t').on('click', 'td', function () {  
  $(this).css({ 'color': 'red', 'background': 'yellow' });  
});
```


### React

+ 状态

具体见[中文网](http://react-china.org/t/react/1740)

