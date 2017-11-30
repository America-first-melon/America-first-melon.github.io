---
title: P1.reactjs跨域解决
date: 2017-07-30 19:55:39
categories:
- 【React.js】
- canvas小项目
---


#### 介绍

create-react-app + react-router 4.1 + fetch 2.0 + react 15.6

<!--more-->


#### 跨域

在`package.json`里添加`proxy`

如下：

```bash
"proxy": {
    "/target": {
        "target": "http://rooturl"
    },
    "/api":{
        "target": "http://192.168.90.85:3000",  //后台地址
        "changeOrigin": true,
        "pathRewrite": {
            "^/api" :""
        }
    }
}
```
引用: fecth('/target/somedirect')
      fetch('http://localhost/api/someAPI)  //fetch自己本地



