---
title: 另一个版本的media查询
date: 2017-06-25 15:02:41
categories:
- 【移动端】
- 另一个版本的media查询
---

<!--more-->

#### media

```bash

    Another useful media feature is device-aspect-ratio.

    Note that the iPhone 5 does not have a 16:9 aspect ratio. It is in fact 40:71.

    iPhone < 5:
    @media screen and (device-aspect-ratio: 2/3) {}

    iPhone 5:
    @media screen and (device-aspect-ratio: 40/71) {}

    iPhone 6:
    @media screen and (device-aspect-ratio: 375/667) {}

    iPhone 6 Plus:
    @media screen and (device-aspect-ratio: 16/9) {}

    iPad:
    @media screen and (device-aspect-ratio: 3/4) {}

```

链接放上 [CSS media query](https://stackoverflow.com/questions/12539697/iphone-5-css-media-query)

如图：![](/assets/qita/19.png)




