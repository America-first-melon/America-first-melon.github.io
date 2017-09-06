---
title: reactjs+canvas小项目问题集合
date: 2017-07-30 19:55:39
categories:
- 框架+库
- React.js
---


#### 介绍

create-react-app + react-router 4.1 + fetch 2.0 + react 15.6

<!--more-->


#### 问题

+ 1、跨域

在`package.json`里添加`proxy`

如下：

```bash
"proxy": {
    "/target": {
        "target": "http://rooturl"
    }
}
```
引用: fecth('/target/somedirect')

+ 2、scroll事件

componentDidMout添加了addEventListener，scroll获取不到this，如下：

如图：![](/assets/rj/6.png)

还是要bind(this)

如图：![](/assets/rj/7.png)

但还是找不到this.scroll

需要获得(e)=>{console.log(e.target)};

如图：![](/assets/rj/8.png)

+ 3、canvas模糊

点击事件获取的坐标没有问题，但是drawImage方法画出的图模糊，如下：

如图：![](/assets/rj/9.png)

宽高不要写在style里，写在标签上

`<canvas style={{width:x,height:y}}></canvas>`-->错误

`<canvas width={375} height={667-64}></canvas>`-->正确

+ 4、react-route的modal/index跳转

index与modal多次跳转，componentWillUpdate会被多次触发，点击事件也触发该事件。

但路由跳转只触发了componentWillReceiveProps

如图：![](/assets/rj/10.png)
如图：![](/assets/rj/11.png)

+ 5、打包放置在服务器

服务器要配置npm环境,然后npm install serve -g

serve -s 执行  

如下图：

![](/assets/rj/12.png)
![](/assets/rj/13.png)
![](/assets/rj/14.png)

eg:[链接](http://139.224.3.89:5000?user_id=15499)

<b>react-router4的各种关键都在this.props里面的match/location/history里面，需要多研究文档里面这三个的用法</b>

