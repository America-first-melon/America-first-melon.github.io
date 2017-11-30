---
title: jq的hover事件连续触发
date: 2016-11-22 10:06:11
categories:
- js库
- jQuery
---


### 问题描述：

比如：连续多次来回滑动鼠标就会这样,

![](/assets/js/jquery/2.png)

<!--more-->

### 代码结构：

``` bash
  $('ele').hover(function(){
      $(this).css();
  },function(){
      $(this).css();
  });
```

### 解决方案：

当鼠标放置在**li**上面时超过一定时间再执行hover事件。

``` bash
  var t;
  $("li.subnav-bord").mouseenter(function(){
    var that = this;
    t = setTimeout(function(){
      var pid = $(that).attr("data");
      $(that).addClass("subnav-li-active");
      $(that).find('.subnav-li-pad').addClass('subnav-li-pad-active');
      /*二级分类*/
      $.ajax({
        url:'url',
        type:'get',
        data:{
          "pid":pid
        },
        dataType:'json',
        success:function(result){
          var html = '';
          var data = result.data;
          if(data.length > 0 ){
            for(var o in data){
                html += '<li><a href="/Book/books?id='+data[o]["id"]+'">'+data[o]["kind_name"]+'</a></li>'
            }
            document.getElementById("secondCat"+pid).innerHTML = html;
            $("#secondCat"+pid).parent().css("display","block");
          }
        },
        error:function(error){console.log(error);}
      })
    },100);
  }).mouseleave(function(){
    clearTimeout(t);
    $(this).removeClass('subnav-li-active');
    $(this).find('.subnav-li-pad').removeClass('subnav-li-pad-active');
    $(this).find('.subnav-li-child').css('display','none');
  });
```
