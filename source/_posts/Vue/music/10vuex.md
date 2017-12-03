---
title: P10:VUEX的使用
date: 2017-10-03 14:25:22
categories:
- 【VUE】
- 常用技巧
---


#### 介绍

首先 store 文件夹下的结构为：

+ index.js

入口文件

+ state.js：

1,整个应用状态的数据
2,可以通过`this.$store.state`获取状态
3,用mapState将其映射到computed里面
```bash
    import {mapState} from 'vuex'
    export default{
        computed(){
            const state => state.count
        }
    }
```

+ getter.js

1,有时候我们需要从store中的state中派生出来一些状态,Vuex 允许我们在store中定义“getter”，就是store的计算属性，
2,可以通过`this.$store.getters.valueName`获取到这些状态
3,用mapGetter将其映射到computed里面去
```bash
getter:{
    doSome:state =>{
        return state.doSome.filter(todo => todo.done)
    }
}

export default {
    computed: mapGetters([
        'doSome'
    ])
}

```

+ mutation-types.js

定义一些const,触发方法，

例如：

```bash
export const SET_SOMETHING = "SET_SOMETHING"
```

+ mutations.js

1,变化，利用他来更改状态，接收的唯一参数就是`state`,`store.commit(mutationName)`是用来触发一个mutation的方法
2,可以通过`this.$store.commit`执行，例如：
```bash
const mutations = {
    mutationName(state){
        //如何改变，some code
    }
}
//this.$store.commit('mutationName');
```
3,用mapMutations将其映射到methods里面
```bash
export default {
    methods: mapMutations([
        'mutationName'
    ])
}
```

+ actions.js

改变状态，通过触发mutations实现，可以包含异步操作。

辅助函数为mapActions，与mapMutations类似，也是映射到methods。

```bash
const actions = {
    actionName({ commit }) {
        //dosomething
        commit('mutationName')
    }
}


export default {
    methods: mapActions([
        'actionName',
    ])
}
```

<!--more-->

`index.js`

```bash
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import {state} from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
```

`state.js`

```bash
const state = {
    singer:{},
    playing:false, 
    playList:[],  //正在播放列表
    mode: playMode.sequence,//播放模式
    currentIndex:-1, //播放位置,
    disc:{},  //歌单
    playHistory:loadPlay(),  //播放历史
}

export {
    state
}

```

`mutation-types.js`

```bash
export const SET_SINGER = 'SET_SINGER'
export const SET_PLAYING_STATE = 'SET_PLAYING_STATE'
export const SET_PLAY_LIST = 'SET_PLAY_LIST'
export const SET_PLAY_HISTORY = 'SET_PLAY_HISTORY'
```
`mutations.js`

```bash
import * as types from './mutation-types'
export const mutations = {
    [types.SET_SINGER](state,singer){
        state.singer = singer
    },
    [types.SET_PLAYING_STATE](state,flag){
        state.playing = flag
    },
    [types.SET_PLAY_LIST](state,list){
        state.playList = list
    },
    [types.SET_PLAY_MODE](state,mode){
        state.mode = mode
    },
    [types.SET_CURRENT_INDEX](state,index){
        state.currentIndex = index
    },
    [types.SET_PLAY_HISTORY](state,history){
    state.playHistory = history
    },
}
```


`getter.js`

```bash
export const singer = state => state.singer
export const playing = state => state.playing
export const playList = state => state.playList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex
export const currentSong = state => {
    return state.playList[state.currentIndex] || {}
}
export const playHistory = state => state.playHistory
```

`action.js`

```bash
export const deleteSong = function({commit,state},song){
    let playlist = state.playList.slice();
    let sequenceList = state.sequenceList.slice();
    let currentIndex = state.currentIndex;
    let pIndex = findIndex(playlist,song);
    playlist.splice(pIndex,1);
    let sIndex = findIndex(sequenceList,song);
    sequenceList.splice(sIndex,1);
    if (currentIndex > pIndex || currentIndex === playlist.length) {
        currentIndex --
    }
    commit(types.SET_PLAY_LIST, playlist)
    commit(types.SET_SEQUENCE_LIST, sequenceList)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    const playingState = playlist.length > 0 ;
    commit(types.SET_PLAYING_STATE,playingState)
}

```





