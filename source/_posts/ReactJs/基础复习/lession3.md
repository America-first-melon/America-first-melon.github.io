---
title: L3:props/state应用
date: 2016-10-08 19:55:56
categories:
- 【React.js】
- 基础复习
---


#### 上代码

修改的是 `src/index.js` 

<!--more-->

```javascript

class LikeButton extends Component{

    static defaultProps = {     //这里是对 props 中各个属性的默认配置。
        likedText: 'XXXX',
        unlikedText: '√√√√√√'
    }


    constructor(){              //在 constructor 里面初始化 state。
        super();
        this.state = {
            isLiked : false
        }
    }

    handleOnClick(){
        console.log(this.state.isLiked);//false
        
        //setState的方法由父类Component提供，调用的时候React.js会更新state，并重新调用render并渲染DOM
        //里面也可以放个函数。(cnashu)=>{function};
        this.setState({
            isLiked : !this.state.isLiked
        })
        
        console.log(this.state.isLiked);//false---->放到队列里，缓存ing,最后一起更新.so...在使用 React.js 的时候，不需要担心多次进行 setState 会带来性能问题。
        

        /********************/
            if(this.props.onClick){
                this.props.onClick();
            }
        /********************/
    }


    render(){
        const wording = this.props.wording || {
                liked:'取消',
                unliked:'点赞'
            }
            
        return(
            <div>
                <button onClick={this.handleOnClick.bind(this)}>
                    {this.state.isLiked ? '赞' : '踩'} 👍
                </button>
                
                {/* 两种写法 */}
                
                <button onClick={()=>{this.handleOnClick()}}>
                    {this.state.isLiked ? '赞' : '踩'} 👍
                </button>
                
                <button onClick={()=>{this.handleOnClick()}}>
                    {this.state.isLiked ? wording.liked : wording.unliked} 👍
                </button>

                <button onClick={()=>{this.handleOnClick()}}>
                    {this.state.isLiked ? this.props.likedText : this.props.unlikedText} 👍
                </button>
            </div>
            )
        }
    }

    ReactDOM.render(
        <div>
            <LikeButton onClick={()=>console.log('11')} />   
            {/*这些 on 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上。这里不会log出来11。要想出来得加上/********************这里的if判断*/}
            
            
            <LikeButton wording={{liked:'已赞',unliked:'赞'}} /> 
            {/* props可以包括字符串，对象，数字，数组甚至是函数。props 一旦传入，就不可以在组件内部对它进行修改。*/}
            
            
            <LikeButton />
         </div>,
        document.getElementById('root')
    );
    
```

还有两个概念：

没有 state 的组件叫无状态组件`（stateless component）`

设置了 state 的叫做有状态组件`（stateful component）`

状态会带来管理的复杂性......



