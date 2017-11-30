---
title: 选集
date: 2017-03-14 18:21:22
categories:
- 页面效果
- 选集
---

#### 效果

列表下选集滚动功能，节省空间。

<!--more-->

![](/assets/qita/5.gif)

#### 代码


结构：

```bash
<style>
    .sub-tvlist-slide{overflow: auto;border-top: 1px solid #ebebeb;border-bottom:1px solid #ebebeb; }
    .parts-number{width: 60px;height: 60px;line-height: 60px;float: left; color: #9a9a9a; text-align: center;text-decoration: none;border-right:  1px solid #ebebeb;position: relative;}
</style>
<div class="sub-tvlist">
    <div class="sub-tvlist-info">
        <div class="sub-tvlist-info-div1">选集</div>
        <div class="sub-tvlist-info-div2">更新到了100集</div>
    </div>
    <div class="sub-tvlist-slide">
        <div id="slide">
            <a href="" class="parts-number">
                <span>1</span>
                <b class="parts-tag">付费</b>
            </a>
            <a href="" class="parts-number">
                <span>2</span>
                <b class="parts-tag">付费</b>
            </a>
            <a href="" class="parts-number">
                <span>3</span>
                <b class="parts-tag">付费</b>
            </a>
            <a href="" class="parts-number">
                <span>3</span>
                <b class="parts-tag">付费</b>
            </a>
            <a href="" class="parts-number">
                <span>3</span>
                <b class="parts-tag">付费</b>
            </a>
            <a href="" class="parts-number">
                <span>3</span>
                <b class="parts-tag">付费</b>
            </a>
            <a href="" class="parts-number">
                <span>3</span>
                <b class="parts-tag">付费</b>
            </a>
            <a href="" class="parts-number">
                <span>3</span>
                <b class="parts-tag">付费</b>
            </a>
            <a href="" class="parts-number">
                <span>3</span>
                <b class="parts-tag">付费</b>
            </a>
        </div>
    </div>   
</div>

```
JS：

```bash

var slideArray = document.getElementsByClassName("parts-number");
var slideEle = document.getElementById("slide");
var listWidth = slideArray[0].offsetWidth;

window.onload = function(){
    slideEle.style.width = listWidth*slideArray.length + 'px';
}

```

`加上当前集数的index与宽度相乘，可以将集数放置在slide的最左边`

```javascript
$('.slide-video-number').each(function (index,domEle){
    if($(domEle).attr("playstatus") == 1){
        $(domEle).css("color","red");
        var widthValue = listWidth * index;
        $(".sub-tvlist-slide").scrollLeft(widthValue)
    }  
});

/*
**这里的slide-video-number是所有的集数，去判断是否正在播放，是的话就改变当前的颜色，并将滚动条的距离左移需要的width;
**[PS:一开始想的是offset().left，结果发现不行。。。。]
*/

```

