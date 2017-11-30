---
title: jq的图片上传预览实现
date: 2016-12-02 14:40:39
categories:
- 【JS库】
- jQuery
---


### 图片的上传预览效果：

![](/assets/js/jquery/1.gif)

<!--more-->

### 实现图片的上传预览：

``` bash
​<!DOCTYPE html>
<html>
<head>
  <title>HTML5上传图片预览</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <script src="http://www.codefans.net/ajaxjs/jquery-1.6.2.min.js"></script>
</head>
<body>
  <img class="card-cover" src="../../../app/icons/daily/project-add.png" alt="">
  <div class="actions-modal-group">
    <span class="actions-modal-button color-bd">拍照<form name="form" id="form"><input name="file" class="file" type="file" accept="image/*" capture="camera"/></form></span>
    <span class="actions-modal-button color-bd">相册<input type="file" accept="image/*" class="file"></span>
    <span class="actions-modal-button color-yi">取消</span>
  </div>
  <script>
        /*获取file的url*/
       $(".file").change(function(){
           var objUrl = getObjectURL(this.files[0]) ;
           if (objUrl) {
               $(".card-cover").attr("src", objUrl) ;
           }
       }) ;
       function getObjectURL(file) {
           var url = null ;
           if (window.createObjectURL != undefined) {
               url = window.createObjectURL(file) ;
           } else if (window.URL != undefined) {
               url = window.URL.createObjectURL(file) ;
           } else if (window.webkitURL != undefined) {
               url = window.webkitURL.createObjectURL(file) ;
           }
           return url ;
       }
  </script>
</body>
</html>
```
*URL.createObjectURL()*方法会根据传入的参数创建一个指向该参数对象的URL.


JS代码：
```bash
<!--
    <input type="file" name="" id="file" />
    <img id="previewImage" style="height:200px;width:200px;" />
-->
      window.onload=function()
            {
                document.getElementById('file').onchange = function(evt) {

                    // 如果浏览器不支持FileReader，则不处理

                    if (!window.FileReader) return;

                    var files = evt.target.files;

                    for (var i = 0, f; f = files[i]; i++) {

                        if (!f.type.match('image.*')) {

                            continue;

                        }


                        var reader = new FileReader();

                        reader.onload = (function(theFile) {

                            return function(e) {

                                // img 元素

                                document.getElementById('previewImage').src = e.target.result;

                            };

                        })(f);


                        reader.readAsDataURL(f);

                    }

                }
            }
```
