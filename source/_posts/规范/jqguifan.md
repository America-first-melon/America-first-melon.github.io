---
title: jQ规范
date: 2016-05-05 22:38:45
categories:
- 【规范】
- jq书写规范
---

### 引用

<!--more-->

尽量在body结束前引用jQuery

如果是在`</body>`前引用了jQuery,那么就不需要写`document.ready`了，DOM已经加载完毕。

一般模板

```html
<!DOCTYPE html>
<html>
      <head>
            <!--网页页面字符集-->
            <meta charset="utf-8">

            <!--让IE使用最新的渲染模式-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">

            <!--针对移动设备,网站显示宽度等于设备屏幕显示宽度,内容缩放比例为1:1-->
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <!-- 上述meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->

            <title>Bootstrap Basic Template</title>
            <!-- Bootstrap -->
            <link href="css/bootstrap.min.css" rel="stylesheet">
            <!--下面这一大块的注释是说:"为了让IE9以下的浏览器支持响应式和HTML5标签.需要引入下面两个JS文件"-->
            <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
            <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
            <!--[if lt IE 9]>
            <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
            <![endif]-->
      </head>
      
      <body>
            <!--中:必须在JS文件引入之前引入JQ文件,这里src引用的是本地.线上建议使用CDN引用)
            
            <script src="js/jquery-2.1.3.min.js"></script>

            <!-- Include all compiled plugins (below), or include individual files as needed -->

            <script src="js/bootstrap.min.js"></script>
            
            <!-- cdn损坏去找本地 -->
            <script src="//lib.sinaapp.com/js/jquery11/1.8/jquery.min.js"></script>  
            <script>window.jQuery || document.write('<script src="jquery1.8.min.js">\x3C/script>')</script>  
      
      </body>
      
</html>
```

### 选择器

+ eg:

```html
<div id="nav" class="nav">  
    <a class="home" >HOME</a>  
    <a class="articles" >ARTICLES</a> 
</div> 
```

+ 引用方式:

```bash
$('.home');  //1  $('#nav a.home');  //2  $('#nav').find('a.home');  //3
```

+ 解释：

1.在整个DOM中查找class为home的a元素
2.查找id为nav的子元素，查找性能得到了很大提升
3.使用了find方法，它的速度更快

jQuery选择器的性能优先级：id>元素>class

使用ID选择器和单个类选择器都是选中元素最快的方式。

+ id

```bash
// 糟糕
$('div#myid');
$('div#footer a.myLink');
// 建议
$('#myid');
$('#footer .myLink');
```

+ 隐式

```bash
// 糟糕
$('.someclass :radio');
// 建议
$('.someclass input:radio');
```

+ 通用选择符

```bash
// 糟糕
$('.container > *');
// 建议
$('.container').children();
```

+ 精简代码

```bash
// 糟糕
if(collection.length > 0){..}
// 建议
if(collection.length){..}
```

+ 选择

```bash
//糟糕，会遍历整个DOM
$(".class");
//建议，只搜索#id元素下的class，id指明搜索范围
$(".class","#id");

性能比较：
$(".class","#id") > $("#id .class") > $(".class")

```

### 缓存jQ对象

+ eg:

```bash
// 糟糕
h = $('#element').height();
$('#element').css('height',h-20);
// 建议
$element = $('#element');
h = $element.height();
$element.css('height',h-20);

// 糟糕
var
    $container = $('#container'),
    $containerLi = $('#container li'),
    $containerLiSpan = $('#container li span');
// 建议 (高效)
var
    $container = $('#container '),
    $containerLi = $container.find('li'),
    $containerLiSpan= $containerLi.find('span');

```

+ 单 var 链

```bash
var $first = $('#first'),
    $second = $('#second'),
    value = $first.val(),
    k = 3,
    cookiestring = 'SOMECOOKIESPLEASE',
    i,
    j,
    myArray = {};
```

### 事件委托

```bash
$('#t').find('td').on('click', function () {  
    $(this).css({ 'color': 'red', 'background': 'yellow' });  
});

//这样会为每个td绑上事件

$('#t').on('click', 'td', function () {  
    $(this).css({ 'color': 'red', 'background': 'yellow' });  
}); 

//在为100个单元格绑定click事件的测试中，两者性能相差7倍之多,选这个


```

### 精简代码

+ 合并

```
// 糟糕
$first.click(function(){
    $first.css('border','1px solid red');
    $first.css('color','blue');
});
// 建议
$first.on('click',function(){
    $first.css({
        'border':'1px solid red',
        'color':'blue'
    });
});
```
+ 链式

```
// 糟糕
$second.html(value);
$second.on('click',function(){
    alert('hello everybody');
});
$second.fadeIn('slow');
$second.animate({height:'120px'},500);
// 建议
$second.html(value);
$second.on('click',function(){
    alert('hello everybody');
}).fadeIn('slow').animate({height:'120px'},500);
```

+ 最小化DOM更新

重布局和重绘是WEB页面中最常见的也是最昂贵的两种操作。

```bash
//糟糕
for(var i=0; i<10000; i++){
    $("#main table").append("<tr><td>aaaa</td></tr>");
}

//建议
var tablerow = "";
for(var i=0; i<10000; i++){
    tablerow  += "<tr><td>aaaa</td></tr>";
}
$("#main table").append(tablerow);

```


[__链接1__](https://buluo.qq.com/p/detail.html?bid=348745&pid=7751115-1492150350&from=grp_sub_obj)
[__链接2__](https://segmentfault.com/a/1190000005980302#articleHeader2)