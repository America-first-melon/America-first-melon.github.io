---
title: HTML 在安卓手机端软键盘弹出顶起页面布局
date: 2016-11-17 19:50:56
categories:
- js库
- jQuery+zepto+SUI
---

#### 分类

1. 可滑动

```bash
<script>
    $('body').height($('body')[0].clientHeight);
</script>

```

<!--more-->

2. 有页脚

```bash
<script>
    $('input).focus(function(){
        $('.share').css('display','none');
    });
    $('input').blur(function(){
        $('.share').css('display','block');
    })
</script>
```

3. ScrollTop

```bash
<script>
    $('input').on("focus",function(){
        var pos = $(this).position().top;
        $(window).scrollTop(pos);
    })
</script>
```

4. scrollIntoView

输入框focus的时候在body上加一个div 高度1000px 这样页面就有了滚动条。然后input.scrollIntoVIew();

```bash
<script>
    $('input').on('focus',function(){
        this.scrollIntoView();
    })
</script>

```

5. 吊炸天的判断Android键盘是否按下隐藏键

```bash
<input type="text" id="txt" />
<div id="dv"></div>
<script>
    var timer, windowInnerHeight;
    function eventCheck(e) {
        if (e) {
            //click,focus事件触发的
            $('#dv').html('android键盘带e' + (e.type == 'click' ? '弹出' : '隐藏') + '--通过' + e.type + '事件');
            if (e.type == 'click') {
                //如果是点击事件启动计时器监控是否点击了键盘上的隐藏键盘按钮，没有点击这个按钮的事件可用，keydown中也获取不到keyCode值
                setTimeout(function () {
                    //由于键盘弹出是有动画效果的，要获取完全弹出的窗口高度，使用了计时器
                    windowInnerHeight = window.innerHeight;
                    //获取弹出android软键盘后的窗口高度
                    timer = setInterval(function () { eventCheck() }, 100);
                    //100ms检查下窗口高度是否改变
                }, 500);
            }
            else clearInterval(timer);
        }
        else {
            //  计时器执行的，需要判断窗口可视高度，如果改变说明android键盘隐藏了
            if (window.innerHeight > windowInnerHeight) {
                //这里逻辑可以更改下，有可能其他js事件会导致高度变化，这里就只做个简单判断了
                clearInterval(timer);
                $('#dv').html('键盘自带事件--android键盘隐藏--通过点击键盘隐藏按钮');
            }
        }
    }

    $('#txt').click(eventCheck).blur(eventCheck);
    //keydown/keyup获取按键值为0，keypress不执行。。
    $('#txt').keydown(function (e) { $('#dv').append('<br>keydown:' + e.keyCode); }).keyup(function (e) { $('#dv').append('<br>keyup:' + e.keyCode); }).keypress(function (e) { $('#dv').append('<br>press:' + e.keyCode); });
</script>
  ```
