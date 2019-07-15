# 快速开始

**原（Hve Notes）** 

[Gridea 小白上手教程](https://fehey.com/post/hve-notes-start/)

### Gridea 上手视频教程

[📺Gridea快速上手-1-前言](https://www.bilibili.com/video/av54010923)  
[📺Gridea快速上手-2-Git安装](https://www.bilibili.com/video/av54010965)  
[📺Gridea快速上手-3-Gridea与Github的配置](https://www.bilibili.com/video/av54011033)  
[📺Gridea快速上手-4-Gridea与Coding的配置](https://www.bilibili.com/video/av54298548)  
...  
后面的即将到来！

### 下载安装
目前 Gridea 还处于比较早期阶段，建议直接下载最新版以使用最新功能  

### 基础配置
进入应用的配置界面，进行应用的初始化配置。下面以 Github Page 为例。  

域名：Github Pages 对应的域名（例如：`https://eryouhao.github.io` 或 `http://fehey.com/girdea`）  
**⚠️注意要加 `https` 或 `http` 哦**

仓库：静态文件存放的仓库（例如：`EryouHao.github.io` 或 `blog`）  

分支：Github Pages 对应的分支（例如：`master`）  

用户名：仓库所属用户的用户名（例如：`EryouHao`，同时也是 Git Repo 中配置 `git config user.name "用户名"`） 

邮箱：Git 推送时的邮箱，等同于在 Git Repo 中配置 `git config user.email "邮箱"`  

Token: Git 推送时需要的 Token，用来向 Github 提交构建后的文件 [Github personal access tokens](https://github.com/settings/tokens)  

CNAME: 若网站有自定义域名，则可通过此设置（例如：`fehey.com`）  


### 更新菜单
进入应用的菜单界面，进行默认菜单: **首页**、**归档**、**标签**的 `link` 更新

::: tip 提示
**首页**可同配置中的域名，可以手动输入 `link` 或 选择下拉选择中的 Hompage，同理**归档**、**标签**也提供了下拉选择配置 

若想设置**关于**页面，只需要编写一篇文章并设置**列表中隐藏**，然后配置菜单指向这篇文章即可。
:::

### 更新评论配置（可选）
[Gitalk](https://github.com/gitalk/gitalk/blob/master/readme-cn.md)  
或  
[DisqusJS](https://github.com/SukkaW/DisqusJS)  

### 尽情创作
进入应用的文章界面，进行新文章的创作吧！

😘Enjoy！

<div class="disqus-container">
  <vue-disqus shortname="gridea"></vue-disqus>
</div>
