# 主题开发

**Hve Notes** 采用 [EJS](https://ejs.bootcss.com/) 作为主题的模版引擎。你可以使用我们提供的样板 [hve-notes-theme-starter](https://github.com/hve-notes/hve-notes-theme-starter) 来快速上手主题开发。

或者你可以在这里查看应用的默认主题 [Default Thems](https://github.com/hve-notes/hve-notes/tree/master/public/default-files/themes)

基于 [EJS](https://ejs.bootcss.com/) 简单的语法和 [Gulp](https://www.gulpjs.com.cn/) 强大的自动化构建能力，你可以很快开发出一个心仪的自定义主题。

## EJS 基础介绍

这里只列举了你开发主题时最常用的几个语法，当然，如果想了解最全面的语法，可以去查看 [EJS文档](https://ejs.bootcss.com/)

EJS 每个标签都是成对使用，即有开则有闭。

示例数据：
``` JSON
{
  "themeConfig": {
    "footerInfo": "Powered by Hve Notes",
    "pageSize": 10,
    "showFeatureImage": true,
    "siteDescription": "温故而知新",
    "siteName": "Hve Notes",
    "themeName": "notes"
  },
  "posts": [
    {
      "abstract": "<strong>Hve Notes</strong> 一个静态博客写作客户端 ",
      "content": "<strong>Hve Notes</strong> 一个静态博客写作客户端 <!-- more -->↵↵👏 欢迎使用 <strong>Hve Notes</strong> ！",
      "data": {
        "date": "2019-01-15 08:00:00",
        "dateFormat": "2019-01-15",
        "feature": "/post-images/hello-hve-notes.png",
        "published": true,
        "tags": ["HveNotes"]
      },
      "fileName": "hello-hve-notes"
    }
  ]
}
```
### 标签
- `<%=` 输出数据到模板（输出是转义 HTML 标签）。适用于普通的数据输出

``` javascript
<%= themeConfig.siteName %>
```

- `<%-` 输出非转义的数据到模板。适用于 `HTML` 类型的数据输出

``` javascript
<%- posts[0].abstract %>
```

### 包含

`EJS` 中没有 Block 的概念，但是提供了 `include` 语法。通过 `include` 指令将相对于模板路径中的模板片段包含进来。

比如，简单包含:
``` javascript
<%- include('_blocks/head') %>
```

包含的同时，传入指定的字段(若不指定，默认取父模版中字段对应值)
``` javascript
<%- include('./_blocks/head', { siteTitle: `${post.title} | ${themeConfig.siteName}` }) %>
```

### 循环 和 条件判断
同 `JavaScript` 中的用法
``` javascript
<% posts.forEach(function(post) { %>
  <h2 class="post-title"><%= post.title %></h2>
  ...
<% }); %>

<% if (pagination.prev) { %>
  <a href="<%= pagination.prev %>" class="prev">上一页</a>
<% } %>
```

## Less 基础介绍
你可以使用 [Less](http://lesscss.cn/) 来进行样式的编写。若你不熟悉 Less 或没有使用过其他 `CSS` 预处理器，你当然可以在 Less 文件中使用普通 CSS 来进行编写，因为它是完全兼容的。

Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。

一般比较常用的是[变量](http://lesscss.cn/features/#variables-feature)和[嵌套规则](http://lesscss.cn/features/#features-overview-feature-nested-rules)

### 变量
``` css
// Variables
@link-color: #428bca; // sea blue
a {
  color: @link-color;
}
```
### 嵌套规则
``` css
// Nested Rules
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
}
```

