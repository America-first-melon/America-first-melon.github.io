---
title: ＳＵＩ上拉加载与下拉刷新冲突
date: 2016-11-11 21:20:39
categories:
- js库
- jQuery+SUI
---


### 参照官网

下面示例安装官网来写，没有问题。

<!--more-->

但是需要注意：
  ** `.pull-to-refresh-content` 类要写到`.content`里面，**
  我当时另起了一个div，结果上滑与下拉冲突。
  电脑模拟并没有什么问题。

```bash

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>SUI Mobile Demo</title>
        <meta name="description" content="MSUI: Build mobile apps with simple HTML, CSS, and JS components.">
        <meta name="author" content="阿里巴巴国际UED前端">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1">
        <link rel="shortcut icon" href="/favicon.ico">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">

        <!-- Google Web Fonts -->

        <link rel="stylesheet" href="http://g.alicdn.com/msui/sm/0.6.2/css/??sm.min.css,sm-extend.min.css" />

        <link rel="apple-touch-icon-precomposed" href="/assets/img/apple-touch-icon-114x114.png">
        <script type='text/javascript' src='http://www.zeptojs.cn/zepto.min.js' charset='utf-8'></script>
        <script>
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "//hm.baidu.com/hm.js?ba76f8230db5f616edc89ce066670710";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        </script>

    </head>
    <body>
        <div class="page-group">
            <div class="page">
                <header class="bar bar-nav">
                    <h1 class="title">多个标签页下的无限滚动</h1>
                </header>
                <div class="bar bar-standard bar-footer">
                    <a class="icon icon-edit pull-left"></a>
                    <a class="icon icon-settings pull-right"></a>
                </div>
                <div class="content pull-to-refresh-content" data-ptr-distance="55">
                    <!-- 默认的下拉刷新层 -->
                    <div class="pull-to-refresh-layer">
                        <div class="preloader"></div>
                        <div class="pull-to-refresh-arrow"></div>
                    </div>
                    <!-- 下面是正文 -->
                    <div class="card-container">
                        <div class="card">
                            <div class="card-header">card</div>
                            <div class="card-content">
                                <div class="card-content-inner">
                                    这里是第1个card，下拉刷新会出现第2个card。
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>其他内容区域</p>
                    <p>其他内容区域</p>
                    <p>其他内容区域</p>
                    <p>其他内容区域</p>
                    <p>其他内容区域</p>
                    <p>其他内容区域</p>
                    <div class="buttons-tab fixed-tab" data-offset="44">
                        <a href="#tab1" class="tab-link active button">全部</a>
                        <a href="#tab2" class="tab-link button">待付款</a>
                        <a href="#tab3" class="tab-link button">待发货</a>
                    </div>

                    <div class="tabs">
                        <div id="tab1" class="tab active">
                            <div class="content-block">
                                <div class="buttons-row">
                                    <a href="#tab1-1" class="tab-link active button">Tab 1</a>
                                    <a href="#tab1-2" class="tab-link button">Tab 2</a>
                                    <a href="#tab1-3" class="tab-link button">Tab 3</a>
                                </div>
                                <div class="tabs">
                                    <p class='tab active' id='tab1-1'>This is tab 1-1 content</p>
                                    <p class='tab' id='tab1-2'>This is tab 1-2 content</p>
                                    <p class='tab' id='tab1-3'>13855589778</p>
                                </div>
                            </div>
                        </div>
                        <div id="tab2" class="tab infinite-scroll">
                            <div class="list-block">
                                <ul class="list-container">
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                </ul>
                            </div>
                            <!-- 加载提示符 -->
                            <div class="infinite-scroll-preloader">
                                <div class="preloader">
                                </div>
                            </div>
                        </div>
                        <div id="tab3"  class="tab infinite-scroll">
                            <div class="list-block">
                                <ul class="list-container">
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                    <li class="item-content"><div class="item-inner"><div class="item-title">条目</div></div></li>
                                </ul>
                            </div>
                            <!-- 加载提示符 -->
                            <div class="infinite-scroll-preloader">
                                <div class="preloader">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                $(function() {

                    $(document).on('refresh', '.pull-to-refresh-content',function(e) {
                        // 模拟2s的加载过程
                        setTimeout(function() {
                            var cardNumber = $(e.target).find('.card').length + 1;
                            var cardHTML = '<div class="card">' +
                                '<div class="card-header">card'+cardNumber+'</div>' +
                                '<div class="card-content">' +
                                '<div class="card-content-inner">' +
                                '这里是第' + cardNumber + '个card，下拉刷新会出现第' + (cardNumber + 1) + '个card。' +
                                '</div>' +
                                '</div>' +
                                '</div>';

                            $(e.target).find('.card-container').prepend(cardHTML);
                            // 加载完毕需要重置
                            $.pullToRefreshDone('.pull-to-refresh-content');
                        }, 2000);
                    });


                    $(document).on("pageInit",  function(e, id, page) {
                        //多个标签页下的无限滚动
                        var loading = false;
                        // 每次加载添加多少条目
                        var itemsPerLoad = 20;
                        // 最多可加载的条目
                        var maxItems = 100;
                        var lastIndex = $('.list-container li')[0].length;
                        function addItems(number, lastIndex) {
                            // 生成新条目的HTML
                            var html = '';
                            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                                html += '<li class="item-content" onClick="alert(1)"><div class="item-inner"><div class="item-title">新条目</div></div></li>';
                            }
                            // 添加新条目
                            $('.infinite-scroll.active .list-container').append(html);
                        }
                        $(page).on('infinite', function() {
                            // 如果正在加载，则退出
                            if (loading) return;
                            // 设置flag
                            loading = true;
                            var tabIndex = 0;
                            if($(this).find('.infinite-scroll.active').attr('id') == "tab2"){
                                tabIndex = 0;
                            }
                            if($(this).find('.infinite-scroll.active').attr('id') == "tab3"){
                                tabIndex = 1;
                            }
                            lastIndex = $('.list-container').eq(tabIndex).find('li').length;
                            // 模拟1s的加载过程
                            setTimeout(function() {
                                // 重置加载flag
                                loading = false;
                                if (lastIndex >= maxItems) {
                                    // 加载完毕，则注销无限加载事件，以防不必要的加载
                                    //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
                                    // 删除加载提示符
                                    $('.infinite-scroll-preloader').eq(tabIndex).hide();
                                    return;
                                }
                                addItems(itemsPerLoad,lastIndex);
                                // 更新最后加载的序号
                                lastIndex =  $('.list-container').eq(tabIndex).find('li').length;
                                $.refreshScroller();
                            }, 1000);
                        });
                    });
                    $.init();
                });

            </script>
        </div>
        <script type='text/javascript' src='http://g.alicdn.com/msui/sm/0.6.2/js/??sm.min.js,sm-extend.min.js' charset='utf-8'></script>
        <style tyle="text/css">

/*        <script src="/dist/js/sm-city-picker.js"></script>*/
    </body>
</html>


```
