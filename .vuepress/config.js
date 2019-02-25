module.exports = {
  title: '𝗛𝘃𝗲 𝗡𝗼𝘁𝗲𝘀',
  description: 'Hve Notes | ✍️一个静态博客写作客户端',
  host: 'localhost',
  port: '4000',
  docsDir: 'docs',
  ga: 'UA-97296506-2',
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
      { text: '首 页', link: '/' },
      { text: '文 档', link: '/docs/' },
      { text: '示例站点', link: 'http://fehey.com/' },
      { text: '更新日志', link: 'https://github.com/hve-notes/hve-notes/blob/master/CHANGELOG.md' },
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
