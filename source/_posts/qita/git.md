---
title: Git
date: 2016-06-08 13:22:14
categories:
- 暂无
- 暂无
---

#### 简介

到[廖雪峰的官方网站](http://www.liaoxuefeng.com/)做一名围观群众。。

<!--more-->

<b>集中式的版本控制系统:</b>

版本库是集中存放在中央服务器的,就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。


<b>分布式版本控制系统:</b>

通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便“交换”大家的修改，每个人的电脑上都是一个完整的版本库.


#### 命令

<b>1.创建</b>

版本库：英文名字，`repository`

```bash
$ mkdir mulu    //创建版本库
$ cd mulu       
$ git init      //把这个目录变成Git可以管理的仓库,会多一个.git的目录[跟踪管理版本库]
---
$ git add readme.txt         
$ git commit -m 'add txt'     //添加文件到Git仓库
----
```

<b>2.状态</b>

```bash
$ git status     //当前版本库的状态
$ git diff       //查看difference
```

<b>3.回退</b>

```bash
$ git add readme.txt
$ git commit -m "1"           //第一次添加

$ git add readme.txt
$ git commit -m "2"           //第二次添加

---
$ git log                     //从最近到最远的提交日志
$ git log --pretty=oneline    //单行显示log
$ git reflog                  //记录每一次命令
ea34578 HEAD@{0}: reset: moving to HEAD^
3628164 HEAD@{1}: commit: append GPL
ea34578 HEAD@{2}: commit: add distributed
cb926e7 HEAD@{3}: commit (initial): wrote a readme file
---


$ git reset --hard HEAD^       //上一个版本,上上一个HEAD^^,100个HEAD~100
$ git reset --hard commit-id   //commit-id可以log查看
```

<b>4.工作区和暂存区</b>

工作区,英文`Working Directory`，就是你的目录。

版本库，就是之前init出来的`.git`。

暂存区，`stage`。

![](/assets/qita/16.jpg)

`master`分支，它的一个指针`HEAD`。

<b>5.修改</b>

`git add`命令实际上就是把要提交的所有修改放到暂存区（Stage）;

`git commit`就可以一次性把暂存区的所有修改提交到分支。

<font color=#f24c13 size=3>每次修改，如果不add到暂存区，那就不会加入到commit中。</font>


<b>6.撤销修改</b>

+ 文件自修改后还没有被放到暂存区，`git checkout -- readme.txt`

+ 已经添加到暂存区后，又作了修改，`git reset HEAD file + git checkout -- file`

+ 已经提交了不合适的修改到版本库，`git reset --hard commit_id ...`


<b>7.删除</b>

从版本库中删除该文件 

```bash
$ git rm test.txt
$ git commit -m "remove test.txt"
```

如果是本地误删除，版本库与工作区不一致，

```bash
$ git checkout -- test.txt       //用版本库里的版本替换工作区的版本
```

强行删除分支

```bash
$ git branch -D name
```

<b>8.远程库</b>

+ 添加

```bash
$ git remote add origin url

$ git push -u origin master   //第一次推送master分支的所有内容

$ git push origin master      //后续推送最新修改

```

+ 克隆

```bash
$ git clone url
```

<b>9.分支</b>

+ Fast-forward[无冲突]

```bash
$ git checkout -b dev    //创建dev分支并且切换到dev分支
$ git branch             //查看当前分支
---修改提交
$ git add readme.txt
$ git commit -m 'dev test'
---
$ git checkout master    //切换到master分支，此时readme.txt没变化
$ git merge dev          //把dev合并到master,此时readme.txt一致了
Updating d17efd8..fec145a
Fast-forward              //快进模式,删除分支后，会丢掉分支信息
readme.txt |    1 +                                      ​
1 file changed, 1 insertion(+)                           ​
                                                         ​
$ git merge --no-ff -m "merge with no-ff" dev    //--no-ff参数，表示禁用Fast forward


```

+ 解决冲突

在两个分支上都修改了readme.txt,这时候就会冲突，解决才可继续提交

```bash
$ git merge dev         //会报错
$ git status            //告诉你冲突的文件
$ vi readme.txt         //修改之后
$ git add readme.txt 
$ git commit -m "conflict fixed"
$ git branch -d dev     //删除分支dev
```

​﻿​﻿​﻿​﻿​﻿​﻿​﻿​
+ 分支策略：

![](/assets/qita/17.png)

+ 分支存储

```bash
$ git stash              //把当前工作现场“储藏”起来
---
$ git checkout master    //去干其他的，玩了之后合并
.....
$ git merge 
---
$ git checkout dev              //切换回来刚刚保存的分支
$ git stash list
stash@{0}: WIP on dev: 6224937 add merge
$ git stash pop                  //恢复的同时把stash内容也删了
$ git stash apply stash@{0}      //恢复后，stash内容并不删除，需要用git stash drop来删除
```


+ 多人协作

抓取分支 ：
```bash
$ git clone url
$ git branch                      //只能看到本地的master分支
$ git checkout -b dev origin/dev  //需要在dev分支上开发
...
$ git push origin dev           //推送失败
$ git pull                      //抓取远程的新提交
//git pull提示“no tracking information”，说明本地分支和远程分支的链接关系没有创建，git branch --set-upstream branch-name origin/branch-name
//没有冲突
$ git push origin dev
```

查看远程库信息，使用`git remote -v`；

