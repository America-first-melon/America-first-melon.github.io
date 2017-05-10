---
title: 滚动播报
date: 2016-11-15 09:46:34
categories:
- 前端
- 页面效果
---


#### 代码：

搜索框：
``` bash
<!doctype html>
<html>
   <head>
       <meta charset="utf-8">
       <title>jQuery 文字逐行向上滚动代码</title>
       <style>
           *{padding:0;margin:0;}
           li{list-style:none;}
           .apple{width:90%;height:50px;overflow:hidden;margin:50px auto;border:1px solid red;}
           .apple a{display:block;text-decoration:none;width:100%; height:50px; line-height:50px; text-indent:20px; color:#1B96EE;}
       </style>
       <script src="jquery.min.js"></script>  
   </head>
   <body>
       <div class="apple">
           <ul>
               <li><a href="#">快使用双截棍</a></li>
               <li><a href="#">哼哼哈嘿</a></li>
               <li><a href="#">习武之人切记</a></li>
               <li><a href="#">仁者无敌</a></li>
           </ul>
       </div>
       <script>
           function autoScroll(obj){
               $(obj).find("ul").animate({
                   marginTop:"-39px"
               },500,function(){
                   $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
               })
           }
           $(function(){
               setInterval('autoScroll(".apple")',2000);
           })
       </script>
   </body>
</html>
```
