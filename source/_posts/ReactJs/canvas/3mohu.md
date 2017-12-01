---
title: P3.reactjs下canvas模糊
date: 2017-07-30 19:55:45
categories:
- 【React.js】
- canvas小项目
---


#### canvas模糊

点击事件获取的坐标没有问题，但是drawImage方法画出的图模糊，如下：

<!--more-->

如图：![](/assets/rj/9.png)

宽高不要写在style里，写在标签上

```bash
<canvas width={375} height={667-64}></canvas> //正确

<canvas style={{width:x,height:y}}></canvas>  //错误
```






