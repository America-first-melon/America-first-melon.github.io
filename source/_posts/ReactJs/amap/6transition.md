---
title: P6:CSSTransitionGroup应用
date: 2017-11-01 21:30:28
categories:
- 【React.js】
- AMap公众号
---


#### 描述

package.json : "react-transition-group": "^1.2.1"

<!--more-->

上代码，主页：

```html
import React , {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import { CSSTransitionGroup } from 'react-transition-group'

import Mine from '../../layouts/mine/index';
import Detail from '../../layouts/mine/detail';
import MapMarker from '../../layouts/mine/mapMarker';
import Ques from '../../layouts/question/index';
import Sample from '../../layouts/sample/sample';
import AccessMapDetail from '../../layouts/access/index';
import AccessInformation from '../../layouts/access/information';

export default class App extends Component{
    render(){
        return(
            <Router>
                <Route render={({ location }) => (
                    <div className="fill">
                        <Route exact path="/" component={Mine}/>
                        <CSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                        >
                            <div key={location.pathname}>
                                <Route location={location} path='/question' component={Ques} />
                                <Route location={location} path="/access/informaton" component={AccessInformation} />
                                <Route location={location} path="/sample" component={Sample} />
                            </div>
                        </CSSTransitionGroup>
                        <Route location={location} path="/detail" component={Detail} />
                        <Route location={location} path="/mapMarker" component={MapMarker} />
                        <Route location={location} path="/access/mapdetail" component={AccessMapDetail} />
                   </div>
              )}/>
         </Router>
        )
    }
}

//style

.fill{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #EBEBEB;
}
.fade-enter {
    opacity: 0;
    filter: blur(10px);
    z-index: 1;
}
.fade-enter.fade-enter-active {
    opacity: 1;
    filter: blur(0);
    transition: opacity 250ms cubic-bezier(0.86, 0.18, 0.82, 1.32);
}

```

相关链接:[CSSTransitionGroup](https://reacttraining.com/react-router/web/example/animated-transitions)




