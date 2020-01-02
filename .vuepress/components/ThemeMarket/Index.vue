<template>
  <div class="theme-market sm:px-1">
    <div class="text-center lg:px-4 pb-10">
      <div class="p-2 bg-yellow items-center text-yellow-darkest leading-none lg:rounded-full flex lg:inline-flex cursor-pointer" role="alert" @click="newTheme">
        <span class="flex rounded-full bg-yellow-dark uppercase px-2 py-1 text-xs font-bold mr-3">Click Here</span>
        <span class="font-semibold mr-2 text-left flex-auto">快来将你创作的主题分享给我们吧！</span>
        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
      </div>
    </div>
    <l-row :gutter="48">
      <l-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="(item, index) in list" :key="index">
        <div class="theme-item shadow-md rounded bg-white hover:shadow-lg relative" :style="{ 'background-image': `url(${item.image})` }" @click="download(item)">
          <vs-chip color="#6B46C1" class="new-tag" v-if="item.isNew">
            NEW
          </vs-chip>
        </div>
        <div class="theme-info">
          <span>
            <span class="theme-title">
              {{ item.name }}
            </span>
            <vs-chip color="#38A169" v-if="item.include">
              内置
            </vs-chip>
            <vs-chip color="#D69E2E" v-if="item.price">
              {{ item.price }}
            </vs-chip>
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
          image: '/images/theme-images/theme-line.jpg',
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
          image: '/images/theme-images/theme-tech.jpg',
          include: false,
          showDemo: true,
          isNew: false,
          price: '¥ 6'
        },
        {
          name: 'Walker',
          github: 'https://github.com/EryouHao/gridea-theme-walker',
          link: 'https://mianbaoduo.com/product/show/mbd-aJqU',
          demo: 'https://gridea-theme-walker.netlify.com',
          image: '/images/theme-images/theme-walker.jpg',
          include: false,
          showDemo: true,
          price: '¥ 6'
        },
        {
          name: 'NexT',
          github: 'https://github.com/hsxyhao/gridea-theme-next',
          demo: 'https://hsxyhao.github.io/',
          image: '/images/theme-images/theme-next.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: '凛',
          github: 'https://github.com/name-cq/gridea-theme-lin',
          demo: 'https://apa70.com',
          image: '/images/theme-images/theme-lin.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: '宋',
          github: 'https://github.com/alterfang/gridea-theme-song',
          demo: 'https://shanbu.fun/',
          image: '/images/theme-images/theme-song.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: '宋',
          github: 'https://github.com/alterfang/gridea-theme-song',
          demo: 'https://shanbu.fun/',
          image: '/images/theme-images/theme-song.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: '十三',
          github: 'https://github.com/alterfang/shishan',
          demo: 'https://gridea-theme-shisan.netlify.com/',
          image: '/images/theme-images/theme-shisan.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: '佳',
          github: 'https://github.com/alterfang/gridea-theme-jia',
          demo: 'https://day.fands.top/',
          image: '/images/theme-images/theme-jia.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: 'Clean',
          github: 'https://github.com/Alanrk/Gridea-theme-clean',
          demo: 'https://kveln.cn/',
          image: '/images/theme-images/theme-clean.jpg',
          include: false,
          isNew: true,
          showDemo: true,
        },
        {
          name: 'Notes',
          github: 'https://github.com/getgridea/gridea-theme-notes',
          demo: 'https://fehey.com',
          image: '/images/theme-images/theme-notes.jpg',
          include: true,
        },
        {
          name: 'Simple',
          github: 'https://github.com/getgridea/gridea-theme-simple',
          image: '/images/theme-images/theme-simple.jpg',
          demo: 'https://fehey.com',
          include: true,
        },
        {
          name: 'Fly',
          github: 'https://github.com/getgridea/gridea-theme-fly',
          image: '/images/theme-images/theme-fly.jpg',
          demo: 'https://fehey.com',
          include: true,
        },
        {
          name: 'Paper',
          github: 'https://github.com/getgridea/gridea-theme-paper',
          image: '/images/theme-images/theme-paper.jpg',
          demo: 'https://fehey.com',
          include: true,
        },
        {
          name: 'Nederburg',
          github: 'https://github.com/Suremotoo/gridea-theme-nederburg',
          image: '/images/theme-images/theme-nederburg.jpg',
          demo: 'https://suremotoo.site/blog/',
        },
        {
          name: 'Space',
          github: 'https://github.com/GalaxySuze/gridea-theme-space',
          image: '/images/theme-images/theme-space.jpg',
          demo: 'https://zhangajian.com/',
        },
        {
          name: 'Lemon',
          github: 'https://github.com/Mrcxt/gridea-theme-lemon',
          image: '/images/theme-images/theme-lemon.jpg',
          demo: '',
        },
        {
          name: 'Bitcron',
          github: 'https://github.com/alterfang/gridea-theme-bitcron',
          image: '/images/theme-images/theme-bitcron.jpg',
          demo: '',
        },
        {
          name: 'Pan',
          github: 'https://github.com/alterfang/gridea-theme-pan',
          image: '/images/theme-images/theme-pan.jpg',
          demo: '',
        },
        {
          name: 'Anatole',
          github: 'https://github.com/alterfang/gridea-theme-Anatole',
          image: '/images/theme-images/theme-anatole.jpg',
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
    .new-tag
      position absolute
      left -8px
      top -12px

  .theme-info
    display flex
    justify-content space-between
    align-items center
    padding 16px 0 16px 8px
    margin-bottom 32px
    .theme-title
      font-size 18px
      float left
      line-height 28px
      margin-right 8px

@media (max-width 600px)
  .theme-market
    padding 32px
</style>
