---
title: 平滑显示transition
date: 2016-12-02 17:19:45
categories:
- 页面效果
- transition应用
---

#### 效果如图：

![](/assets/xiaoguo/1.gif)


<!--more-->
#### 解释：

transition 属性是一个简写属性，用于设置四个过渡属性：

- *transition-property*
- *transition-duration*
- *transition-timing-function*
- *transition-delay*

#### 代码：

搜索框：
``` bash
  .searchbar-search {
      float: right;
      width: 2.2rem;
      height: 1.4rem;
      margin-right: -3rem;
      line-height: 1.4rem;
      text-align: center;
      opacity: 0;
      -webkit-transition: all .3s;
      -o-transition: all .3s;
      transition: all .3s;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      background-color: #FF9700;
      color: #FFF;
      font-size: .75rem;
      border-radius: 3px;
  }
  .searchbar.searchbar-now .searchbar-search {
    margin-right: 0;
    opacity: 1;
  }
  /*使用*/
  $("#search").focus(function(){
      $(".searchbar").addClass("searchbar-now");
  });
```

背景：
``` bash
  .overlay{position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 10600;background-color: rgba(0,0,0,.4);visibility: hidden;opacity:0;transition-duration:         400ms;-webkit-transition-duration: 400ms;-o-transition-duration: 400ms;}
  .overlay-modal{position: absolute;bottom: 0;left: 0;width: 100%;height: 0;z-index: 11000;overflow: hidden;transition-property:height;transition-duration: 300ms;-webkit-transition-duration: 300ms;-o-transition-duration: 300ms;transform: translate3d(0, 100%, 0);-webkit-transform: translate3d(0, 100%, 0);}
  .overlay-show{visibility: visible;opacity: 1;}
  .overlay-modal-show{transform: translate3d(0, 0, 0);height: 6.45rem;}
  /*使用*/
  $(page).on('click','.create-actions', function () {
      $('.overlay').addClass('overlay-show');
      $('.overlay-modal').addClass('overlay-modal-show');
  });
```
