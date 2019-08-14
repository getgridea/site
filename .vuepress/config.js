module.exports = {
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
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Gridea | 一个静态博客写作客户端',
      description: 'Gridea | ✍️ 一个静态博客写作客户端 | 记录生活、心情、知识、笔记、创意...',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Gridea',
      description: 'Gridea | ✍️ A static blog writing client. | record your life, mood, knowledge, notes and ideas...',
    },
  },
  themeConfig: {
    repo: 'getgridea/gridea',
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
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
          {
            title: '赞 赏',
            collapsable: false,
            children: [
              '/docs/donate',
            ],
          },
        ],
        lastUpdated: '最后更新于',
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Documents', link: '/en/docs/' },
          { text: 'Theme market', link: '/en/themes/' },
          { text: 'Example', link: 'http://fehey.com/' },
          { text: 'Changelog', link: 'https://github.com/getgridea/gridea/blob/master/CHANGELOG.md' },
        ],
        sidebar: [
          {
            title: 'Documents',
            collapsable: false,
            children: [
              '/en/docs/',
            ],
          },
          {
            title: 'Theme',
            collapsable: false,
            children: [
              '/en/docs/theme',
              '/en/docs/theme-structure',
              '/en/docs/theme-custom',
            ],
          },
          {
            title: 'FAQ',
            collapsable: false,
            children: [
              '/en/docs/faq',
            ],
          },
        ],
        lastUpdated: 'Last updated on',
      },
    },
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
