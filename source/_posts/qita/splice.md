---
title: splice应用
date: 2016-10-15 11:08:53
categories:
- 前端
- 其他
---

#### 睡眠排序

代码：

<!--more-->

```bash
<script>
    for(var i=ranksList.length-1;i>=0;i--){
        if(Number(ranksList[i].use_milsecond) == 0){
            ranksList.splice(i,1);
            //某个值为0在数组中删除
        }
    };

</script>
```