---
title: 原生ajax实现jq的方式及跨域及ajax封装
date: 2017-04-01 12:39:47
categories:
- 前端
- 常用
---

#### 代码

<!--more-->

```javascript

function ajax(){ 
   var ajaxData = { 
      type:arguments[0].type || "GET", 
      url:arguments[0].url || "", 
      async:arguments[0].async || "true", 
      data:arguments[0].data || null, 
      dataType:arguments[0].dataType || "text", 
      contentType:arguments[0].contentType || "application/x-www-form-urlencoded", 
      beforeSend:arguments[0].beforeSend || function(){}, 
      success:arguments[0].success || function(){}, 
      error:arguments[0].error || function(){} 
   } 
    ajaxData.beforeSend() 
    var xhr = createxmlHttpRequest();  
    xhr.responseType=ajaxData.dataType; 
    xhr.open(ajaxData.type,ajaxData.url,ajaxData.async);  
    xhr.setRequestHeader("Content-Type",ajaxData.contentType);  
    xhr.send(convertData(ajaxData.data));  
    xhr.onreadystatechange = function() {  
         if (xhr.readyState == 4) {  
            if(xhr.status == 200){ 
                  ajaxData.success(xhr.response) 
            }else{ 
                  ajaxData.error() 
            }  
         } 
      }  
   } 

   function createxmlHttpRequest() {  
      if (window.ActiveXObject) {  
         return new ActiveXObject("Microsoft.XMLHTTP");  
      } else if (window.XMLHttpRequest) {  
         return new XMLHttpRequest();  
      }  
   } 

   function convertData(data){ 
      if( typeof data === 'object' ){ 
         var convertResult = "" ;  
         for(var c in data){  
            convertResult+= c + "=" + data[c] + "&";  
         }  
         convertResult=convertResult.substring(0,convertResult.length-1) 
         return convertResult; 
      }else{ 
         return data; 
      } 
   } 
   
   ajax({ 
      type:"POST", 
      url:"ajax.php", 
      dataType:"json", 
      data:{"val1":"abc","val2":123,"val3":"456"}, 
      beforeSend:function(){ 
         //some js code 
      }, 
      success:function(msg){ 
         console.log(msg) 
      }, 
      error:function(){ 
         console.log("error") 
      } 
   }) 

```

#### Unsupported Media Type 415 错误码解析

+ 错误类型1：

`  "status":415  &&  "error":"Unsupported Media Type" `

原因：没有使用JSON.stringify(rowData)方法将请求参数转化为json字符串


+ 错误类型2：

`  "status":400   &&  "error":"Bad Request" `

原因：未使用[contentType : 'application/json',]配置指定请求参数格式。


#### 跨域

跨域错误解决-->设置代理

如图：

![](/assets/qita/18.png)

在 server 配置里

```bash
location /getVideo{

   add_header Access-Control-Allow-Origin *;

   add_header Access-Control-Allow-Methods POST,GET,OPTIONS,DELETE;

   proxy_pass url;

}

location ~ \.(html|json|asp|php|gif|jpg|jpeg|png|bmp|ico|rar|css|js|json|map|md|zip|java|jar|txt|flv|swf|mid|doc|ppt|xls|pdf|txt|mp3|wma|ttf|woff|woff2)$  {
   root D:\www;
   expires 24h;
}

```

#### $.ajax简单封装

```javascript
var common = {
      ajaxData:function(params, val, callback){
            $.ajax({
                  type: params.type,
                  url: rootUrl + params.url,
                  data: params.data,
                  dataType: params.dataType,
                  async: val ,
                  success:function(response){
                        callback(response)
                  },
                  error:function(error){
                        console.log(error)
                  }
            })
      },
      oneGetReq:function(callback){
            this.ajaxData({/*对象*/},false,function(response){
                  callback(response);
            });
      }
};

common.oneGetReq(function(datas){console.log(datas)});

```




