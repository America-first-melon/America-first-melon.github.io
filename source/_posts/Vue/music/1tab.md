---
title: P1:vue下的选项卡router-link
date: 2017-10-01 12:04:52
categories:
- 【VUE】
- 常用技巧
---


#### 介绍

router-link支持用户在具有路由功能的应用中点击导航，通过to属性制定目标地址，通过tag设置渲染标签，默认是a 

例：

<!--more-->

```bash
<div class="tab">
    <router-link tag="div" class="tab-item" :to="{ path: 'recommend', query: {} }">
        <span class="tab-link">recommend</span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="{ path: 'singer', query: {} }">
        <span class="tab-link">singer</span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="{ path: 'rank', query: {} }">
        <span class="tab-link">rank</span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="{ path: 'search', query: {} }">
        <span class="tab-link">search</span>
    </router-link>
</div>
.tab{
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
}
.tab .tab-item{
    flex: 1;
    text-align: center;
}
.tab .tab-item .tab-link{
    padding-bottom: 5px;
    color: rgba(255, 255, 255, 0.5);
}
.tab .router-link-active .tab-link{
    color: #ffcd32;
    border-bottom: 2px solid #ffcd32;
}

```



