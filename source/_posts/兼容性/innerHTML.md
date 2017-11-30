---
title: IE8 下的 innerHTML 兼容问题
date: 2016-11-01 14:32:47
categories:
- 【兼容性】
- IE8下的innerHTML兼容问题
---

### 问题表述：

首先，该问题发生在写学校选择器上面。
正常显示应该为如下图：
![](/assets/jianrong/ie8/1.png)

然而写完发现IE8下是这种情况：

![](/assets/jianrong/ie8/4.jpeg)

通过console.log(xx.innerHTML) 发现数据标签闭合不完整导致显示不出来，如图所示：

![](/assets/jianrong/ie8/2.png)

<!--more-->

### 问题原因：

IE8下使用innerHTML造成了标签闭合不完全，主要为select标签：

![](/assets/jianrong/ie8/3.jpeg)


### 问题解决：

如下所示：

![](/assets/jianrong/ie8/5.jpeg)


#### 代码：

错误：

``` bash
  <span class="selectBox1">
      <select name="schoolssion" id="schoolssion" style="width:140px;">
          <option value="0">学校名称</option>
      </select>
  </span>
  <span class="selectBox1">
      <select id="gradeSelect" name="gradeSelect">
          <option value="0">年级</option>
      </select>
  </span>
```
``` bash
    $.ajax( {
        url:'url',
        data:{
            "region_id" : region_id,
            "school_type" : school_type
            },
        type:'post',
        dataType:'json',
        success:function(result){
            var mm = '';
            if(result.data.length > 0){
                for(var o in result.data){
                    mm += '<option value="'+result.data[o]["id"]+'"';
                    if(result.data[o]["id"] == school_id){
                        mm+='selected';
                    }
                    mm +='>'+result.data[o]["full_name"]+'</option>';
                }
            }else{
                mm += '<option value="0">学校名称</option>' 
            }
            document.getElementById("schoolssion").innerHTML = mm;
        },
        error : function(error) {
            console.log(error);
        }
    }); 

```
修改后的：

将id加在span上面

``` bash
    <span class="selectBox1" id="schoolssion">
        <select name="schoolssion">
            <option value="0">学校名称</option>
        </select>
    </span>
    <span class="selectBox1"  id="gradeSelect">
        <select name="gradeSelect">
            <option value="0">年级</option>
        </select>
    </span> 
```

``` bash
    document.getElementById("gradeSelect").innerHTML = '<select name="gradeSelect">' + aa + '</select>';
    
    success:function(result){
        var mm = '<select name="gradeSelect">';
        if(result.data.length > 0){
            for(var o in result.data){
                mm += '<option value="'+result.data[o]["id"]+'"';
                if(result.data[o]["id"] == school_id){
                    mm+='selected';
                }
                mm +='>'+result.data[o]["full_name"]+'</option>';
            }
        }else{
            mm = '<select name="gradeSelect"><option value="0">学校名称</option></select>'
        }
        
        document.getElementById("schoolssion").innerHTML = mm;
    }
```
