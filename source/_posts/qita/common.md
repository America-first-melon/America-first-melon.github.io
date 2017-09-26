---
title: 常用总结
date: 2017-07-10 20:40:13
categories:
- 前端
- 常用
---

#### HTML

+ IOS点击会闪一下

```css
*{-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;}
```

+ 手机端禁止长按复制粘贴出现

```css
*{
    -webkit-touch-callout:none; 
    -webkit-user-select:none; 
    -khtml-user-select:none; 
    -moz-user-select:none;
    -ms-user-select:none; 
    user-select:none;
}
input,textarea {
    -webkit-user-select:auto; 
}
```

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

+ 绝对定位水平居中

<b>一：</b>

```html
<div style="position: absolute; left: 50%;">
      <div style="position: relative; left: -50%; border: dotted red 1px;">
            I am some centered shrink-to-fit content!
            tum te tum
      </div>
</div>

```
问题：字多了就会换行...

<b>二：</b>

```html
css{position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);}
都行。。。。。
css{position: absolute;width: 100%;top:50%;transform: translateY(-50%);}
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

+ ios与js交互

```javascript

window.webkit.messageHandlers.function.postMessage(null)

//function处为ios端写的调用js的函数名，一般需要写在<script>的第一级

```

+ android与js交互



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

+ 验证格式

```bash

var checkPhoneNumber = function(str){
      if(str.length == 0) return false;
      var r = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
      return r.test(str);
};
var checkEmailNumber = function(str) {
      if(str.length == 0) return false;
      var r = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return r.test(str);
};
var checkNumber = function(str){
      var r = /^\+?[1-9][0-9]*$/;　　
      return r.test(str);
};

//调用 checkPhoneNumber(value)
```

+ Array的最大最小值

```javascript


//最小值

Array.prototype.min = function() {
      var min = this[0];
      var len = this.length;
      for (var i = 1; i < len; i++){
            if (this[i] < min){
                  min = this[i];
            }
      }
      return min;
}
//最大值
Array.prototype.max = function() {
      var max = this[0];
      var len = this.length;
      for (var i = 1; i < len; i++){
            if (this[i] > max) {
                  max = this[i];
            }
      }
      return max;
}
```
` 数组属于object类型 （for in 遍历会遍历出其原型上的属性） .`
` 对象属性有可枚举和不可枚举之分,可枚举性决定了和这个属性能否
被for in查找遍历到`

<b>不想被遍历出来prototype，用for of 和 forEach.</b>


#### 移动端.

+ 判断是安卓还是ios终端

```bash
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android终端 
var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
```

+ rem

[参考链接1](http://www.vshowtv.com/video_list/js/common/common.js?v=2017031501)

[淘宝flexible](http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js)

[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)

[移动端高清、多屏适配方案](http://www.html-js.com/article/Mobile-terminal-H5-mobile-terminal-HD-multi-screen-adaptation-scheme%203041)

[移动Web怎么做屏幕适配（一）](https://segmentfault.com/a/1190000004524243)

