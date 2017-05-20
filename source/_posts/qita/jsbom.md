---
title: BOM
date: 2017-03-03 20:34:02
categories:
- 暂无
- 暂无
---

####  总结

* 跳转到设置

	```bash
	function GoToSet(){
    location.href="prefs:root=General&path=ManagedConfigurationList";
  }
	```
    
* ios安装
<!--more-->

  ```bash
  location.href='itms-services://?action=download-manifest&url=https://market.x7sy.com/plist/market_version/'+tg_id+'?'+Math.random();
  ```
  

* 判断是否是微信

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

* 判断是否是qq

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

* 判断是否是qq浏览器

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

* 判断是安卓还是ios终端

```bash
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android终端 
var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
```






           
     

