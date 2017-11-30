---
title: 通用Fetch和对象构造
date: 2017-03-20 18:20:56
categories:
- React.js
- 通用Fetch
---

<!--more-->

#### Fetch

```bash
import 'whatwg-fetch';
```

+ GET

```bash
export function get(base,url,params) {
    url = base + url
    /*get拼接*/
    if(params){
        let dataStr = '';
        Object.keys(params).forEach(key => {
            dataStr += key + '=' + params[key] + '&'
        });
        if(dataStr !== ''){
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr
        }
    }

    return fetch(url)
        .then(function(response) {
            if(response.status === 200){
                return response.json()
            }else{
                Toast.info(response.status+'  '+response.statusText, 1);
                return false;
            }
        }, function(error) {
            console.log(error)
        })
    };
```

+ POST

```bash
export function post (base,url,data) {
    url = base + url
    let dataStr = '';
    if(data){
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'
        });
        if(dataStr !== ''){
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        }
    }
    
    return fetch(url,{
            method:'POST',
            headers:{
                    //"Content-Type": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"     /*这种格式下需要进行楼上的dataStr*/
                },
            //body:JSON.stringify(data)
            body:dataStr,                               /*这种格式下需要进行楼上的dataStr*/
        }).then(function(response) {
            if(response.status === 200){
                return response.json()
            }else{
                Toast.info(response.status+'  '+response.statusText);
                return false;
            }
        }, function(error) {
        console.log(error)
        })
    };

```

+ UPLOADIMG

```bash
export function uploadImage(base,url,params){
    return new Promise(function (resolve, reject) {
        /*以FormData格式上传*/
        let formData = new FormData();
        for (var key in params){                        /*多个上传*/
            formData.append("imgs", params[key]);       /*imgs与后台约定，有的是files*/
        }
        // formData.append("img",file)                  /*单个上传*/
        
        fetch(base + url, {
            method: 'POST',
            body: formData,
        }).then((response) => response.json())
            .then((responseData)=> {
                resolve(responseData);
            })
            .catch((err)=> {
                Toast.fail(err);
                reject(err);
            });
        });
    }

```

#### 构造

例如：需要返回一个对象，里面包含value和label及children字段

创造基本构造：

```bash
export class Types{
    construtor({value,label}){      //传入所需字段
        this.value = value;
        this.label = label;
        this.children = [];
    }
}
```

传入生成的方法：

```bash
export function createSome(data){
    return new Types({
        value : data.value,
        label : data.label
    })
}
```






