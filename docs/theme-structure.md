---
sidebarDepth: 6
---
# 目录结构与页面变量

## 结构
主题有一些**强约定**的目录结构和可选的静态资源目录

``` bash
fly - 主题文件夹名称 (建议用小写，中划线分隔)
├── assets - 资源文件夹（必须，不可更名）
│   ├── media - 主题静态资源存放目录（可选，不可更名）
│   │   └── fonts - 字体图标文件夹（示例）
│   │   │   ├── icomoon.ttf
│   │   │   └── icomoon.woff
│   │   └── images - 主题用图片文件（示例）
│   └── styles - 样式文件夹（必须，不可更名）
│       ├── _blocks - 样式模块文件夹（可选，可自定义命名）
│       │   ├── footer.less
│       │   ├── header.less
│       │   └── tag.less
│       ├── _core - 样式模块文件夹（可选，可自定义命名）
│       │   ├── base.less
│       │   ├── colors.less
│       └── main.less - 主样式文件 (必须，不可更名)
└── templates - 页面模版文件夹（必须，不可更名）
│   ├── _blocks - 页面模版文件夹（可选，可自定义命名）
│   │   ├── footer.ejs
│   │   ├── head.ejs
│   │   ├── header.ejs
│   ├── index.ejs - 主页，列表页 (必须，不可更名)
│   ├── post.ejs - 文章页 (必须，不可更名)
│   ├── archives.ejs - 归档页 (必须，不可更名)
│   ├── tags.ejs - 标签列表页 (必须，不可更名)
│   ├── tag.ejs - 标签详情页 (必须，不可更名)
│   └── friends.ejs - 自定义模版 (可选，任意命名)
└── config.json - 主题配置文件 (可选，推荐)
└── style-override.js - 主题样式自定义文件 (可选)
```

如你所见，**必须**文件只有 **6** 个，`main.less`, `index.ejs`, `post.ejs`, `archives.ejs`, `tags.ejs`, `tag.ejs` （需按照对应目录组织）

## 页面变量
### index.ejs

- [posts](#posts)
- [menus](#menus)
- [pagination](#pagination)
- [themeConfig](#themeconfig)
- [site](#site)

### post.ejs

- [post](#post)
- [commentSetting](#commentsetting)
- [menus](#menus)
- [themeConfig](#themeconfig)
- [site](#site)

### archives.ejs

- [posts](#posts)
- [menus](#menus)
- [pagination](#pagination)
- [themeConfig](#themeconfig)
- [site](#site)

### tags.ejs

- [tags](#tags)
- [menus](#menus)
- [themeConfig](#themeconfig)
- [site](#site)

### tag.ejs

- [tag](#tag)
- [posts](#posts)
- [menus](#menus)
- [pagination](#pagination)
- [themeConfig](#themeconfig)
- [site](#site)

### 自定义模版
可以在 templates 文件夹创建自定义模版，例如 `friends.ejs`, `about.ejs`, `projects.ejs`, `404.ejs` 等等，最终生成的访问路径为 `http(s)://域名/friends`, `http(s)://域名/about`, `http(s)://域名/projects`, `http(s)://域名/404` 可使用的变量值如下：

- [menus](#menus)
- [themeConfig](#themeconfig)
- [commentSetting](#commentsetting)
- [site](#site)

> 注：若主题包含自定义模版，且文章渲染选择了精简 URL，若产生 URL 冲突，自定义渲染模版优先级高于文章 URL。


### 变量值示例

> @ 符号为引用其他字段标志，仅作为此文档字段说明使用

#### menus
菜单数组，具体字段可见 [menu](#menu)

``` javascript
menus: [@menu, @menu, @menu]
```

#### posts
文章数组，具体 Post 字段可见 [post](#post)

``` javascript
posts: [@post, @post, @post]
```

#### tags
标签数组，具体 Post 字段可见 [post](#post)

``` javascript
posts: [@post, @post, @post]
```

#### pagination
文章列表的分页字段

``` javascript
pagination: {
    prev: '', // 上一页的链接
    next: '', // 下一页的链接
}
```

#### themeConfig
主题配置字段

``` javascript
themeConfig:{ 
    archivesPageSize: 50,
    archivesPath: "archives", // 归档页路径前缀，应用内可自定义，例如 'blog', 'news' 等
    dateFormat: "YYYY-MM-DD",
    feedCount: 10,
    feedFullText: true,
    footerInfo: "Powered by <a href=\"https://github.com/getgridea/gridea\" target=\"_blank\">Gridea</a>",
    postPageSize: 12,
    postPath: "post",
    postUrlFormat: "SLUG",
    showFeatureImage: true,
    siteDescription: "Every 🐦 has an 🦅's dream.",
    siteName: "海岛心hey",
    tagPath: "tag",
    tagUrlFormat: "SHORT_ID",
    themeName: "tech"
}
```

#### post
文章字段

``` javascript
post: {
    content: '<p><strong>Gridea</strong> 一个静态博客写作客户端 <!-- more --></p>\n<p>👏 欢迎使用 <strong>Gridea</strong> ！  </p>\n<p>🌈 <strong>Gridea</strong> 一个静态博客写作客户端。你可以用它来记录你的生活、心情、知识、笔记、创意... ... </p>',
    fileName: 'hello-gridea',
    abstract: '<p><strong>Gridea</strong> 一个静态博客写作客户端 </p>\n',
    description: '一个静态博客写作客户端 欢迎使用 Gridea！Gridea 一个静态博客写作客户端。你可以用它来记录你的生...', // 智能截取文章开始内容填充此字段，可用作未设置摘要时备用字段
    title: 'Hello Gridea',
    tags: [@tag, @tag, @tag], // 文章 tag 数组，具体可见下面 tag 字段
    date: 'December 12o 2018, am',
    dateFormat: '2018-12-12', // 依据 Gridea 应用内日期格式化后字段
    feature: 'post-images/hello-gridea.png', // 若无封面图，则为 ''
    link: 'https://xxx.com/post/hello-gridea',
    stats: {
        text: '3 min read',
        time: 12000,
        words: 3000,
        minutes: 3
    },
    hideInList: false, // 仅对未设置标签文章生效
    isTop: false, // 是否是置顶文章
    toc: '<ul class="markdownIt-TOC"><li><ul><li><a href="#demo" class="">DEMO</a></li></ul></li></ul>', // 文章目录字段
    prevPost: @post, // 若是为第一篇文章，则无此字段
    nextPost: @post, // 若是为最后一篇文章，则无此字段
}
```

#### tag
标签字段

``` javascript
tag: {
  name: 'Gridea',
  slug: 'gridea',
  link: 'https://xxx.com/tag/gridea',
},
```

#### site
site 字段

``` javascript
site: {
  posts: @posts,
  tags: @tags,
  menus: @menus,
  themeConfig: @themeConfig,
  isHomepage: false, // 是否为首页，使用 index.ejs 渲染，且为第一页的时候为 true
  customConfig: {}, // 主题自定义配置字段，若无则为 {}
  utils: {
      now: '1577006772710', // Date.now()
      moment: Function // moment.js 对象
  },
},
```

#### commentSetting
评论字段

``` javascript
commentSetting: {
  commentPlatform: 'disqus',
  disqusSetting: {
    api: '',
    apikey: 'Dme6Hy8bOI2xxxxUtdY8V',
    shortname: 'gridea',
  },
  gitalkSetting: {
    clientId: 'd92dxxxxxxxxxx9b4',
    clientSecret: '861947exxxx365d33',
    owner: 'EryouHao',
    repository: 'EryouHao.github.io'
  },
  showComment: false // 是否显示评论，可根据此字段进行评论的展示与否
}
```

## 其他

### 头像（Avatar）

``` html
<img class="avatar" src="<%= themeConfig.domain %>/images/avatar.png" alt="" width="32px" height="32px">
```

### 网页图标（Favicon）
``` html
<link rel="shortcut icon" href="<%= themeConfig.domain %>/favicon.ico">
```

### 样式文件（main.css）
``` html
<link rel="stylesheet" href="<%= themeConfig.domain %>/styles/main.css">
```

### 如何查看主题在应用中的效果

你可以将开发好的主题文件夹，复制到博客源文件夹目录，默认是 `~/Documents/Gridea/themes` 

**文档**文件夹中有个 `/Gridea` 文件夹是使用应用时自动创建的应用文件夹，里面有**Gridea**提供的默认主题

你可以将自己开发的主题或其他开发者开发的主题放入此文件夹中使用即可，配合应用中的预览功能可在本地预览效果，记得预览之前，将主题选择切换成新主题哦

<div class="disqus-container">
  <vue-disqus shortname="gridea"></vue-disqus>
</div>
