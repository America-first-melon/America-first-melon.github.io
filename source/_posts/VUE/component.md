---
title: vue组件互相传值
date: 2017-09-01 20:01:01
categories:
- vue.js
- vue组件互相传值
---


#### 父组件传值给子组件

<!--more-->

父：

```javascript
<template>
    <div>
        <HeadBar :titleObj="initTitle"></HeadBar>
    </div>
</template>
import HeadBar from '../component/headBar.vue';
export default {
    data(){
        return{
            initTitle:{
                title:'戳泡泡',
                style:'background:rgba(0, 0, 0, 0.1);',
                isIndex:1
            }
        }
    },
    ...
    components:{
        HeadBar
    }
}

```

子：

```javascript
<template>
    <div :style="titleObj.style">
        {{titleObj.title}}
    </div>
</template>
export default {
    ...
    props:['titleObj']
} 
```

#### 子组件绑定父组件方法

子：

```javascript
<template>
    <pressBtn @click.native="bindParentFunc"></pressBtn>
</template>
export defalut {
    ...
    components:{
        pressBtn
    },
    methods:{
        bindParentFunc(){
            //this.$parent.initAlertScore.isShow = false;
            this.$emit('playAgainGame');
        }
    }
}
```

注释：`vm.$emit(event,[...args]) 触发当前实例上的事件。附加参数都会传给监听器回调。`

父：

```javascript
<template>
    <popupScore v-if="initAlertScore.isShow" @playAgainGame="isClickPlayAgain"></popupScore>
</template>
export default {
    ...
    methods:{
        isClickPlayAgain(){
            //some...
        }
    }
}
```
