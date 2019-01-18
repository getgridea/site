---
sidebarDepth: 6
---
# 目录结构与页面变量

## 结构
主题有一些**强约定**的目录结构和可选的静态资源目录

```
fly - 主题文件夹名称 (建议用小写，中划线分隔)
├── assets - 资源文件夹（必须，不可更名）
│   ├── media - 主题静态资源存放目录（可选，不可更名）
│   │   └── fonts - 字体图标文件夹（示例）
│   │   │   ├── icomoon.eot
│   │   │   ├── icomoon.svg
│   │   │   ├── icomoon.ttf
│   │   │   └── icomoon.woff
│   │   └── images - 主题用图片文件（示例）
│   └── styles - 样式文件夹（必须，不可更名）
│       ├── _blocks - 样式模块文件夹（可选，可自定义命名）
│       │   ├── fonts.less
│       │   ├── footer.less
│       │   ├── header.less
│       │   ├── list.less
│       │   ├── post.less
│       │   └── tag.less
│       ├── _core - 样式模块文件夹（可选，可自定义命名）
│       │   ├── base.less
│       │   ├── colors.less
│       │   └── github.less
│       └── main.less - 主样式文件 (必须，不可更名)
└── templates - 页面模版文件夹（必须，不可更名）
    ├── _blocks - 页面模版文件夹（可选，可自定义命名）
    │   ├── footer.ejs
    │   ├── head.ejs
    │   ├── header.ejs
    │   ├── post-list.ejs
    │   └── scripts.ejs
    ├── index.ejs - 主页，列表页 (必须，不可更名)
    ├── post.ejs - 文章页 (必须，不可更名)
    └── tag.ejs - 标签页 (必须，不可更名)
```

如你所见，**必须**文件只有 4 个，`main.less`, `index.ejs`, `post.ejs`, `tag.ejs` （需按照对应目录组织）

## 页面变量
### index.ejs

- `menus`
- `posts`
- `pagination`
- `themeConfig`
- `site`

### post.ejs

- `menus`
- `post`
- `themeConfig`
- `commentSetting`
- `site`

### tag.ejs

- `menus`
- `posts`
- `pagination`
- `themeConfig`
- `tag`
- `site`

### 变量值示例

#### menus
``` javascript
/**
 * menus Array类型
 */
menus: [
  { 
    link: 'http://fehey.com',
    name: '首页',
    openType: 'Internal'
  }
]
```

#### posts
``` javascript
/**
 * posts Array类型
 */
posts: [
  { 
    content:
      '<p><strong>Hve Notes</strong> 一个静态博客写作客户端 <!-- more --></p>\n<p>👏 欢迎使用 <strong>Hve Notes</strong> ！  </p>\n<p>🌈 <strong>Hve Notes</strong> 一个静态博客写作客户端。你可以用它来记录你的生活、心情、知识、笔记、创意... ... </p>',
     fileName: 'hello-hve-notes',
     abstract: '<p><strong>Hve Notes</strong> 一个静态博客写作客户端 </p>\n',
     title: 'Hello Hve Notes',
     tags: [
       {
         name: 'HveNotes',
         used: true,
         slug: 'hvenotes',
         link: 'tag/hvenotes'
       }
     ],
     date: 'December 12o 2018, am',
     feature: 'post-images/hello-hve-notes.png',
     link: 'post/hello-hve-notes'
  },
]
```

#### pagination
``` javascript
/**
 * pagination Object类型
 */
pagination: {
  prev: '', // '' 或 ''
  next: '',
}
```

#### themeConfig
``` javascript
/**
 * themeConfig Object类型
 */
themeConfig:{ 
  footerInfo: 'Powered by Hve Notes',
  pageSize: 10,
  showFeatureImage: true,
  siteDescription: '温故而知新',
  siteName: 'Hve Notes',
  themeName: 'notes',
  domain: 'http://fehey.com'
}
```

#### post
``` javascript
/**
 * post Object类型
 */
post: { 
  content: '<p><strong>Hve Notes</strong> 一个静态博客写作客户端 <!-- more --></p>\n<p>👏 欢迎使用 <strong>Hve Notes</strong> ！  </p>\n<p>🌈 <strong>Hve Notes</strong> 一个静态博客写作客户端。你可以用它来记录你的生活、心情、知识、笔记、创意... ... </p>',
  fileName: 'hello-hve-notes',
  abstract: '<p><strong>Hve Notes</strong> 一个静态博客写作客户端 </p>\n',
  title: 'Hello Hve Notes',
  tags: [
    {
      name: 'HveNotes',
      used: true,
      slug: 'hvenotes',
      link: 'tag/hvenotes'
    }
  ],
  date: 'December 12o 2018, am',
  feature: 'post-images/hello-hve-notes.png',
  link: 'post/hello-hve-notes',
  nextPost: {
    content: '<p>第二篇文章</p>',
    fileName: 'other-post',
    abstract: '',
    title: 'Hello Hve Notes',
    tags: [
      {
        name: 'HveNotes',
        used: true,
        slug: 'hvenotes',
        link: 'tag/hvenotes'
      }
    ],
    date: 'December 12o 2018, am',
    feature: 'post-images/hello-hve-notes.png',
    link: 'post/hello-hve-notes',
  } // 若是为最后一篇文章，则无此字段
```

#### commentSetting
``` javascript
/**
 * commentSetting Object类型
 */
const commentSetting = {
  commentPlatform: 'disqus',
  disqusSetting: {
    api: '',
    apikey: 'Dme6Hy8bOI2xxxxUtdY8V',
    shortname: 'hve-notes',
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

#### tag
``` javascript
/**
 * tag Object类型
 */
tag: {
  name: 'HveNotes',
  used: true,
  slug: 'hvenotes'
},
```

#### site
``` javascript
/**
 * site Object类型
 */
site: {
  posts: 同 posts  // 所有文章数组
  tags: [          // 所有标签数组
    {
      name: 'HveNotes',
      used: true,
      slug: 'hvenotes',
      link: 'tag/hvenotes'
    },
    ...
  ],
},
```

## 其他

### 头像（Avatar）

``` html
<img class="avatar" src="<%= themeConfig.domain %>/images/avatar.png" alt="" width="32px" height="32px">
```

### Favicon
``` html
<link rel="shortcut icon" href="<%= themeConfig.domain %>/favicon.ico">
```

### main.css (样式文件)
``` html
<link rel="stylesheet" href="<%= themeConfig.domain %>/styles/main.css">
```

### 如何查看主题在应用中的效果

你可以将开发好的主题文件夹，复制到应用目录 `~/Documents/hve-notes/themes` 

**文档**文件夹中有个 `/hve-notes` 文件夹是使用应用时自动创建的应用文件夹，里面有**Hve Notes**提供的默认主题

你可以将自己开发的主题或其他开发者开发的主题放入此文件夹中使用即可，配合应用中的预览功能可在本地预览效果，记得预览之前，将主题选择切换成新主题哦
