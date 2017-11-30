---
title: zepto和jquery的方法冲突
date: 2016-11-08 20:16:04
categories:
- 【JS库】
- jQuery
---


### 问题描述：

zepto 支持的方法 和 jquery 相比少了很多,
例如这种选择器就不能获取的到,

`  var eleName = $("#element option:selected").val();  `

这个是select标签获取子选项option被选择的状态

<!--more-->

### 解决方案：

官方文档有说明如下：
http://api.jquery.com/jQuery.noConflict/

``` bash
  <script src="other_lib.js"></script>
  <script src="jquery.js"></script>
  <script>
      $.noConflict();
      jQuery( document ).ready(function( $ ) {  
          // Code that uses jQuery's $ can follow here.
      });
          // Code that uses other library's $ can follow here.
  </script>﻿​
```

``` bash
  <script src="/js/common/zepto.js"></script>
  <script src="/js/common/jquery.min.js"></script>
  <script>
      $.noConflict();
      jQuery( document ).ready(function($) {
          //这里写的jq代码
      });
          //这里可以不写，而是另起一个script标签写zepto的方法。。
  <script>

```
