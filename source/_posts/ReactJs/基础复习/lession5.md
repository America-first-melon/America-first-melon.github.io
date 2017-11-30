---
title: L5:生命周期解释
date: 2016-10-08 23:55:02
categories:
- 【React.js】
- 基础复习
---


#### 简述

<b>组件的挂载：</b>React.js将组件渲染，并且构造DOM元素然后塞入页面的过程称为组件的挂载

<!--more-->

<b>在React.js中完整的过程是这样：</b>

```bash

-->constructor()

-->componentWillMount()

-->render()

//构造DOM元素插入页面

-->componentDidMount()

//...

//即将从页面中删除

-->componentWillUnmount()

//从页面删除

```

![](/assets/rj/15.png)

#### 代码

修改的是 `src/index.js` 


```javascript

class Header extends Component{
    constructor(){
        super()
        this.state = {
            date:new Date()
        }
    }

    componentWillMount(){
        this.timer = setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
            )
        }
    }


    class Index extends Component{
        constructor(){
            super()
            this.state = {
                isShowClock : true
            }
        }
        
        render(){
            return (
                <div>
                    {this.state.isShowClock ? <Header /> : null}
                    <button onClick={()=>{this.setState({isShowClock:!this.state.isShowClock})}}>显示或隐藏</button>
                </div>
                )
            }
        }

    ReactDOM.render(
        <Index />,
        document.getElementById('root')
    );

```

<b>组件的更新阶段</b>
```bash
/*
shouldComponentUpdata(nextProps,nextState):控制组件是否重新渲染.false组件不会重新渲染。用于性能优化

componentWillReceiveProps(nextProps):组件从父组件接收到新的props之前

componentWillUpdata():组件开始重新渲染之前

componentDidUpdate():组件重新渲染并更改到真实DOM以后引用
*/
```


<b>大神文章</b>[Virtual DOM 算法](https://github.com/livoras/blog/issues/13)








