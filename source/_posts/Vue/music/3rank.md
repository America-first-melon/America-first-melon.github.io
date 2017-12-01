---
title: P3:vue下的简单排行榜输出
date: 2017-10-02 12:08:16
categories:
- 【VUE】
- 常用技巧
---


#### 介绍

如图所示+DOM：

![](/assets/vue/3.png)

<!--more-->

以前写都是判断index === 1  然后 index  === 2 .... 真垃圾

```bash

<span :class="getRankCls(index)" v-text="getRankText(index)"></span>

methods:{
    getRankCls(index){
      if (index <= 2) {
        return `icon icon${index}`
      } else {
        return 'text'
      }
    },
    getRankText(index){
      if (index > 2) {
        return index + 1
      }
    }
}
```







