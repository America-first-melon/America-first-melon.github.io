---
title: 即时验证输入框内容变化
date: 2016-11-25 13:46:12
categories:
- js库
- jQuery+L7
---

### 效果
![](/assets/l7/3.gif)

<!--more-->

### 代码
``` bash
$('ele').bind('input propertychange', function() {
    var value = $("ele").val();
    if(value.length > 1){
        $('button').css({'background-color':'#FF9000','color':'#FFF'});
    }else{
        $('button').css({'background-color':'#F5F5F5','color':'#999'});
    }
});
```
**解释：**
- `propertychange` 当前对象属性发生改变触发。（IE专属的）

- `bind()`    方法为被选元素添加一个或多个事件处理程序，并规定事件发生时运行的函数。
- `change()`  事件当用于 select 元素时，change 事件会在选择某个选项时发生。
              当用于 text field 或 text area 时，该事件会在元素失去焦点时发生。

- `oninput()` 事件在元素值发生变化是立即触发， onchange 在元素失去焦点时触发。
