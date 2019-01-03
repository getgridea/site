module.exports = {
  title: 'Hve Notes',
  description: 'Hve Notes',
  host: 'localhost',
  port: '4000',
  base: '/hve-notes/',
  docsDir: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
  ],
  siteConfig: {
    links: {
      github: 'https://github.com/hve-notes/hve-notes',
    },
  },
  themeConfig: {
    repo: 'hve-notes/hve-notes',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/' },
      { text: '示例站点', link: 'http://fehey.com/hve-next/' },
    ],
    sidebar: [
      {
        title: '文档',
        collapsable: false,
        children: [
          '/docs/',
        ],
      },
    ],
    lastUpdated: '最后更新于',
  },
}