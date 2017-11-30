---
title: L2:bind的使用
date: 2016-10-08 14:22:17
categories:
- 【React.js】
- 基础复习
---


#### 上代码

修改的是 `src/index.js` 

<!--more-->

```javascript

class Title extends Component{
  handleClick(word,e){
      console.log(e.target);
      console.log(this);
      console.log(word);
  }
  render(){
return(
    <div>
        <h1 onClick={this.handleClick}>测试点击event无bindt</h1>{/* 没有绑定bind，console.log(this),打印null,不能通过this获取实例。 */}
        <h1 onClick={this.handleClick.bind(this)}>测试点击event有bind</h1>{/*绑定之后可以获得this*/}
        <h1 onClick={this.handleClick.bind(this,'参数')}>测试点击event有bind和参数</h1>{/*第一个参数word*/}
        /*还可以这样写，不用bind*/
        <h1 onClick={()=>{this.handleClick()}}>测试点击event第二种方法</h1>
    </div>
    )
  }
}

ReactDOM.render(
    <Title />,
    document.getElementById('root')
);

```



