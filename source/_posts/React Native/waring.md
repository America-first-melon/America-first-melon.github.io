---
title: Warning setState(...) Can only update a mounted or mounting component]...
date: 2017-02-10 14:31:10
categories:
- React Native
- Warning setState(...) Can only update a mounted or mounting component]...
---


#### 错误

Warning: setState(...): Can only update a mounted or mounting component.

![](/assets/rn/1.png)

<!--more-->

#### 分析

这个错误之前就见过，但是稍微处理下就好了。这次是在写验证码倒计时的时候出现的，两种写法：

`完蛋的`

``` bash
class CountDownText extends Component{
  constructor(props){
    super(props);
    let timeLeft = this.props.timeLeft > 0 ? this.props.timeLeft : 60;
    this.state = {
      timeLeft: timeLeft,
    }
  }
  countdownfn(timeLeft,callback){
    if(timeLeft>0){
      let that = this;
      let interval = setInterval(function(){
        if(that.state.timeLeft < 1){
          clearInterval(interval);
          callback();
        }else{
          let totalTime = that.state.timeLeft;
          that.setState({
            timeLeft:totalTime - 1
          })
        }
      },1000)
    }
  }
  componentDidMount(){
    let time = this.state.timeLeft;
    let afterEnd = this.props.afterEnd;
    this.countdownfn(time,afterEnd);
  }
  render(){
    return(
        {this.state.timeLeft}秒重新获取
    )
  }
};
```

`不报错的`,参照官网的interval写法
``` bash
class CountDownText extends Component{
  constructor(props){
    super(props);
    let timeLeft = this.props.timeLeft > 0 ? this.props.timeLeft : 60;
    this.state = {
      timeLeft: timeLeft,
    }
  }
  componentDidMount(){
    var that = this.props.afterEnd;
    this.timer = setInterval(
      ()=>{
        if(this.state.timeLeft < 1){
          clearInterval(this.timer);
          that();
        }else{
          this.setState({
            timeLeft:this.state.timeLeft - 1
          })
        }
      },
      1000
    );
  }

  componentWillUnmount(){
    this.timer && clearTimeout(this.timer);
  }

  render(){
    return(
        {this.state.timeLeft}秒重新获取
    )
  }
};
```

**原因：** setState在异步的callback里执行，而这个时候由于返回上一页，组件已经被unmount了。

组件引用方法：

``` bash
{
  this.state.countingDown ?
  获取验证码 :
   {this.setState({countingDown:true})}}
    timeLeft={10}
  />
}
```
