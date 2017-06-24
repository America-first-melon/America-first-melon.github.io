---
title: 常用总结
date: 2017-06-01 20:40:13
categories:
- 暂无
- 暂无
---

#### HTML

+ placeholder样式

```html
<textarea name="answer" placeholder="请输入您的意见" id="opinion"></textarea>
// <textarea></textarea>中间不能有空格，否则会失效
#opinion::-webkit-input-placeholder{
  font-family: "SimHei","SimSun";
  color: #6B7387;
}
```
<!--more-->

+ input类点击后边框颜色

```css
*:focus { outline: none; }
```

#### JavaScript

+ ios 未发布版本安装


```bash
location.href='itms-services://?action=download-manifest&url=https://market.x7sy.com/plist/market_version/'+tg_id+'?'+Math.random();
```

+ iPhone 未受信任跳转到设置

```javascript
<script src="iphone-shezhi.js"></script>
<body data-stat-page="ios9_page" data-stat-visit="ios9_page">
      <div class='trust-button' data-stat-pos='config' data-stat-turl='mobile_config/embedded.mobileprovision'>点击前去信任</div>
</body>
```

+ 判断是否是微信

```bash
function is_weixn(){
      var ua = navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i)=="micromessenger") {
            return true;
      } else {
            return false;
      }
}
```

+ 判断是否是qq

```bash
function is_qq(){
      var ua = navigator.userAgent.toLowerCase();
      if(/\bqq\b/i.test(ua)) {
            return true;
      } else {
            return false;
      }
}
```

+ 判断是否是qq浏览器

```bash
function is_qqbrowser(){
      var ua = navigator.userAgent.toLowerCase();
      if(/\bmqqbrowser\b/i.test(ua)) {
            return true;
      } else {
            return false;
      }
}
```

+ 判断是安卓还是ios终端

```bash
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android终端 
var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
```

#### 移动端

+ rem

[参考链接1](http://www.vshowtv.com/video_list/js/common/common.js?v=2017031501)

[淘宝flexible](http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js)

[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)

[移动端高清、多屏适配方案](http://www.html-js.com/article/Mobile-terminal-H5-mobile-terminal-HD-multi-screen-adaptation-scheme%203041)

[移动Web怎么做屏幕适配（一）](https://segmentfault.com/a/1190000004524243)

