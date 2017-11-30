---
title: 书写规范
date: 2016-06-05 20:15:45
categories:
- 【规范】
- 前端书写规范
---

### CSS

+ 最佳选择器写法（模块）

```css
/* 这是某个模块 */
.m-nav{}/* 模块容器 */
.m-nav li,.m-nav a{}/* 先共性  优化组合 */
.m-nav li{}/* 后个性  语义化标签选择器 */
.m-nav a{}/* 后个性中的共性 按结构顺序 */
.m-nav a.a1{}/* 后个性中的个性 */
.m-nav a.a2{}/* 后个性中的个性 */
.m-nav .z-crt a{}/* 交互状态变化 */
.m-nav .z-crt a.a1{}
.m-nav .z-crt a.a2{}
.m-nav .btn{}/* 典型后代选择器 */
.m-nav .btn-1{}/* 典型后代选择器扩展 */
.m-nav .btn-dis{}/* 典型后代选择器扩展（状态） */
.m-nav .btn.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
.m-nav .m-sch{}/* 控制内部其他模块位置 */
.m-nav .u-sel{}/* 控制内部其他元件位置 */
.m-nav-1{}/* 模块扩展 */
.m-nav-1 li{}
.m-nav-dis{}/* 模块扩展（状态） */
.m-nav.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
```

<!--more-->

+ 统一语义理解


布局（.g-）

![](/assets/guifan/1.png)


模块（.m-）、元件（.u-）

![](/assets/guifan/2.png)


功能（.f-）

![](/assets/guifan/3.png)

皮肤（.s-）

![](/assets/guifan/4.png)


状态（.z-）

![](/assets/guifan/5.png)

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
const HTML_ENTITY = {};

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




