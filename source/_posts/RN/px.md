---
title: 设置像素
date: 2017-01-15 12:58:10
categories:
- 框架+库
- React Native
---


#### 代码

<!--more-->

```javascript

'use strict';

import {Dimensions} from 'react-native'

const deviceH = Dimensions.get('window').height
const deviceW = Dimensions.get('window').width

const basePx = 375

export default function px2dp(px) {
  return px *  deviceW / basePx
}


import px2dp from '../util'
px2dp(70)

```

