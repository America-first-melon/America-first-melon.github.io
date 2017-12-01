---
title: P6:vue下touches
date: 2017-10-02 15:08:18
categories:
- 【VUE】
- 常用技巧
---


#### 介绍

<!--more-->

+ 阻止冒泡：

```bash
@touchstart.stop.prevent="onShortcutTouchStart"
@touchmove.stop.prevent="onShortcutTouchMove"
@touchend.stop
methods:{
    onShortcutTouchStart(e){
        let firstTouch = e.touches[0];      //监听对象
        this.touch.y1 = firstTouch.pageY;   //初始值
    },
    onShortcutTouchMove(e){
        let moveTouch = e.touches[0];       //监听对象
        this.touch.y2 = moveTouch.pageY;    //滚动值
        let diffTouch = this.touch.y2 - this.touch.y1;  //滚动距离
    }
}

```
+ 阻止默认事件：

```bash
@touchstart.prevent="middleTouchStart"
@touchmove.prevent="middleTouchMove"
@touchend.prevent="middleTouchEnd"

methods:{
    middleTouchStart(e){
        this.touch.initiated = true;    
        const touch = e.touches[0];         //监听对象
        this.touch.startX = touch.pageX;    //监听水平距离
        this.touch.startY = touch.pageY;    //监听垂直距离
    },
    middleTouchMove(e){
        if(!this.touch.initiated){return}
        const touch = e.touches[0];
        const delataX = touch.pageX - this.touch.startX;    //水平滚动距离
        const delataY = touch.pageY - this.touch.startY;    //垂直滚动距离
        if(Math.abs(delataY) > Math.abs(delataX)){
            return              //纵向滚动了抛出
        }
        const left = this.currentShow === 'cd' ? 0 : -window.innerWidth;
        const offsetWidth = Math.min(0 , Math.max(-window.innerWidth , left + delataX));
        this.touch.percent = Math.abs(offsetWidth/window.innerWidth);   //水平滚动百分比
        this.$refs.lyricListWrapper.style.transform = `translate3d(${offsetWidth}px,0,0)`;  //滚动时需显示反应的DOM
        this.$refs.lyricListWrapper.style.transitionDuration = '0ms';
        this.$refs.imgWrapper.style.opacity = 1- this.touch.percent;            //滚动时需消失反应的DOM
        this.$refs.imgWrapper.style.transitionDuration = '0ms';
    },
    middleTouchEnd(e){
        let offsetWidth,opacity;
        if(this.currentShow == 'cd'){           //左半边
            if(this.touch.percent > .1){        //滚动>.1时候就该显示了
                opacity = 0;
                offsetWidth = -window.innerWidth;
                this.currentShow = 'lyric'
            }else{
                opacity = 1;            //取消滚动
                offsetWidth = 0;    
            }
        }else{
            if(this.touch.percent < .9){        //右半边反向滚动<.9
                opacity = 1;
                offsetWidth = 0;
                this.currentShow = 'cd';
            }else{
                opacity = 0;
                offsetWidth = -window.innerWidth; 
            }
        }
        this.$refs.lyricListWrapper.style.transform = `translate3d(${offsetWidth}px,0,0)`;  //右部分显示方式
        this.$refs.lyricListWrapper.style.transitionDuration = '400ms';
        this.$refs.imgWrapper.style.opacity = opacity;  //左部分显示方式
        this.$refs.imgWrapper.style.transitionDuration = '400ms';
        this.touch.initiated = false    //恢复初始化
    }
}
```

![](/assets/vue/3.gif)


