---
title: webuploader
date: 2017-02-24 19:58:33
categories:
- js插件
- webuploader.js
---

####  图片

```bash
1.
<a href="javascript:;" id="picker">选择文件
     <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" />
     <input type="hidden" value="<?php echo isset($this->user["workshop"]["logo"]) && $this->user["workshop"]["logo"]?$this->user["workshop"]["logo"]:'';?>" id="logo">
     <input type="hidden" value="<?php echo isset($this->user["workshop"]["id"]) && $this->user["workshop"]["id"]?$this->user["workshop"]["id"]:0;?>" id="id">
</a>
2.
<div class="form-item">
     <div class="form-title"><b class="must-input">*&nbsp;</b>封&nbsp;面&nbsp;图&nbsp;：</div>
     <a href="javascript:;" class="uploadButton" id="picker">选择文件
          <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" />
     </a>
     <input type="hidden" value="" id="icon_path">
     <div id="preview" style="margin:0 0 15px 100px;" class="none">
          <img src="">
          <p class="info" style="color:red;line-height:25px;"></p>
     </div>
</div>

//
<script type="text/javascript" src="...webuploader.js"></script>
//
<script>
     /* 文件上传*/
     var uploader = WebUploader.create({
          auto: true,
          // swf文件路径
          //swf: 'Uploader.swf',
          // 文件接收服务端。
          server: 'url',
          // 选择文件的按钮。可选。
          // 内部根据当前运行是创建，可能是input元素，也可能是flash.
          pick: '#picker',
               accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/jpg,image/jpeg,image/png'
          }
     });  
     uploader.on( 'fileQueued', function( file ) {
          $img = $(".my-infomation-intro").find('img');          //图片位置
          // thumbnailWidth x thumbnailHeight 为 100 x 100
          uploader.makeThumb( file, function( error, src ) {
               if ( error ) {
                    $img.replaceWith('<span>不能预览</span>');
                    return;
               }
               $img.attr( 'src', src );
               /*$("#preview").show();*/
          }, 150, 150 );
     });
     // 文件上传成功，给item添加成功class, 用样式标记上传成功。
     uploader.on( 'uploadSuccess', function( file,response ) {
          var img_url = response.data.url;
          $('#logo').val(img_url);
          /*$('#icon_path').val(img_url);*/
          /*$(".info").text("上传成功");*/
     });
     // 文件上传失败，显示上传出错。
     uploader.on( 'uploadError', function( file ) {
          /*$(".info").text("上传失败");*/
     });
     //
     $.ajax( {
          url:'url',
          data:{
               data
               },
          type:'post',
          dataType:'json',
          success:function(result) {
               //code
          },
          error : function(error) {
               console.log(error);
          }
     });
</script>

```
![](/assets/qita/12.png)
![](/assets/qita/13.png)
![](/assets/qita/15.png)



           
     