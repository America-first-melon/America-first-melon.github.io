---
title: P7:react微信分享组件
date: 2017-11-01 21:30:29
categories:
- 【React.js】
- AMap公众号
---

<!--more-->

#### 组件封装

---src
    |
----common
         |
---------wechat
              |
--------------share.js
--------------wxUtils.js

```share.js
export default function Share(config){
    window.wx.config({
        debug: false, // 开启调试模式
        appId: config.appid, // 必填，公众号的唯一标识
        timestamp: config.timestamp, // 必填，生成签名的时间戳
        nonceStr: config.nonceStr, // 必填，生成签名的随机串
        signature: config.signature, // 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
}

Share.prototype = {
    constructor:Share,
    init(config){
        this.imgUrl = config.imgUrl;
        this.link = config.link;
        this.description = config.description;
        this.title = config.title;
        
        window.wx.ready(()=>{
            this.toFriend();
            this.toTimeline();
        });
        
        window.wx.error(res=>{
            alert(`${res.errMsg}`)
        });
    },
    
    toFriend(){
        window.wx.onMenuShareAppMessage({
            imgUrl: this.imgUrl,
            link: this.link,
            title: this.title,
            desc: this.description,
            success: function () {
                // 用户确认分享后执行的回调函数
                alert('success')
            },
        });
    },
    
    toTimeline() {
        window.wx.onMenuShareTimeline({
            imgUrl: this.imgUrl,
            link: this.link,
            title: this.title,
            desc: this.description,
            success: function () {
                // 用户确认分享后执行的回调函数
                alert('succes11s')
            },
        });
    }
}

```


`wxUtils`

```javascript
import Share from './share';

let wxUtils = {};

wxUtils.share = function(shareInfo){
    getConfig(shareInfo)
}

function getConfig(shareInfo){
    let href = window.location.href.split('#')[0];
    post(ROOT_URL,'/share',{urlName:`${href}`}).then((res)=>{
        //这里不一定需要 传递链接进行微信加密。。。
        console.log(res)
        if(res){
            share2wx(res,shareInfo)
        }else{
            Toast.info('微信验证失败');
        }
    })
}

function share2wx(config,shareInfo){
    const share = new Share({
        appid: 'appid', // 必填，公众号的唯一标识
        timestamp: config.timestamp, // 必填，生成签名的时间戳
        nonceStr: config.noncestr, // 必填，生成签名的随机串
        signature: config.signature, // 必填，签名
    });
    share.init(Object.assign({}, shareInfo));
}

export default wxUtils
```

`使用：`

```javascript

import wxUtils from 'src/common/wechat/wxUtils'

...some
<Button onClick={()=>{
    wxUtils.share({
        title: "title",
        description: "description",
        link: window.location.href,
        imgUrl: "https://www.baidu.com/img/bd_logo1.png"
    });
}}></Button>

```





