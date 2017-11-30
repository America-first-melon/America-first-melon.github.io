---
title: 导航条随屏幕滚动,一定距离后fixed
date: 2016-12-15 10:47:10
categories:
- 【页面效果】
- 导航条随屏幕滚动至一定距离后fixed
---

#### 描述


导航条随屏幕滚动,一定距离后fixed


<!--more-->

```bash
<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style type="text/css">
            .wrapper{width:1000px;height:2000px;margin-left:auto;margin-right:auto;}
            .header{height:150px;}
            #nav{padding:10px;position:relative;top:0;background:black;width:1000px;}
            a{display:inline-block;margin:0 10px;*display:inline;zoom:1;color:white;}
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="header"></div>
            <div id="nav">
                <a href="#">11111</a>
                <a href="#">22222</a>
                <a href="#">33333</a>
                <a href="#">44444</a>
                <a href="#">55555</a>
            </div>
        </div>
    </body>
</html>
<script>
    function menuFixed(id){
        var obj = document.getElementById(id);
        var _getHeight = obj.offsetTop;

        window.onscroll = function(){
            changePos(id,_getHeight);
        }
    }
    function changePos(id,height){
        var obj = document.getElementById(id);
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop+'scroll')
        console.log(height+'off')
        if(scrollTop < height){
            obj.style.position = 'relative';
        }else{
            obj.style.position = 'fixed';
        }
    }
</script>
<script type="text/javascript">
    window.onload = function(){
        menuFixed('nav');
    }
</script>
```

效果：
![](/assets/qita/2.gif)
