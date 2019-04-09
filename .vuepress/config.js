module.exports = {
  title: 'Gridea',
  description: 'Gridea | ✍️一个静态博客写作客户端',
  host: 'localhost',
  port: '4000',
  docsDir: 'docs',
  ga: 'UA-113307620-2',
  head: [
    ['link', { rel: 'icon', href: '/gridea.ico' }],
  ],
  siteConfig: {
    links: {
      github: 'https://github.com/getgridea/gridea',
    },
  },
  themeConfig: {
    repo: 'getgridea/gridea',
    nav: [
      { text: '首 页', link: '/' },
      { text: '文 档', link: '/docs/' },
      { text: '示例站点', link: 'http://fehey.com/' },
      { text: '更新日志', link: 'https://github.com/getgridea/gridea/blob/master/CHANGELOG.md' },
    ],
    sidebar: [
      {
        title: '文 档',
        collapsable: false,
        children: [
          '/docs/',
        ],
      },
      {
        title: '主 题',
        collapsable: false,
        children: [
          '/docs/theme',
          '/docs/theme-structure',
          '/docs/theme-custom',
        ],
      },
      {
        title: 'FAQ',
        collapsable: false,
        children: [
          '/docs/faq',
        ],
      },
    ],
    lastUpdated: '最后更新于',
  },
}
