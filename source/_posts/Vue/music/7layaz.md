---
title: P7:vue下路由懒加载
date: 2017-10-02 12:08:18
categories:
- 【VUE】
- 常用技巧
---


#### 介绍

package.json:

<!--more-->

"vue": "^2.4.2",
"vuex": "^2.4.1",
"vue-router": "^2.7.0",
"vue-template-compiler": "^2.4.2",
"webpack": "^2.6.1",

router.js

```bash
import Vue from 'vue'
import Router from 'vue-router'

// import Recommend from 'src/pages/recommend/recommend'
const Recommend = (resolve) => {
    import('src/pages/recommend/recommend').then((module)=>{
        resolve(module)
    })
}

// import Singer from 'src/pages/singer/singer'
const Singer = (resolve) => {
    import('src/pages/singer/singer').then((module)=>{
        resolve(module)
    })
}


// import Rank from 'src/pages/rank/rank'
const Rank = (resolve) => {
    import('src/pages/rank/rank').then((module)=>{
        resolve(module)
    })
}
// import Search from 'src/pages/search/search'
const Search = (resolve) => {
    import('src/pages/search/search').then((module)=>{
        resolve(module)
    })
}

// import UserCenter from 'src/components/user-center/user-center'
const UserCenter = (resolve) => {
import('src/components/user-center/user-center').then((module)=>{
resolve(module)
})
}

// import SingerDetail from 'src/components/singer-detail/singer-detail'
const SingerDetail = (resolve) => {
    import('src/components/singer-detail/singer-detail').then((module)=>{
        resolve(module)
    })
}
// import SongsSheet from 'src/components/songs-sheet/songs-sheet'
const SongsSheet = (resolve) => {
    import('src/components/songs-sheet/songs-sheet').then((module)=>{
        resolve(module)
    })
}
// import RankList from 'src/components/rank-list/rank-list'
const RankList = (resolve) => {
    import('src/components/rank-list/rank-list').then((module)=>{
        resolve(module)
    })
}

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            component: Recommend,
            children:[
                {
                    path:':id',
                    component:SongsSheet
                }
            ]
        },
        {
            path: '/singer',
            component: Singer,
            children:[
                {
                    path:':id',
                    component:SingerDetail
                }
            ]
        },
        {
            path: '/rank',
            component: Rank,
            children:[
                {
                    path:':id',
                    component:RankList
                }
            ]
        },
        {
            path: '/search',
            component: Search,
            children:[
                {
                    path:':id',
                    component:SingerDetail
                }
            ]
        },
        {
            path:'/user',
            component:UserCenter
        }
    ]
})

```

main.js

```bash
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick'
import store from './store'

fastclick.attach(document.body)
Vue.use(VueLazyload, {
    loading: require('src/common/images/loading.svg'),
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})


```










