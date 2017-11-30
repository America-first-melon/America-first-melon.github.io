---
title: 搜索功能
date: 2016-12-02 17:30:20
categories:
- js库
- jQuery+L7
---

### 效果
![](/assets/l7/4.gif)

<!--more-->
### 代码
``` bash
 $(page).on("click", ".searchbar-search", function() {
     var inputText = $("#search").val();
     if($.trim(inputText)!=""){
         $("div#daily-main-casual-list .others a:not(:last-child)").hide().filter(":contains('"+inputText+"')").fadeIn(1200);
     }else{
         $.alert('不能为空');
     }
 });
```

**解释：**

- inputText 为 search 框的 内容；

- filter() 方法将匹配元素集合缩减为匹配指定选择器的元素。

- :contains 选择器选取包含指定字符串的元素。
