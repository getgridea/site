<template>
  <div class="theme-market sm:px-1">
    <div class="text-center lg:px-4 pb-10">
      <div class="p-2 bg-yellow items-center text-yellow-darkest leading-none lg:rounded-full flex lg:inline-flex cursor-pointer" role="alert" @click="newTheme">
        <span class="flex rounded-full bg-yellow-dark uppercase px-2 py-1 text-xs font-bold mr-3">Click Here</span>
        <span class="font-semibold mr-2 text-left flex-auto">快来将你创作的主题分享给我们吧！</span>
        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
      </div>
    </div>
    <l-row :gutter="24">
      <l-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" v-for="(item, index) in list" :key="index">
        <div class="theme-item shadow-md rounded bg-white hover:shadow-lg" :style="{ 'background-image': `url(${item.image})` }" @click="download(item)">
        </div>
        <div class="theme-info">
          <span class="theme-title">
            {{ item.name }}
            <l-tag type="primary" v-if="item.price">{{ item.price }}</l-tag>
            <l-tag type="success" v-if="item.isNew">NEW</l-tag>
            <l-tag type="warning" v-if="item.include">内置</l-tag>
          </span>
          <span>
            <l-button type="text" v-if="item.showDemo" @click="view(item)">VIEW</l-button>
            <l-button type="text" @click="download(item)">DOWNLOAD</l-button>
          </span>
        </div>
      </l-col>
    </l-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'Line',
          github: 'https://github.com/EryouHao/gridea-theme-line',
          link: 'https://mianbaoduo.com/o/bread/mbd-Zp6Ulg==',
          demo: 'https://gridea-theme-line.netlify.com',
          image: '/images/themes/theme-line.jpg',
          include: false,
          showDemo: true,
          isNew: true,
          price: '¥ 6'
        },
        {
          name: 'Tech',
          github: 'https://github.com/EryouHao/gridea-theme-tech',
          link: 'https://mianbaoduo.com/o/bread/mbd-ZZ2clA==',
          demo: 'https://gridea-theme-tech.netlify.com',
          image: '/images/themes/theme-tech.jpg',
          include: false,
          showDemo: true,
          isNew: true,
          price: '¥ 6'
        },
        {
          name: 'Walker',
          github: 'https://github.com/EryouHao/gridea-theme-walker',
          link: 'https://mianbaoduo.com/product/show/mbd-aJqU',
          demo: 'https://gridea-theme-walker.netlify.com',
          image: '/images/themes/theme-walker.jpg',
          include: false,
          showDemo: true,
          price: '¥ 6'
        },
        {
          name: 'Clean',
          github: 'https://github.com/Alanrk/Gridea-theme-clean',
          demo: 'https://kveln.cn/',
          image: '/images/themes/theme-clean.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: 'Notes',
          github: 'https://github.com/getgridea/gridea-theme-notes',
          demo: 'https://fehey.com',
          image: '/images/themes/theme-notes.jpg',
          include: true,
        },
        {
          name: 'Simple',
          github: 'https://github.com/getgridea/gridea-theme-simple',
          image: '/images/themes/theme-simple.jpg',
          demo: 'https://fehey.com',
          include: true,
        },
        {
          name: 'Fly',
          github: 'https://github.com/getgridea/gridea-theme-fly',
          image: '/images/themes/theme-fly.jpg',
          demo: 'https://fehey.com',
          include: true,
        },
        {
          name: 'Paper',
          github: 'https://github.com/getgridea/gridea-theme-paper',
          image: '/images/themes/theme-paper.jpg',
          demo: 'https://fehey.com',
          include: true,
        },
        {
          name: 'Nederburg',
          github: 'https://github.com/Suremotoo/gridea-theme-nederburg',
          image: '/images/themes/theme-nederburg.jpg',
          demo: 'https://suremotoo.site/blog/',
        },
        {
          name: 'Space',
          github: 'https://github.com/GalaxySuze/gridea-theme-space',
          image: '/images/themes/theme-space.jpg',
          demo: 'https://zhangajian.com/',
        },
        {
          name: 'Lemon',
          github: 'https://github.com/Mrcxt/gridea-theme-lemon',
          image: '/images/themes/theme-lemon.jpg',
          demo: '',
        },
        {
          name: 'Bitcron',
          github: 'https://github.com/alterfang/gridea-theme-bitcron',
          image: '/images/themes/theme-bitcron.jpg',
          demo: '',
        },
        {
          name: 'Pan',
          github: 'https://github.com/alterfang/gridea-theme-pan',
          image: '/images/themes/theme-pan.jpg',
          demo: '',
        },
        {
          name: 'Anatole',
          github: 'https://github.com/alterfang/gridea-theme-Anatole',
          image: '/images/themes/theme-anatole.jpg',
          demo: '',
        },
      ],
    }
  },
  methods: {
    download(item) {
      window.open(item.link || item.github)
    },
    view(item) {
      window.open(item.demo)
    },
    newTheme() {
      window.open('https://github.com/getgridea/site/issues/new')
    },
  },
}
</script>

<style lang="stylus" scoped>
.theme-market
  margin 0 auto
  padding 48px
  .theme-item
    width 100%
    padding-top 61.8%
    background-size cover
    background-position top center
    background-repeat no-repeat
    cursor pointer
    transition all 0.5s
    &:hover
      transform translateY(-4px)

  .theme-info
    display flex
    justify-content space-between
    align-items center
    padding 16px 0 16px 8px
    margin-bottom 32px
    .theme-title
      font-size 18px
      font-weight lighter

@media (max-width 600px)
  .theme-market
    padding 32px
</style>
