---
title: 通用Fetch
date: 2017-03-20 18:20:56
categories:
- 【React.js】
- 通用Fetch
---

<!--more-->

#### Fetch

```bash
import 'whatwg-fetch';
```
+ commonParam

```bash

export function param(data){
    let url = '';
    for(var k in data){
        let value = data[k] !== undefined ? data[k] : '';
        url += '&' + k + '=' + encodeURIComponent(value);
    }
    return url ? url.substring(1) : '';     //substring(1),返回1到length的字符串
}

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
    
    //如果用楼上的commonParam
    //url += (url.indexOf('?') < 0 ? '?' : '&') + param(params)

    return fetch(url)
        .then(function(response) {
            if(response.status === 200){
                return response.json();
                //return Promise.resolve(response)  //res直接resolve也可以，见下图
            }else{
                Toast.info(response.status+'  '+response.statusText, 1);
                return false;
            }
        }, function(error) {
            console.log(error)
        })
    };
```

response:
![](/assets/rj/20.png)
Promise.resolve(response.data):
![](/assets/rj/21.png)


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

+ JSONP

```bash
import originJsonp from 'jsonp'
export function jsonp(url,data,option){
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
    return new Promise((resolve,reject)=>{
        originJsonp(url,option,(err,data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}
//使用直接return jsonp(各种参数)
```







