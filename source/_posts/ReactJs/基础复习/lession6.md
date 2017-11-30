---
title: L6:refs/this.props.children/dangerouslySetInnerHTML
date: 2016-10-12 15:32:28
categories:
- React.js
- 基础复习
---


#### refs

修改的是 `src/index.js` 

<b>获取真实的DOM节点：</b>

组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。

只有当它插入文档以后，才会变成真实的 DOM 。

<!--more-->


```javascript

class AutoFocusInput extends Component{
    componentDidMount(){
        //this.input.focus();                   //也可以这样写
        this.refs.text.focus();                 //this.refs.[refName] 就会返回这个真实的 DOM 节点。
    }
    
    render(){
        return (
            //<input ref={(input)=>this.input = input} />       //也可以这样写
            <input ref="text" />             //有时需要从组件获取真实 DOM 的节点，这时就要用到 ref 属性
            )
        }
    }
    
    ReactDOM.render(
        <AutoFocusInput />,
        document.getElementById('root')
    );

```



#### this.props.children

<b>*嵌套的结构在组件内部都可以通过 props.children 获取到*</b>

```javascript

class Card extends Component {
    render(){
        return(
            <div>
                {this.props.children[0]}    //这里的children是个数组     
            </div>
        )
    }
}

ReactDOM.render(
    <Card>
        <h2>标题</h2>
        <div>开源免费专业简单</div>
        订阅：<input />
    </Card>,
    document.getElementById('root')
);

```


#### dangerouslySetInnerHTML

因为React.js的转义特性,所以 ![](/assets/rj/3.png)

如何展示动态的效果呢？需要给 `dangerouslySetInnerHTML` 传入一个对象，这个对象的 `__html` 属性值就相当于元素的 `innerHTML`.


```javascript

class Editor extends Component {
    constructor(){
    super();
        this.state = {
        content : '<h1>人生几何 能够得到只鸡</h1>'      
        }
    }
    
    render(){
        return(
            <div className="editor-wrapper" dangerouslySetInnerHTML={{__html:this.state.content}}></div>
        )
    }
}

ReactDOM.render(
    <Editor />,
    document.getElementById('root')
);

```








