# 常见问题
## 如何同步博客文件（如何多设备管理博客）
目前，你可以通过将博客源文件夹（默认是 `~/Documents/Gridea`）通过 **OneDrive** 或其他类似网盘同步工具进行文件备份与同步

## 如何将 Hexo 文章导入 Gridea
目前，你可以将 markdown 文章手动复制到源文件夹中的 posts 文件夹中 （默认是`~/Documents/Gridea/posts`），然后打开应用检查文章内容。若文章中有图片，则需额外编辑即可。

::: tip 提示
从 **Hexo** 导入的文章将抛弃 分类（Categories）信息，因为在 **Gridea** 中只有 标签（Tag）的概念
:::

## 文章如何设置摘要（abstract）
和 **Hexo** 的文章编辑体验一样，在文章中插入单行 `<!-- more -->` ，上面内容则是摘要

## Windows 检测远程失败怎么办
点击应用菜单栏 Edit -> Toggle Developer Tools，然后切换到开发者工具的 Console 栏，再次点击检测远程连接，看是否有报错信息。

若出现 `Error: spawn git ENOENT ... at Process.ChildProces...ickCallbak` 的错误提示，则可通过设置环境变量解决。

解决办法：
1. 开始安装git（比如：我把git装在了D盘中Git文件夹中）,然后跟着上面的默认设置，一路next，直至安装完成。
2. 右键“此电脑”->“属性”->“高级系统设置”->“环境变量”->在下方的“用户变量”中找到“path”->选中“path”并选择“编辑”->将;D:\Git\bin;D:\Git\libexec\git-core（注意：里面的D:\Git是我的git安装路径，如果你的和我的不一样，自行换成你的）复制到其中->保存并退出
3. 重启电脑打开即可

## 网页样式显示异常怎么办

这是由于域名设置的时候未添加 `https` 或 `http`（自定义域名且无证书时填 `http`），添加后保存，重新同步一下就好了

## Mac 检测远程失败怎么办

- 首先确保您已经安装了 git
- 若还是不行，点击应用菜单栏 Edit -> Toggle Developer Tools，然后切换到开发者工具的 Console 栏，再次点击检测远程连接，看是否有报错信息。
  若出现 `xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools),
missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun`
 则打开 Terminal，执行 `xcode-select --install` 之后，再使用即可。

这是由于域名设置的时候未添加 `https` 或 `http`（自定义域名且无证书时填 `http`），添加后保存，重新同步一下就好了

<div class="disqus-container">
  <vue-disqus shortname="gridea"></vue-disqus>
</div>
