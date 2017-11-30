---
title: jq-img的complete事件
date: 2016-12-02 13:41:12
categories:
- 【JS库】
- jQuery
---


### 问题描述：

遍历图片的方法：

```bash
<div class="content-padded no-mar book-list">
        <?php foreach($new_books["data"] as $val):?>
            <div class="card no-boxshadow no-mar" style="width:33%;border-bottom:1px solid #e6e6e6;float:left;" onclick="Frjj.book_url('<?php echo $val["book_url"];?>',<?php echo $val["id"];?>)">
                <div class="item-media" align="center">
                    <img src="<?php echo Tools::get_upload_url($val["book_img"]);?>" width="100%"/>
                </div>
                <div class="card-content-inner no-pad book-info">
                    <h6 class="book-title"><?php echo $val["book_name"];?></h6>
                    <h6 class="book-autor color-gray"><?php echo $val["book_author"];?></h6>
                    <h6 class="color-price">￥<?php echo $val["price"];?></h6>
                </div>
            </div>
        <?php endforeach;?>
    </div>
```

<!--more-->

当页面**第一次**加载img时,显示父级高度：

![](/assets/js/jquery/3.jpg)

因为有分割线[用的定位],在视图中这样显示：

![](/assets/js/jquery/4.jpg)


### 解决

问题出现在php加载img与js获取img宽高协调不一致上。
需要在img加载完毕之后，才可以设置分割线的位置。


``` bash
    $(".card img").one('load', function() {
      var commonH = $(this).parent().parent().height();
      var commonW = $(this).parent().parent().width();
      $('.line-row').css('top',commonH);
      $('.line-column1').css('left',commonW);
      $('.line-column2').css('left',commonW*2);
    }).each(function() {
      if($(this).complete) $(this).load();
    });
```

![](/assets/js/jquery/5.jpg)
![](/assets/js/jquery/6.jpg)
