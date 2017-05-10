---
title: 二级选项
date: 2016-10-22 19:28:35
categories:
- 前端
- 页面效果
---


#### 代码


<!--more-->


```html
/**/
.gzf-tab,.gzf-tabMore{width: 150px;line-height: 40px;text-align: center;border-bottom: 1px solid #e2e2e2;font-size: 18px;cursor: pointer;}
.gzf-tab-current{background:#ff8f2b;color: #fff;}
.icon-more{position: absolute;right: 0;transition:500ms;}
/**/
<ul class="gzf-tab-wrap left">
    <li class="gzf-tab gzf-tab-current"><i class="iconfont icon-mar">&#xe688;</i>我的资料</li>
    <li class="gzf-tab"><i class="iconfont icon-mar">&#xe603;</i>我的收藏</li>
    <li class="gzf-tab"><i class="iconfont icon-mar">&#xe65d;</i>直播记录</li>
    <li class="gzf-tab"><i class="iconfont icon-mar">&#xe851;</i>录像管理</li>
    <li class="gzf-tabMore" style="position:relative;">
        <div class="gzf-tab-more1">
          <i class="iconfont icon-mar">&#xe634;</i>
          我的视频
          <i class="iconfont icon-more">&#xe66b;</i>
        </div>
        <ul class="tab-more none">
            <li class="uploadVideo">上传视频</li>
            <li class="manageVideo">视频管理</li>
        </ul>
    </li>
    
    <li class="gzf-tabMore" style="position:relative;">
        <div class="gzf-tab-more2">
            <i class="iconfont icon-mar">&#xe63b;</i>
            我的文章
            <i class="iconfont icon-more">&#xe66b;</i>
        </div>
        <ul class="tab-more none">
            <li class="uploadArticle">上传文章</li>
            <li class="manageArticle">文章管理</li>
        </ul>
    </li>
    
</ul>
```

```javascript
/*选项卡*/
$(".gzf-tab-wrap li.gzf-tab").click(function(){
    $(this).addClass("gzf-tab-current").siblings().removeClass("gzf-tab-current").find("div").removeClass("gzf-tab-current");
    $(this).siblings().find("ul.tab-more li").removeClass("icon-now");
    $(".gzf-tabcont-wrap > div").eq($(this).index()).removeClass("none").siblings().addClass("none");
});
function tabMoreClick(ele,flag){
    $(ele).click(function(){
        $(this).addClass("gzf-tab-current").parent().siblings().removeClass("gzf-tab-current").find("div").removeClass("gzf-tab-current");
        if(flag){
            $(this).find(".icon-more").css("transform","rotate(180deg)");
            $(this).parent().find("ul.tab-more").fadeIn(500);
            flag = false;
            $(this).parent().find("ul.tab-more li").click(function(e){
            var liTarget = "li." + e.target.getAttribute("class");
            var divTarget = "div." + e.target.getAttribute("class");
            $(liTarget).parent().parent().siblings().find("ul.tab-more li").removeClass("icon-now");
            $(liTarget).addClass("icon-now").siblings().removeClass("icon-now");
            $(divTarget).removeClass("none").siblings().addClass("none");
            })
        }else{
            $(this).find(".icon-more").css("transform","rotate(0deg)");
            $(this).parent().find("ul").hide();
            flag = true;
            }
        });
};
tabMoreClick(".gzf-tab-more1","flag1");
tabMoreClick(".gzf-tab-more2","flag2");
```

