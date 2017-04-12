---
title: 书写规范
date: 2016-06-05 20:15:45
categories:
- 前端
- 规范
---

### 多行注释

```bash
/**
* 函数表述
*
* @param {string} p1 参数1的说明
* @param {string} p2 参数2的说明,比较长
* 那就换行了
* @param {number=} p3 参数3的说明（可选）
* @return {Object} 返回值描述
*/

function foo(p1,p2,p3) {
  var p3 = p3 || 10;
  return{
    p1: p1,
    p2: p2,
    p3: p3
  };
}

```

### 命名

```bash

变量：
var loadingModules = {};

私有的：
var _privateMethod = {};

常量：
var HTML_ENTITY = {};

函数及其参数：
function stringFormat(source){}
function hear(theBells){}

类及其方法：
function TextNode(value,engine){
  this.value = value;
  this.engine = engine;
}

TextNode.prototype.clone = function(){
  return this;
}

枚举变量及其属性：
var TargetState = {
  READING: 1,
  READED: 2,
  APPLIED: 3,
  READY: 4
};

类名使用名词:
function Engine(options) {}

函数名使用动宾短语:
function getStyle(element) {}

布尔类型:
var isReady = false;
var hasMoreCommands = false;

```

### jQuery Variables

```bash

存放jQuery对象的变量以$开头
var $myDiv = $("#myDiv");
$myDiv.click(function(){...});

链式写法（大于3）：
$("#myDiv").addClass("error").show();

$("#myLink")
    .addClass("bold")
    .on("click",myCLickHandler)
    .on("mouseover",myMouseOverHandler)
    .show();

```
