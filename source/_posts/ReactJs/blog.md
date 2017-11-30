---
title: react.js案例上传到Github
date: 2016-12-11 23:18:39
categories:
- 【React.js】
- 案例上传到Github
---

#### 简述

github 搭建 一个 用username.github.io 的 博客。。。

[我用的是HEXO。方法百度]

这里简述一下上传React.js案例的过程。。。

<!--more-->

1. 用create-react-app创建的案例上传

github地址上的Read.me有个[Github Pages](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages);

<b>步骤：</b>
<b>1. Add homepage to package.json</b>
```bash
"homepage": "https://myusername.github.io/my-app",

```
<b>2.Install gh-pages and add deploy to scripts in package.json</b>

```bash
npm install --save-dev gh-pages

```
![](/assets/qita/2.png)

最后的 `package.json` 文件：

![](/assets/qita/3.png)


<b>3.Ensure your project’s settings use gh-pages</b>

![](/assets/qita/4.png)
![](/assets/qita/5.png)

<如何创建gh-pages?>

1.新建一个repository

2.按提示整好

3.命令

```bash
mkdir mulu
cd mulu
git init
git checkout --orphan gh-pages
git add .
```
有时报错：
![](/assets/qita/6.png)

```bash
G:\L1>git commit -m "first post"
[gh-pages (root-commit) 771e472] first post
2 files changed, 11 insertions(+)
create mode 100644 README.md
create mode 100644 index.html

G:\L1>git remote add origin https://github.com/America-first-melon/reactJs-Demo.git
fatal: remote origin already exists.

G:\L1>git push origin gh-pages
fatal: AggregateException encountered.
发生一个或多个错误。
Username for 'https://github.com': America-first-melon
Password for 'https://America-first-melon@github.com':
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 387 bytes | 0 bytes/s, done.
Total 4 (delta 0), reused 0 (delta 0)
To https://github.com/America-first-melon/reactJs-Demo.git
* [new branch]      gh-pages -> gh-pages

G:\L1>
```

另一个错误：
因为：Your local repository doesn't know about this commit yet. Hence:
![](/assets/qita/7.png)


再一个错误：
![](/assets/qita/8.png)


<b>4.Deploy the site by running npm run deploy</b>

```bash
npm run deploy

```
![](/assets/qita/9.png)


完毕之后访问：

![](/assets/qita/11.png)

![](/assets/qita/10.png)

