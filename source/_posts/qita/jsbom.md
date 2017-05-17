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
*	ios
  ```bash
  location.href='itms-services://?action=download-manifest&url=https://market.x7sy.com/plist/market_version/'+tg_id+'?'+Math.random();
  ```
  

  //判断是否是微信
function is_weixn(){
  var ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i)=="micromessenger") {
      return true;
  } else {
      return false;
  }
}

//判断是否是qq
function is_qq(){
  var ua = navigator.userAgent.toLowerCase();
  if(/\bqq\b/i.test(ua)) {
      return true;
  } else {
      return false;
  }
}

//判断是否是qq浏览器
function is_qqbrowser(){
  var ua = navigator.userAgent.toLowerCase();
  if(/\bmqqbrowser\b/i.test(ua)) {
      return true;
  } else {
      return false;
  }
}






           
     

