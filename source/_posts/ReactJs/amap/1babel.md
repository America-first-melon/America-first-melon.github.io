---
title: P1:babel相关报错
date: 2017-11-01 20:08:16
categories:
- React.js
- AMap公众号
---


#### 介绍

放个链接 [胡先生](https://gitee.com/HiMrHu/ReactGuanFangJiaoShouJia/tree/master)

<!--more-->

#### 问题

ES6报错：Unexpected token (xx : xx)

关掉: `.babelrc`里的语法检查,`transform-class-properties`

配置文件.babelrc:

+ 设置转码规则和插件，基本格式：

    ```bash
      {
          "presets": [],
          "plugins": []
      }
    ```
    
 + presets字段设定转码规则 
  
    ```bash
        # ES2015转码规则
        $ npm install --save-dev babel-preset-es2015

        # react转码规则
        $ npm install --save-dev babel-preset-react
    ```
    
    OK
    
    ```bssh
      {
        "presets": [
          "es2015",
          "react",
        ],
        "plugins": []
      }
    ```

相关资料:[transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)
  
  
如图：![](/assets/rj/6.png)


