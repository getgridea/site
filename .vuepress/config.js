module.exports = {
  title: 'Gridea',
  description: 'Gridea | ✍️一个静态博客写作客户端 | 记录生活、心情、知识、笔记、创意...',
  host: 'localhost',
  port: '4000',
  docsDir: 'docs',
  ga: 'UA-113307620-2',
  head: [
    ['link', { rel: 'icon', href: '/gridea.ico' }],
    ['script', { src: 'https://unpkg.com/css-doodle@0.6.1/css-doodle.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue-disqus@3/dist/vue-disqus.js' }],
    ['script', { src: '//code.tidio.co/yfyqmf3qhf36fgy4ywxutegrywwvh35c.js' }],
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
      { text: '主题市场', link: '/themes/' },
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
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')
    ],
  },
  plugins: {
    'disqus': { /* options */ }
  },
}
