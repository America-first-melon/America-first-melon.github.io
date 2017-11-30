---
title: IE下的nextElement
date: 2016-10-09 20:18:22
categories:
- 【兼容性】
- IE下的nextElement
---

### 问题表述：

结构：

```javascript
<li class="gzf-tab">
    <div class="gzf-tab-more">
        <i class="iconfont common">&#xe65d;</i>
        <a href="javascript:void(0);">直播管理</a>
        <i class="iconfont arrow">&#xe62e;</i>
    </div>
    <ul class="tab-more none">
        <li class="icon-now"><a href="/Workshop/myLive">我的直播</a></li>
        <li><a href="/Workshop/addLive">发布直播</a></li>
    </ul>
</li>
```

结果：

![](/assets/jianrong/1.png)
![](/assets/jianrong/2.gif)

方法：

```javascript
function getNextElement(node){
    var NextElementNode = node.nextSibling;
    while(NextElementNode.nodeValue != null){
        NextElementNode = NextElementNode.nextElementSibling;
    }
    return NextElementNode;
};

$('.gzf-tab-more').click(function(){
    $(getNextElement(this)).fadeIn(500).parent().siblings().find('.tab-more').hide();
});

```

