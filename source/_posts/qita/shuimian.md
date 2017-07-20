---
title: 睡眠排序
date: 2016-09-15 14:06:03
categories:
- 前端
- 其他
---

#### 睡眠排序

代码：

<!--more-->

```bash
<script>
    function sleepsort(){
        var arr = [];
        console.log(arguments);
        for(var i = 0 ,il = arguments.length; i < il;i++){
            (function(args,index){
                setTimeout(function(){
                    document.getElementById("result").innerHTML += args[index] + ',';
                    arr.push(args[index]);
                    console.log(arr);
                },args[index]);
            }(arguments,i))
        }
    }
    sleeepsort(5,3,3,1,12,2,6,7,8);
</script>
```
