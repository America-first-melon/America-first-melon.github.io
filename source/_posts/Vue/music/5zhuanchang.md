---
title: P5:vue下转场动画/其他动画
date: 2017-10-02 12:08:18
categories:
- 【VUE】
- 常用技巧
---


#### 转场动画

就是用的transform、translate、transition

<!--more-->

```bash
    1.点击这里跳转
    <li@click="selectItem(item)">转</li>
    2.
    <router-view></router-view>
    3.
    methods:{
        selectItem(item){
            this.$router.push({
                path:`/recommend/${item.dissid}`
            });
        },
    }
    4.
    <transition name="slide">
        <div>跳转到的组件</div>
    </transition>
    5.
    .slide-enter-active,
    .slide-leave-active {
        will-change: transform;
        transition: all 400ms;
        backface-visibility: hidden;
        perspective: 1000;
    }
    .slide-enter {
        /*opacity: 1;*/
        transform: translate3d(100%, 0, 0);
    }
    .slide-leave-to {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
```

例如：

![](/assets/vue/1.gif)


#### 其他动画

+ 上下分离
    
```bash
<transition name="normal">
    <div class="top"></div>
    <div class="bottom"></div>
</transition>

.normal-enter-active,.normal-leave-active{
    transition: all 400ms;
}
.normal-enter,.normal-leave-to{
    opacity: 0;
}
.normal-enter-active .top,.normal-enter-active .bottom,.normal-leave-active .top,.normal-leave-active .bottom{
    transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
}
.normal-enter .top,.normal-leave-to .top{
    transform: translate3d(0, -100px, 0)
}
.normal-enter .bottom,.normal-leave-to .bottom{
    transform: translate3d(0, 100px, 0)
}

```


+ 左右拉伸
```bash
<div class="cd" :class="isRotate">
    <img class="image" :src="currentSong.image">
</div>
.image{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation:opacity 600ms ;
}
@keyframes opacity{
    0%{opacity:0;filter: blur(10px);transform:scaleX(1.5);}
    100%{opacity:1;filter: blur(0);transform:scaleX(1);}
}

```
+ 360旋转

```bash
<div class="cd" :class="isRotate">
    <img class="image" :src="currentSong.image">
</div>
isRotate(){
    return this.playing ? 'rotate-play' : 'rotate-play rotate-pause'
}
.rotate-play{
    animation:rotate 50s linear infinite ;
}
.rotate-pause{
    animation-play-state: paused;
}
@keyframes rotate{
    0%{transform: rotate(0)}
    100%{transform: rotate(360deg)}
}
```

预览：

![](/assets/vue/2.gif)








