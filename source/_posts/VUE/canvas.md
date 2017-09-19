---
title: vue.js/canvas小项目问题集合
date: 2017-09-01 20:38:51
categories:
- 框架+库
- vue.js
---

#### 问题

<!--more-->

+ 1、scoped

这个可选` scoped `属性会自动添加一个唯一的属性 (比如 data-v-21e5b78) 为组件内 CSS 指定作用域

如图：![](/assets/vue/1.jpg)

这种写法并不会将`.index-bg`设置为唯一属性。

正确写法:

如图：![](/assets/vue/1.png)

eg:<b> `<style src="../assets/less/index.less" scoped></style>` </b>

+ 2、class/style 三元

```html
<div :class="['common-pos','common-alert',,isSwitch ? 'popup-score-alert-tab1' : 'popup-score-alert-tab2']"></div>
<div :style="{'height':currentIndex === 5 && currentStatus == true ? '2.8rem' : '.6rem' }"></div>
```

+ 3、canvas模糊

`<canvas :width={375} :height={667-64} @click="someClcikFunc"></canvas>`

+ 4、和APP方法交互

正常情况下，app需要调用的js方法需要暴露在`<script>`标签下面

例如：
```javascript
<script>
    function indexGoBack(){
        if(alading.mobileType()){
            window.webkit.messageHandlers.indexGoBack.postMessage(null);
        }else{
            window.Android.goback();
        }
    };
</script>
```
这个时候的方法，不管是前端点击调用app的方法，还是app端直接触发前端的方法都是可行的。

vue里面，

前端点击调用app的方法，可以直接写在`methods`里面，会成功触发；

app端调用前端的方法，在`methods`里面不会触发。

粗暴解决方法：

```javascript
export default {
    ...
    created(){
        window.commonFuncForAppAndJs = (e) => this.commonFuncForAppAndJs(e)
    },
    methods:{
        commonFuncForAppAndJs(e){
            console.log(e);
            //根据返回的值进行其他处理
        }
    }
}

···

