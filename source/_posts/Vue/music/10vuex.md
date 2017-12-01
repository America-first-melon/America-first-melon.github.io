---
title: P10:VUEX的使用
date: 2017-10-03 14:25:22
categories:
- 【VUE】
- 常用技巧
---


#### 介绍

首先 store 文件夹下的结构为：

actions.js

getter.js

index.js

mutation-types.js

mutations.js

state.js

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



