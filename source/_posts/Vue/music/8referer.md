---
title: P8:vue下请求接口ref欺骗
date: 2017-10-02 15:08:38
categories:
- 【VUE】
- 常用技巧
---


#### 介绍

referer欺骗的后台接口处理：

<!--more-->

----build
        |
--------dev-server.js

```bash
var app = express();
var apiRoutes = express.Router();
apiRoutes.get('/getRecsList', function (req, res) {
        var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        axios.get(url, {
                headers: {
                        referer: 'https://c.y.qq.com/',
                        host: 'c.y.qq.com'
                },
                params: req.query   //node的方法
        }).then((response) => {
                res.json(response.data)
                //一种返回为"MusicJsonCallback({\"retcode\":0,\"code\":0,\"subcode\":0,\"lyric\":\"W3RpOuWRiu...处理
                //let ret = response.data;
                //if(typeof ret === 'string'){
                //        let reg = /^\w+\(({[^()]+})\)$/;
                //        let matches = ret.match(reg);
                //        if(matches){
                //                ret = JSON.parse(matches[1])
                //        }
                //}
                //res.json(ret)
        }).catch((e) => {
                console.log(e)
        })
});
app.use('/api', apiRoutes);

```

![](/assets/vue/5.png)
![](/assets/vue/6.png)


----js
     |
-----api.js

```bash
export function getRecsList(){
        let url = '/api/getRecsList';
        let data = {...}
        return axios.get(url,{params:data}).then((res)=>{
                return Promise.resolve(res.data)
        })
}
```








