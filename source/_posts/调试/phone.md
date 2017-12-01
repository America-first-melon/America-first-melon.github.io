---
title: 手机端如何调试网页？
date: 2016-11-11 20:28:21
categories:
- 【调试】
- 手机端调试网页
---


#### 谷歌浏览器

- 连接USB

- 地址栏输入：chrome://inspect/#device

- 开VPN

android可以

<!--more-->

#### ios-webkit-debug-proxy-win64

ios下调试safari或者app里内嵌的html

-  1、设置 > Safari > 高级 > Web 检查 > 启用

-  2、itunes安装

-  3、[下载32或者64](https://github.com/artygus/ios-webkit-debug-proxy-win32)

-  4、添加环境变量C:\ios-webkit-debug-proxy-win32。(可选)

-  5、cmd 启动 ios_webkit_debug_proxy.exe -f chrome-devtools://devtools/bundled/inspector.html

-  6、输出设备列表  Connected :9222 to iPhone (c356a29f73043a36aa6de64b088d55aeeda8f034)

-  7、http://localhost:9221/   右键复制链接地址打开调试即可。

#### Vconsole

地址：[github](https://github.com/Tencent/vConsole)

使用：

1. npm install vconsole

2. var vConsole = new VConsole();

3. console.log('hello')