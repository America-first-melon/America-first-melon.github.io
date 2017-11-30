---
title: propTypes
date: 2016-10-12 16:02:14
categories:
- React.js
- L7:propTypes应用
---


#### 介绍

修改的是 `src/index.js` 

JavaScript 是 弱语言。

<!--more-->

```bash

class Comment extends Component {
    render(){
        const {comment} = this.props;
        return(
            <div>
                <div>
                    <span>{comment.username}</span>
                </div>
                <p>{comment.content}</p>
            </div>
            )
        }
}

ReactDOM.render(
    <Comment comment={1} />,
    document.getElementById('root')
);

```

传个`1` 一点错误都不会报。


如果加上`PropTypes`

```bash
import React, { Component, PropTypes } from 'react';

static propTypes = {
    comment : PropTypes.object,         //必须是object
    test:PropTypes.object.isRequired    //再强调组件参数必须传入
}


```
这个时候：![](/assets/rj/4.png)


对于 PropTypes 还有其他的各种类型，具体见[链接](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)







