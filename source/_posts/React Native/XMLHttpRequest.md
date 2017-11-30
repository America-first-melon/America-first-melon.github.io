---
title: XMLHttpRequest
date: 2017-02-20 14:40:55
categories:
- React Native
- XMLHttpRequest的一种使用
---


#### 介绍

XMLHttpRequest 对象用于在后台与服务器交换数据。

![](/assets/rn/2.png)

<!--more-->

```bash
_pickPhoto(){
  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      return;
    }else{
      let source = 'data:image/jpeg;base64,' + response.data;
      //本地演示
      // let user = this.state.user;
      // user.avatar = source;
      // this.setState({
      //   user: user
      // });
      //真实上传
      let timestamp = Date.now();
      let folder = 'avatar';
      let tags = 'app,avator';
      let accessToken = this.state.user.accessToken;

      fetch('http://rap.taobao.org/mockjs/13128/api/u/upload' , {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body:
       JSON.stringify({
         accessToken:accessToken,
         timestamp:timestamp,
         folder:folder,
         tags:tags,
        })
      }).then((response) => response.json())
      .then((data)=>{
        var mockData = Mock.mock(data);
        if(mockData && mockData.success){
          let signature = 'folder=' + folder + '&timestamp=' + timestamp + CLOUDINARY.api_secret;
          signature = sha1(signature);

          let body = new FormData();
          body.append('folder',folder);
          body.append('api_key',CLOUDINARY.api_key);
          body.append('file',source);
          body.append('resource_type','image');
          body.append('signature',signature);
          body.append('timestamp',timestamp);
          let xhr = new XMLHttpRequest();
          this.setState({
            avatarUploading:true,
          })
          xhr.open('POST',CLOUDINARY.imgae);
          xhr.onload = ()=>{
            if(xhr.status == 200){
              try{
                response = JSON.parse(xhr.response)
              }
              catch(e){
                console.log(e);
              }
              if(response && response.public_id){
                let user = this.state.user;
                user.avatar = response.url;
                this.setState({
                  user:user,
                  avatarProgress:0,
                  avatarUploading:false,
                },function(){
                  AsyncStorage.setItem('user',JSON.stringify(user))
                })
              }
            }else{
              alert('请求失败');
              console.log(xhr.responseText);
            }
          }
          if(xhr.upload){
            xhr.upload.onprogress = (event)=>{
              if(event.lengthComputable){
                //lengthComputable表示一个进度信息是否可用的布尔值
                var percent = Number((event.loaded / event.total).toFixed(2))
                this.setState({
                  avatarProgress:percent,
                })
              }
            }
          }
          xhr.send(body);
        }
      }).catch((err)=>{console.log(err)})
    }
  });
}
```
