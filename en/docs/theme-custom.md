---
sidebarDepth: 6
---
# 主题自定义

Gridea 提供了强大的主题自定义能力，你可以自行设计自定义配置提供给主题使用者。  

每一个主题都可选地搭配一个 `config.json` 配置文件和一个 `style-override.js` 样式覆盖文件。  
让我们先来看组示例:  

`config.json`  
``` json
{
  "name": "Notes",
  "version": "1.0.0",
  "author": "EryouHao",
  "customConfig": [
    {
      "name": "skin",
      "label": "皮肤",
      "group": "皮肤",
      "value": "white",
      "type": "select",
      "options": [
        {
          "label": "简约白",
          "value": "white"
        },
        {
          "label": "低调黑",
          "value": "black"
        }
      ]
    },
    {
      "name": "contentMaxWidth",
      "label": "内容区最大宽度",
      "group": "布局",
      "value": "800px",
      "type": "input",
      "note": "可填像素类型（如：320px）或百分比类型（如：38.2%）"
    },
    {
      "name": "textSize",
      "label": "正文内容文字大小",
      "group": "布局",
      "value": "16px",
      "type": "input",
      "note": "px 或 rem（如 16px 或 1rem）"
    },
    {
      "name": "pageBgColor",
      "label": "网页背景色",
      "group": "颜色",
      "value": "#ffffff",
      "type": "input",
      "card": "color",
      "note": "颜色字符串:（如：#EEEEEE、rgba(255, 255, 255, 0.9)）"
    },
    {
      "name": "github",
      "label": "Github",
      "group": "社交",
      "value": "",
      "type": "input",
      "note": "链接地址"
    },
    {
      "name": "twitter",
      "label": "Twitter",
      "group": "社交",
      "value": "",
      "type": "input",
      "note": "链接地址"
    },
    {
      "name": "weibo",
      "label": "微博",
      "group": "社交",
      "value": "",
      "type": "input",
      "note": "链接地址"
    },
    {
      "name": "customCss",
      "label": "自定义CSS",
      "group": "自定义样式",
      "value": "",
      "type": "textarea",
      "note": ""
    },
    {
      "name": "ga",
      "label": "跟踪 ID",
      "group": "谷歌统计",
      "value": "",
      "type": "input",
      "note": "UA-xxxxxxxxx-x"
    }
  ]
}

```

`style-override.js`  
``` javascript
const generateOverride = (params = {}) => {
  let result = ''

  // 暗黑皮肤
  if (params.skin && params.skin !== 'white') {
    result += `
      body {
        color: #dee2e6;
      }
      a, .link {
        color: #e9ecef;
      }
    `
  }

  // 内容区最大宽度 - contentMaxWidth
  if (params.contentMaxWidth && params.contentMaxWidth !== '800px') {
    result += `
      .main {
        max-width: ${params.contentMaxWidth};
      }
    `
  }

  // 正文内容文字大小 - textSize
  if (params.textSize && params.textSize !== '16px') {
    result += `
      .post-detail .post .post-content p {
        font-size: ${params.textSize};
      }
    `
  }

  // 网页背景色 - pageBgColor
  if (params.pageBgColor && params.pageBgColor !== '#ffffff') {
    result += `
      body {
        background: ${params.pageBgColor};
      }
    `
  }

  // 文字颜色 - textColor
  if (params.textColor && params.textColor !== '#333333') {
    result += `
      body {
        color: ${params.textColor};
      }
    `
  }  

  // 自定义 CSS - customCss
  if (params.customCss) {
    result += `
      ${params.customCss}
    `
  }


  console.log('result', result)

  return result
}

module.exports = generateOverride
```

是的，如你所见，自定义配置就是这么简单，清晰。下面让我们详细了解一下具体字段和使用方法：  

### config.json
此文件中包含了主题的基本信息如：`name`, `version`, `author` 等等，其中有一个特殊的字段 **`customConfig`**，这便是自定义配置字段数组了，格式如下：
``` json
{
  "name": "字段变量名称，可在模版或样式覆盖文件中使用",
  "label": "字段展示名称，在软件中显示的名称",
  "group": "字段所属分组，在软件中显示的分组名称",
  "value": "字段默认值",
  "type": "字段输入类型，目前有`input`, `select`, `textarea`可选",
  "note": "输入框 placeholder 提示文案，type 为 `input`, `textarea` 时可用",
  "card": "字段附属 Card，目前只可用 `color`，type 为 `input` 时可用",
  "options": { // type 为 `select` 时可用
    {
      "label": "选项显示名称",
      "value": "选项对应值",
    },
  },
}
```

大部分情况下，使用 input 类型的就够用了。我们额外提供了其他的类型如 `textarea`，`select` 等的支持，还有 `card` 快捷选择颜色支持，当然，未来将会有更丰富的支持。  
是的，这些字段都可以在模版中（对应：`site.customConfig.自定义字段`）或样式覆盖文件中使用。

在模版中使用时，你可以尽情发挥你的想象，社交、统计、友链、外链背景图、背景音乐...

### style-override.js
当然，在样式覆盖文件中也可以使用：

``` javascript
const generateOverride = (params = {}) => {
  // params 即自定义字段对象，可以根据字段值来添加自定义 css
  let result = ''

  // 正文内容文字大小 - textSize
  if (params.textSize && params.textSize !== '16px') {
    result += `
      body {
        font-size: ${params.textSize};
      }
    `
  }

  // 最终结果会放在 `main.css` 的文件末尾
  return result
}
module.exports = generateOverride
```

到这里，相信你已经搞清楚如何给主题增加自定义配置能力了，快去开发一个属于自己的主题吧，分享给他人更佳呦！

若还是不清楚，可参考应用内置主题代码结构：
[Github themes folder](https://github.com/getgridea/gridea/tree/master/public/default-files/themes)

<div class="disqus-container">
  <vue-disqus shortname="gridea"></vue-disqus>
</div>
