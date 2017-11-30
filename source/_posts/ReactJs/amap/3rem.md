---
title: P3:rem和AMap冲突
date: 2017-11-01 21:15:26
categories:
- React.js
- AMap公众号
---

<!--more-->

#### 问题

一开始在react的public下的index.html下引用了阿里巴巴flexible.js,源代码判断了设备像素比(device pixel ratio),会导致不同手机下缩放不一样，

样式的定义也就成了

```css
.selector {width: 2rem;border: 1px solid #ddd;}

[data-dpr="1"] .selector {height: 32px;font-size: 14px;}

[data-dpr="2"] .selector {height: 64px;font-size: 28px;
```

Amap引用之后，地图的显示会变的更小，因为里面的组件都是px单位。

解决方法1：

进入含有地图的页面，将meta标签device pixel ratio都设置为1，退出之后重新设置为原来的。

```javascript
var metaEl = document.getElementsByTagName('meta'),
    len = metaEl.length;
    
componentWillMount(){
    this.setState({
          meta:metaEl[len-1].content
    })
    metaEl[len-1].setAttribute('content', 'width=device-width,initial-scale=1,user-scalable=no');
}
componentWillUnmount(){
    let temp = this.state.meta;
    metaEl[len-1].setAttribute('content', temp);
}

```


解决方法2：

index.html增加`<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
`
这样所有的页面都是1.


放个简单模板：

```html
<!doctype html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
        <meta content="yes" name="apple-mobile-web-app-capable">
        <meta content="yes" name="apple-touch-fullscreen">
        <meta content="telephone=no,email=no" name="format-detection">
        <title>title</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```



