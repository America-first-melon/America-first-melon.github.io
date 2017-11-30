---
title: map
date: 2016-10-08 21:30:17
categories:
- React.js
- L4:map应用
---


#### 上代码

修改的是 `src/index.js` 

<!--more-->

```javascript
    
    class ListArray extends Component{
        render(){
            return(
                <div>
                    {                           //如果往 {} 放一个数组，React.js 会把数组里面一个个元素罗列并渲染出来。
                        [
                            <span>1</span>,
                            <span>+</span>,
                            <span>1</span>,
                            <span>=</span>,
                            <span>2</span>
                        ]
                    }
                </div>
                )
            }
    }
    
```

![](/assets/rj/1.png)


SO..

```javascript
const users = [
    {username:'James',age:'31',team:'骑士'},
    {username:'Anthony',age:'31',team:'尼克斯'},
    {username:'Harden',age:'27',team:'火箭'}
]

class ForLoop extends Component{
    render(){
        const userEle = [];
        // for(let user of users){                    //根据ListArray去For循环进去HTML数组
        //   userEle.push(
        //     <div>
        //       <div>姓名：{user.username}</div>
        //       <div>年龄：{user.age}</div>
        //       <div>队伍：{user.team}</div>
        //       <hr />
        //     </div>
        //   )
        // }
        
        for(var i in users){
            userEle.push(
                <div>
                    <div>姓名：{users[i].username}</div>
                    <div>年龄：{users[i].age}</div>
                    <div>队伍：{users[i].team}</div>
                    <hr />
                </div>
                )
            }

    return(
        <div>{userEle}</div>
        )
    }
}

class MapFunction extends Component{
    render(){
        return(
            <div>
                {users.map((user)=>{              // 根据ES6 的语法 map 遍历
                    return(
                        <div>
                            <div>姓名：{user.username}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}


class User extends Component{
    render(){
        const user = this.props.user;
        //const {user} = this.props;      两种写法
        return(
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <hr />
            </div>
            )
      }
}

class MapFunctionTwo extends Component{
    render(){
        return(
            <div>
                {users.map((user,i)=>{return(<User key={i} user={user}/>)})}
            </div>
            )
    }
}

//对于这种列表式的，都要为每个元素加上 key ，这个 key 必须是每个元素唯一的标识。一般就是后台返回的id
//没有key的话，如果只是换了Jamse和Anthony的位置，React.js就会重新渲染元素出来，然后Virtual-DOM..
//有了就直接换位置就好了


```

![](/assets/rj/2.png)


```javascript

ReactDOM.render(
    <MapFunctionTwo />,
    document.getElementById('root')
);

```


来个[演示地址](https://america-first-melon.github.io/reactJs-Demo/L1/);

这里有个写法：
/*当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，用 props 传递数据或者函数来管理这种依赖或着影响的行为。*/
但是用Redux是更好的选择

