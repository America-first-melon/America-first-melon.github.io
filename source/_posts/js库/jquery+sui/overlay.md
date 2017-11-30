---
title: SUI自定义遮罩
date: 2016-11-11 21:02:46
categories:
- 【JS库】
- jQuery+SUI
---

### 代码

需要用fixed,否则如果数据加载更多的时候，这个遮罩就上去了。。。

<!--more-->

```bash
.overpage{
   position: fixed;
   left: 0;
   top: 3rem;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.4);
   z-index: 1000;
   visibility: hidden;
   opacity: 0;
   -webkit-transition-duration: 400ms;
   transition-duration: 400ms;
   /*让过渡效果持续 400 ms*/
}﻿

```

```bash

$(".right").click(function(){
    /*点一下遮罩消失，再点出现，判断了一个display属性*/
    if($(".filter").css("display") == "none"){
          $(".filter").show();
          /*倒三角旋转*/
          $(this).find("i").css('transform','rotate(180deg)');
          /*遮罩出现*/
          $(".overpage").css({'opacity':'1','visibility':'visible'})
       }else{
          $(".filter").hide();
          $(this).removeClass("active2");
          $(this).find("i").css("transform","rotate(0)");
          $(".overpage").css({'opacity':'0','visibility':'hidden'})
      })

```
