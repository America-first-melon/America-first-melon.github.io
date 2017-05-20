---
title: MAC常见运行错误
date: 2017-05-01 10:33:15
categories:
- 框架+库
- React Native
---


####  总结


* react native run-android 错误 :app:dexDebug FAILED

错误： Execution failed for task ':app:dexDebug'

如图：

![](/assets/rn/app-dexbug.jpg)

<!--more-->

解决：

```bash
cd android/ && ./gradlew clean
cd .. && react-native run-android
```

[链接](http://stackoverflow.com/questions/39127137/react-native-run-android-failed-with-error-execution-failed-for-task-appdexd)，`windows下去掉./`。


* react-native-pushy 错误 ':react-native-update:compileReleaseNdk'.

如下：

```bash
NDK not configured.
Download the NDK from http://developer.android.com/tools/sdk/ndk/.Then add ndk.dir=path/to/ndk in local.properties.
(On Windows, make sure you escape backslashes, e.g. C:\ndk rather than C:\ndk)
```

解决：

下载ndk，在Android目录下新建local.properties

![](/assets/rn/ndk-win.png)

![](/assets/rn/ndk-mac.png)

[链接](https://github.com/reactnativecn/react-native-pushy/issues/46#issuecomment-302287038)


* react native mac 真机运行

1.develop增加udid

2.加上develop账号

![](/assets/rn/ios-zhenji.jpg)

如果发生 `App installation failed have a vaild signature`

方法：clean当前工程：`/User/xxx/Library/Developer/Xcode/DerivedData` 删除相关文件。

    



