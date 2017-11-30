---
title: 原生JS简易轮播
date: 2017-01-08 10:38:22
categories:
- 【页面效果】
- 原生JS简易轮播
---

#### 页面效果

![](/assets/xiaoguo/12.gif)

<!--more-->

#### 代码：

```html
  <style> 
      img{ width: 200px; height:200px;}
			.div{ width: 200px; margin: 10px auto;}
			.box{ width: 880px; 
            margin: 10px auto; 
            height:240px; 
            overflow: hidden;
			      border-top:10px solid #000;
            border-bottom:10px solid #000 ;
            position: relative;
			 }
			 ul{height: 200px; overflow: hidden;padding: 10px 0; position: absolute;top: 0;left: 0;}
			 li{width: 200px; height: 200px; padding: 0 10px; float: left;list-style: none;}
  </style>
  <div class="box" id="box">
			<ul>
				<li><a href="JavaScript:;"><img src="../img1/0.jpg"/></a></li>
				<li><a href="JavaScript:;"><img src="../img1/1.jpg"/></a></li>
				<li><a href="JavaScript:;"><img src="../img1/2.jpg"/></a></li>
				<li><a href="JavaScript:;"><img src="../img1/3.jpg"/></a></li>
			</ul>
	</div>
  <script>
      var btn_ting = document.getElementById('ting');
      var btn_you = document.getElementById('you');
      var btn_zuo = document.getElementById('zuo');
        
      window.onload=function(){
				     var oBox = document.getElementById('box');
				     var oul = oBox.children[0];
				     var aLi = oBox.getElementsByTagName('li');
             var n = 0;
             var timer = null;
             oul.innerHTML+=oul.innerHTML; //复制一份
             oul.style.width=aLi[0].offsetWidth*aLi.length + 'px';

            //向左走
            btn_zuo.onclick =function(){
                clearInterval(timer)
                var w =oul.offsetWidth/2;
                timer=setInterval(function(){
                  n-=5;
                  oul.style.left = (n%w-w)%w +'px';
                },30);
            }
            
            //向右走
            btn_you.onclick=function(){
               clearInterval(timer)
               kap();
            }
            
            //停止滚动
            btn_ting.onclick=function(){
              clearInterval(timer)
            }
            
            //滚动函数
            function kap(){
              var w = oul.offsetWidth/2;
              timer=setInterval(function(){
                n+=5;
                oul.style.left=(n%w-w)%w +'px';
              },30);
            }
				    
            //悬浮停止滚动
            oBox.onmouseenter = function(){
              clearInterval(timer);
            };
            
            //离开开始滚动
            oBox.onmouseleave = function(){
              clearTimeout(timer);
              timer=setTimeout(function(){
                 kap();
              },3000)
            };
			}
  </script>

```
