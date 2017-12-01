---
title: P9:Mixins的使用
date: 2017-10-03 12:08:18
categories:
- 【VUE】
- 常用技巧
---


#### 介绍

mixins 选项接受一个混合对象的数组 ，这些混合对象可以像正常的实例对象一样包含选项

<!--more-->

他们将再 vue.extends()里 最终选择使用相同的选项合并

//extends()允许声明扩展另一个组件 , 区别于mixins，组件自身的选项会比要扩展的源组件具有更高的优先级.

如果你混合包含一个钩子而创建组件本身也有一个，两个函数将被调用。

Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。

```bash
var mixin = {
    created: function () { console.log(1) }
}
var vm = new Vue({
    created: function () { console.log(2) },
    mixins: [mixin]
})
// => 1
// => 2

```

多个组件同时用到了一些methods,computed等什么时，可以考虑使用。

例：

+ 当list含有数据时，某个组件将改变，多个页面都将调用，这时将该方法单独拉出来。

```bash

export const palyListMixin = {
    computed:{
        ...mapGetter([
            'playList
        ])
    },
    mounted(){
        this.handlePlayList(this.playList)
    },
    //keep-alive组件的周期
    activated(){
        this.handlePlayList(this.playList)
    },
    watch:{
        playList(newVal){
            this.handlePlayList(newVal)
        }
    },
    methods:{
        //若引用了该mixin但是没有这个方法，将报错。
        handlePlayList(){
            throw new Error('components must handlePlayList function ')
        }
    }
}

组件引用：

methods:{
    handlePlayList(playList){
        const top = playList.length > 0 ? '60px' : '';
        this.$refs.recommendListWrapper.style.top = top;    //改变组件
    },
}

```

+ 当多个组件用到了搜索，需要保存关键字等操作时，

```bash
export const searchMixin = {
    data(){
        return{
            query:'',
        }
    },
    computed:{
        ...mapGetters([
            'searchHistory'     //load历史
        ])
    },
    methods:{
        saveSearch(){
            this.saveSearchHistory(this.query)  //保存搜索历史
        },
        onQueryChange(ii){
            this.query = ii                 //搜索时进行检索
        },
        addQuery(query){
            this.$refs.searchBox.setQuery(query);   //搜索时进行检索
        },
        ...mapActions([
            'saveSearchHistory',
            'deleteSearchHistory',      //多个组件需要同时进行的操作
        ])
    }
}

```




