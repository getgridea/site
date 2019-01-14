module.exports = {
  title: '𝗛𝘃𝗲 𝗡𝗼𝘁𝗲𝘀',
  description: 'Hve Notes',
  host: 'localhost',
  port: '4000',
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
      { text: '示例站点', link: 'http://fehey.com/' },
    ],
    sidebar: [
      {
        title: '文档',
        collapsable: false,
        children: [
          '/docs/',
        ],
      },
      {
        title: '主题',
        collapsable: false,
        children: [
          '/docs/theme',
          '/docs/theme-structure',
        ],
      },
    ],
    lastUpdated: '最后更新于',
  },
}
