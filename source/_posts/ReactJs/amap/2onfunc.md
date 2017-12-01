---
title: P2:AMap相关API调用
date: 2017-11-01 20:12:16
categories:
- 【React.js】
- AMap公众号
---


#### 问题

+ 插件暴露的事件调用

<!--more-->

AMap插件一搬有三个选项，options、方法、事件，事件调用方法：

如图：![](/assets/rj/17.png)

如何调用：

```bash
    ...some code
    window.AMap.plugin(['AMap.ToolBar'],()=>{
        //options填充
        _this.toolBar = new window.AMap.ToolBar({
                autoPosition:true,
                noIpLocate:true,
                visible: false
        });
        //事件调用监听
        _this.toolBar.on('location',(x,y)=>{
            _this.setState({
                isGPS:false,
                currentLocation: 'loading...'
            });
        })
    }
    map.addControl(_this.toolBar);
    });
    ...some code
```

+ 铺图层

相关链接:[使用自己的栅格图](http://lbs.amap.com/api/javascript-api/guide/draw-on-map/layer/)

```bash
    this.alamapLayer = null;
    //创建map之后，执行
    _this.alamapLayer = new window.AMap.TileLayer({
            tileUrl:'http://-------------------/map/[z]/[y]/[x]',
            zIndex:1
    })
    _this.alamapLayer.setMap(map);

```

