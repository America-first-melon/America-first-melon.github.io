---
title: 阿里云视频点播web端
date: 2017-07-01 16:38:22
categories:
- js插件
- Prismplayer.js
---


### 问题描述：

阿里云视频点播web播放器，ios+android

<!--more-->

### 解决方案：

首先，视频播放时一个vid+一个playauth，
通常playauth是由ajax获取得到。

```javascript

$.ajax({
  type: "",
  url: 'url',
  data: { },
  success: function (result) {
    if (result.code == 1) {
          playauth = result.playauth;
          videourl = result.videourl;
          getVideo(playauth, videourl);
      } else {
        alert('获取认证失败，请稍后重试。')
      }
    },
  error: function (error) {
      console.log(error);
    }
});

```
后续根据playauth和vid，new出一个播放器。

```javascript

function getVideo(playauth, videourl) {
    //var videoHeight = document.body.clientHeight + 'px';
      var videoHeight = document.documentelement.clientwidth; //这里在移动端有64px的navBar的高度差距
    player = new prismplayer({
        id: 'J_prismPlayer',
        width: '100%',
        height: videoHeight,
        autoplay: false,
        playsinline: true,  //禁止ios下播放器全屏，android不管用
        skinLayout: false,  //不要控制组件
        vid: vid,
        playauth: playauth,
        cover: videourl
    });
    $(".prism-cover").css("background-size", "cover");
    $("video").css("object-fit", "fill").attr("x5-video-player-type", "h5").attr("x5-video-player-fullscreen", "true");
    //这里设置Android播放全屏之后不要自带的控制组件，仅含有播放器的后退和更多按钮

    player.on("pause", function () {
      $("video").css("object-fit", "fill").attr("x5-video-player-type", "h5").attr("x5-video-player-fullscreen", "true");
    });
    //Android双保险
}
```

[官方文档链接--](https://help.aliyun.com/document_detail/43549.html?spm=5176.video44236.6.128.tLFTj1)


附录：播放暂停按钮


``` css
.commonBtnCss { 
  height: 50px; 
  width: 50px; 
  background-color: #404040; 
  -webkit-border-radius: 100%; 
  -moz-border-radius: 100%; 
  -o-border-radius: 100%; 
  border-radius: 100%; 
  position: absolute; 
  top: 0; 
  left: 0;
  right: 0; 
  bottom: 0; 
  margin: auto; 
  z-index: 1002;
}
#playBtn::before { 
  content: ""; 
  display: block; 
  width: 0; 
  height: 0; 
  border-style: solid; 
  border-width: 10px 0 10px 20px; 
  border-color: transparent transparent transparent white; 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  margin: -10px 0 0 -7px; 
}
#pauseBtn::before { 
  content: ''; 
  border: 5px solid white; 
  border-width: 0 5px; 
  height: 15px; 
  width: 5px; 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%,-50%); 
}
```