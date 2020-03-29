new Vue({
  el: '#app',
  data() {
    return {
      isOpen: false,
      version: '0.9.2',
      themeList: [
        {
          name: 'Rocky',
          github: 'https://github.com/EryouHao/gridea-theme-rocky',
          link: 'https://mianbaoduo.com/o/bread/YpWYlJ0=',
          demo: 'https://gridea-theme-rocky.netlify.com',
          image: '/media/images/theme-images/theme-rocky.jpg',
          include: false,
          showDemo: true,
          isNew: true,
          price: '¥ 6'
        },
        {
          name: 'Line',
          github: 'https://github.com/EryouHao/gridea-theme-line',
          link: 'https://mianbaoduo.com/o/bread/mbd-Zp6Ulg==',
          demo: 'https://gridea-theme-line.netlify.com',
          image: '/media/images/theme-images/theme-line.jpg',
          include: false,
          showDemo: true,
          isNew: true,
          price: '6'
        },
        // {
        //   name: 'Tech',
        //   github: 'https://github.com/EryouHao/gridea-theme-tech',
        //   link: 'https://mianbaoduo.com/o/bread/mbd-ZZ2clA==',
        //   demo: 'https://gridea-theme-tech.netlify.com',
        //   image: '/media/images/theme-images/theme-tech.jpg',
        //   include: false,
        //   showDemo: true,
        //   isNew: false,
        //   price: '6'
        // },
        {
          name: 'Walker',
          github: 'https://github.com/EryouHao/gridea-theme-walker',
          link: 'https://mianbaoduo.com/product/show/mbd-aJqU',
          demo: 'https://gridea-theme-walker.netlify.com',
          image: '/media/images/theme-images/theme-walker.jpg',
          include: false,
          showDemo: true,
          price: '6'
        },
        {
          name: 'InlineAMP',
          github: 'https://github.com/jiansing/gridea-theme-inlineamp',
          demo: 'http://gridea.cplayer.tk/demo/cplayer-gallery/',
          image: '/media/images/theme-images/theme-inlineamp.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: 'CPlayer-Gallery',
          github: 'https://github.com/CPlayer-CN/gridea-theme-cplayer-gallery',
          demo: 'http://gridea.cplayer.tk/demo/cplayer-gallery/',
          image: '/media/images/theme-images/theme-cplayer-gallery.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: 'CPlayer-Material',
          github: 'https://github.com/CPlayer-CN/gridea-theme-cplayer-material',
          demo: 'http://gridea.cplayer.tk/blog',
          image: '/media/images/theme-images/theme-cplayer-material.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: 'Fog',
          github: 'https://github.com/850552586/gridea-theme-fog',
          demo: 'http://ericam.top',
          image: '/media/images/theme-images/theme-fog.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: 'Pure',
          github: 'https://github.com/imhanjie/gridea-theme-pure',
          demo: 'https://imhanjie.com/',
          image: '/media/images/theme-images/theme-pure.jpg',
          include: false,
          isNew: false,
          showDemo: true,
        },
        {
          name: 'Breek',
          github: 'https://github.com/lmm214/gridea-theme-breek/',
          demo: 'https://i.immmmm.com/',
          image: '/media/images/theme-images/theme-breek.jpg',
          include: false,
          isNew: false,
          showDemo: true,
        },
        {
          name: 'Chic',
          github: 'https://github.com/ITJoker233/Gridea-theme-Chic',
          demo: 'https://blog.itjoker.cn/',
          image: '/media/images/theme-images/theme-chic.jpg',
          include: false,
          isNew: false,
          showDemo: true,
        },
        {
          name: 'NexT',
          github: 'https://github.com/hsxyhao/gridea-theme-next',
          demo: 'https://hsxyhao.github.io/',
          image: '/media/images/theme-images/theme-next.jpg',
          include: false,
          isNew: false,
          showDemo: true,
        },
        {
          name: '凛',
          github: 'https://github.com/name-cq/gridea-theme-lin',
          demo: 'https://apa70.com',
          image: '/media/images/theme-images/theme-lin.jpg',
          include: false,
          isNew: false,
          showDemo: true,
        },
        {
          name: '宋',
          github: 'https://github.com/alterfang/gridea-theme-song',
          demo: 'https://shanbu.fun/',
          image: '/media/images/theme-images/theme-song.jpg',
          include: false,
          isNew: false,
          showDemo: true,
        },
        {
          name: '十三',
          github: 'https://github.com/alterfang/shishan',
          demo: 'https://gridea-theme-shisan.netlify.com/',
          image: '/media/images/theme-images/theme-shisan.jpg',
          include: false,
          isNew: false,
          showDemo: true,
        },
        {
          name: '佳',
          github: 'https://github.com/alterfang/gridea-theme-jia',
          demo: 'https://day.fands.top/',
          image: '/media/images/theme-images/theme-jia.jpg',
          include: false,
          isNew: false,
          showDemo: true,
        },
        {
          name: 'Clean',
          github: 'https://github.com/Alanrk/Gridea-theme-clean',
          demo: 'https://kveln.cn/',
          image: '/media/images/theme-images/theme-clean.jpg',
          include: false,
          isNew: false,
          showDemo: true,
        },
        {
          name: 'Notes',
          github: 'https://github.com/getgridea/gridea-theme-notes',
          demo: 'https://fehey.com',
          image: '/media/images/theme-images/theme-notes.jpg',
          include: true,
        },
        {
          name: 'Simple',
          github: 'https://github.com/getgridea/gridea-theme-simple',
          image: '/media/images/theme-images/theme-simple.jpg',
          demo: 'https://fehey.com',
          include: true,
        },
        {
          name: 'Fly',
          github: 'https://github.com/getgridea/gridea-theme-fly',
          image: '/media/images/theme-images/theme-fly.jpg',
          demo: 'https://fehey.com',
          include: true,
        },
        {
          name: 'Paper',
          github: 'https://github.com/getgridea/gridea-theme-paper',
          image: '/media/images/theme-images/theme-paper.jpg',
          demo: 'https://fehey.com',
          include: true,
        },
        {
          name: 'Nederburg',
          github: 'https://github.com/Suremotoo/gridea-theme-nederburg',
          image: '/media/images/theme-images/theme-nederburg.jpg',
          demo: 'https://suremotoo.site/blog/',
        },
        {
          name: 'Space',
          github: 'https://github.com/GalaxySuze/gridea-theme-space',
          image: '/media/images/theme-images/theme-space.jpg',
          demo: 'https://zhangajian.com/',
        },
        {
          name: 'Lemon',
          github: 'https://github.com/Mrcxt/gridea-theme-lemon',
          image: '/media/images/theme-images/theme-lemon.jpg',
          demo: '',
        },
        {
          name: 'Bitcron',
          github: 'https://github.com/alterfang/gridea-theme-bitcron',
          image: '/media/images/theme-images/theme-bitcron.jpg',
          demo: '',
        },
        {
          name: 'Pan',
          github: 'https://github.com/alterfang/gridea-theme-pan',
          image: '/media/images/theme-images/theme-pan.jpg',
          demo: '',
        },
        {
          name: 'Anatole',
          github: 'https://github.com/alterfang/gridea-theme-Anatole',
          image: '/media/images/theme-images/theme-anatole.jpg',
          demo: '',
        },
      ],
      activeImage: 'gridea',
      featureList: [
        {
          title: "Markdown",
          desc: "使用最酷的 Markdown 进行创作，专注内容，其他的交给 Gridea"
        },
        {
          title: "封面图",
          desc: "快去挑选一张漂亮的封面图，为文章添彩，外链图也没问题哦"
        },
        {
          title: "自定义标签",
          desc:
            "用标签来为文章进行归类，以你喜欢的方式：编程、旅行、读书笔记...，化繁为简、不必纠结"
        },
        {
          title: "自定义菜单",
          desc:
            "我们提供了自定义菜单功能，同时贴心地准备了主页、归档和标签列表快捷选择。当然，你也可以创建外部菜单到任何地方"
        },
        {
          title: "跨设备",
          desc:
            "或许你工作使用 Mac，生活使用 Windows，又或许你是使用 Linux 的极客，这都不是事儿，Gridea 全都支持！同时支持更改源文件夹，利用 OneDrive、Dropbox 等同步工具，跨设备管理博客轻而易举！"
        },
        {
          title: "多平台",
          desc:
            "大部分情况下你用 Github Pages 来托管博客就够了，但我们同时提供了 Coding Pages 的支持"
        },
        {
          title: "多评论",
          desc:
            "Gridea 内置了 Gitalk 和 DisqusJS 两个评论系统，你可以任选其一，利用评论结交更多朋友吧！"
        },
        {
          title: "多主题",
          desc:
            "我们目前提供了 4 款内置主题，总有一款会获得你的芳心，更有趣的是，我们为每款主题提供了丰富的自定义配置，稍加配置，遇见大不同"
        },
        {
          title: "多语言",
          desc: "是的，我们贴心地为您内置了中文简体和 English 两种语言"
        },
        {
          title: "RSS",
          desc: "RSS 也是一个不错的信息订阅方式"
        }
      ],
      userList: [
        {
          link: 'https://www.y3pm.com/',
          avatar: 'https://www.y3pm.com/images/avatar.png',
          username: 'Y3.PM',
        },
        {
          link: 'https://chiahsien.github.io/',
          avatar: 'https://chiahsien.github.io/images/avatar.png',
          username: 'Nelson',
        },
        {
          link: 'https://zhangajian.com/',
          avatar: 'https://zhangajian.com/media/images/avatar.png',
          username: '张阿简博客',
        },
        {
          link: 'https://shanbu.fun/',
          avatar: 'https://i.loli.net/2019/09/28/IGFY8Ug5Pft9hWX.jpg',
          username: '山卜方',
        },
        {
          link: 'https://www.aliyaowan.com/',
          avatar: 'https://www.aliyaowan.com/images/avatar.png',
          username: '啊哩药丸',
        },
        {
          link: 'https://nuoea.com/',
          avatar: 'https://nuoea.com/media/images/site_avatar.png',
          username: 'NUOEA',
        },
        {
          link: 'https://jiaoluo.co/',
          avatar: 'https://s2.ax1x.com/2019/09/20/nOyAts.jpg',
          username: '彼岸临窗',
        },
        {
          link: 'https://kveln.cn/',
          avatar: 'https://kveln.cn/favicon.ico',
          username: 'Kveln\'Blog',
        },
        {
          link: 'https://chenmei.xyz/',
          avatar: 'https://chenmei.xyz/images/avatar.png',
          username: '呆呆是槑',
        },
        {
          link: 'https://moyu.life/',
          avatar: 'https://brick713.github.io/images/avatar.png',
          username: 'Brick713 的小黑屋',
        },
        {
          link: 'https://thegayhub.github.io/',
          avatar: 'https://TheGayhub.github.io/images/avatar.png',
          username: 'Guapi',
        },
        {
          link: 'https://blog.ixiao9.com/',
          avatar: 'https://ixiao9.github.io/images/avatar.png',
          username: 'iXiAo9',
        },
      ],
    } 
  },
  methods: {
    openUrl(url) {
      window.open(url, '_blank')
    },
    downloadApp(url, gaInfo) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){
        dataLayer.push(arguments);
      }
      gtag('event', 'download-app', gaInfo);
      window.open(url, '_blank')
    },
  },
})