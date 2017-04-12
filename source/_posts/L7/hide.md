---
title: 点击空白处隐藏
date: 2016-11-25 14:45:29
categories:
- js库
- jQuery+L7
---


### 效果
![](/assets/l7/2.gif)

<!--more-->

### 代码
``` bash
/*结构*/
<div class="data-title">你是孩子的谁?</div>
<div class="card-content">
  <label class="label-checkbox item-content">
      <input type="radio" name="my-radio">
      <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
      <div class="item-inner item-inner-pad">
          <div class="item-title color-333">爸爸</div>
      </div>
  </label>
  <label class="label-checkbox item-content">
      <input type="radio" name="my-radio">
      <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
      <div class="item-inner item-inner-pad">
          <div class="item-title color-333">妈妈</div>
      </div>
  </label>
  <label class="label-checkbox item-content">
      <input type="radio" name="my-radio">
      <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
      <div class="item-inner item-inner-pad">
          <div class="item-title color-333">外婆</div>
      </div>
  </label>
  <label class="label-checkbox item-content other">
      <input type="radio" name="my-radio">
      <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
      <div class="item-inner item-inner-pad">
          <div class="item-title color-333">其他</div>
      </div>
  </label>
  <div class="other-input">
      <div class="item-inner item-inner-pad">
          <div class="item-title color-333"><input type="text" id="other"></div>
      </div>
  </div>
</div>

```
``` bash
/*点击其他空白处*/
$(document).on("click", "body", function() {
    if($('#other').val().length == 0 ){
        $(".other-input").hide();   /*没有信息隐藏*/
    }else{
        $(".other-input").show();   /*有信息点击其他位置不隐藏*/
    }
});
/*点击其他按钮出现输入框*/
$(document).on("click", ".other", function(e) {
    $(".other-input").show();
    e.stopPropagation();
});
/*阻止冒泡，否则会触发第一个body点击事件*/
$(document).on("click", ".other-input", function(e) {
    e.stopPropagation();
});
```

扩展：

``` bash
$(document).mouseup(function(e){
  var _con = $(' 目标区域 ');   // 设置目标区域
  if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
    some code...   // 功能代码
  }
});
/* Mark 1 的原理：
判断点击事件发生在区域外的条件是：
1. 点击事件的对象不是目标区域本身
2. 事件对象同时也不是目标区域的子元素
*/
```
