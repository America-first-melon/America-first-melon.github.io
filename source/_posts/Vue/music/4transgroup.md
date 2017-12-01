---
title: P4:vue下内置组件transition-group
date: 2017-10-02 12:08:16
categories:
- 【VUE】
- 常用技巧
---


#### 介绍

<!--more-->

```bash
<transition-group name="slide" tag="ul">
    <li v-for="item in searches" :key="item.id" class="item-class" @click="selectItem(item)" >
      <span class="text">{{item}}</span>
          <i class="icon icon-delete"></i>
      </span>
    </li>
</transition-group>

//styles
.slide-enter-active, .slide-leave-active{
    transition: all 0.1s
}
.slide-enter, .slide-leave-to{
    height: 0
}
```

过渡类：

![](/assets/vue/4.png)







