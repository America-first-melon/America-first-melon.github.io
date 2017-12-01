---
title: findIndex
date: 2017-11-01 21:18:32
categories:
- 【ES6】
- findIndex使用
---


#### 问题

findIndex 方法（数组）

返回满足回调函数中指定的测试条件的第一个数组元素的索引值。

<!--more-->

```bash
function findIndex(list,song){
    return list.findIndex((item)=>{
        return item.id === song.id
    })
}
//如果不包含在里面，则返回 -1 ;
```

附录：一个localStorage 存取列表的过程

```bash
import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15;

function insertArray(arr,val,compare,maxLen){           //存取数组的方法
    const index = arr.findIndex(compare);
    if(index === 0){
        return
    }
    if(index > 0){
        arr.splice(index,1)
    }
    arr.unshift(val);
    if(maxLen && arr.length > maxLen){
        arr.pop();
    }
}

function deleteArray(arr,compare){                  //删除数组
    const index = arr.findIndex(compare)
    if(index>-1){
        arr.splice(index,1)
    }
}

export function saveSearch(query){                  //存至local
    let searches = storage.get(SEARCH_KEY,[])
    insertArray(searches,query,(item)=>{
        return item === query
    },SEARCH_MAX_LENGTH)
    storage.set(SEARCH_KEY,searches)
    return searches
}


export function loadSearch(){               //读取local
    return storage.get(SEARCH_KEY,[]);
}

export function deleteSearch(query){                //删除local
    let searches = storage.get(SEARCH_KEY,[])
    deleteArray(searches,(item)=>{
        return item === query
    })
    storage.set(SEARCH_KEY,searches)
    return searches
}

export function clearSearch(){          //清空local
    storage.remove(SEARCH_KEY)
    return []
}

```

