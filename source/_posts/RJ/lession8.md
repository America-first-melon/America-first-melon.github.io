---
title: 评论案例
date: 2016-10-13 11:12:28
categories:
- 框架+库
- React.js
---


#### 1

<b>实现持久化用户名：</b>

将用户输入的用户名保存到LocalStorage中

每当用户名框失去焦点，保存用户名到LocalStorage：

<!--more-->

```javascript
...

handleUsernameBlur(e){
    localStorage.setItem('username',e.target.value);
}

componentWillMount () {
    const username = localStorage.getItem('username');
    if(username){
        this.setState({
            username
            })
        }
    }
...
<div className="comment-filed-input">
    <input 
    value={this.state.username} 
    onChange={this.handleUsernameChange.bind(this)} 
    onBlur={this.handleUsernameBlur.bind(this)} 
    />
</div>
...

```
如图：![](/assets/rj/5.png)



#### 2

<b>实现持久化评论列表：</b>

同样保存至LocalStorage中

```javascript
//发布按钮点击添加事件并传参
...

handleSubmitComment (comment) {
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
        comments: this.state.comments
    });
    this._saveComments(this.state.comments);
}

_saveComments(comments){
    localStorage.setItem('comments',JSON.stringify(comments))
}

componentWillMount(){
    let comments = localStorage.getItem('comments');
    if(comments){
        comments = JSON.parse(comments);
        this.setState({comments});
    }
}

...

```

#### 3

<b>评论发布时间：</b>

在JSON 字符串中增加 `createdTime:+new Date()`

在列表render的时候去更新

```javascript

componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(
        this._updateTimeString.bind(this),
        5000                                //5秒之后更新
    )
}

componentWillUnmount () {
    clearInterval(this._timer)              //卸载定时器
}


_updateTimeString () {
    const duration = (+Date.now() - this.props.comment.createdTime) / 1000
    this.setState({
        timeString: duration > 60
            ? `${Math.round(duration / 60)} 分钟前`                //ES6语法：字符串模板--使用反引号 ` 来创建字符串，包裹变量${vraible}
            : `${Math.round(duration)} 秒前`
        })
}
...
<span className='comment-createdtime'>
    {this.state.timeString}
</span>
...


```

#### 4

<b>评论删除：</b>

这里必须一层一层传递 props 才可以获取到删除的 评论index

1.最里一层

```javascript

handleDeleteComment () {
    if (this.props.onDeleteComment) {
        this.props.onDeleteComment(this.props.index)
    }
}
...
<span 
    onClick={this.handleDeleteComment.bind(this)}
    className='comment-delete'>
    删除
</span>

```

2.中间一层

```javascript
...
    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
...
{this.props.comments.map((comment, i) =>
    <Comment
        comment={comment}
        key={i}
        index={i}
        onDeleteComment={this.handleDeleteComment.bind(this)} />
)}
...

```

3.最外一层

```javascript
...
handleDeleteComment (index) {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
}
...
<CommentList
    comments={this.state.comments}
    onDeleteComment={this.handleDeleteComment.bind(this)} />
...

```

[演示地址：](https://america-first-melon.github.io/reactJs-Demo/L2/)




