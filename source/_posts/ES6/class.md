---
title: 对象构造
date: 2017-11-01 21:18:28
categories:
- 【ES6】
- class对象构造
---


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

    //自定义方法
    getsome(){
        if(this.makeSome){
            return Promise.resolve(this.makeSome)
        }
        return new Promise((resolve,reject)=>{
            asyncFunc(this.value).then((res)=>{
                if(code === 200){
                    this.makeSome = res.someData;
                    resolve(this.makeSome)
                }else{
                    reject('no makeSome')
                }
            })
        })
    }
}
```

传入生成的方法：

```bash
export function createSome(data){c
    return new Types({
        value : data.value,
        label : data.label
    })
}
```


