<template>
  <div class="home-page">
    <div class="hero-container">
      <css-doodle class="hero-bg">
        :doodle {
          @grid: 24 / 100vmax;
          background: #f9d654;
          font-family: sans-serif;
        }
        :after {
          content: \@hex(@rand(0x2500, 0x257f));
          color: rgba(67, 67, 67, 0.16);
          font-size: 2vmax;
        }
      </css-doodle>
      <div class="hero-content">
        <div class="left">
          <div class="slogon">一个静态博客写作客户端</div>
          <div class="description">记录生活、心情、知识、笔记、创意...</div>
          <div>
            <l-button size="large" type="primary" @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea-${version}.dmg`)">Gridea for Mac -𝗏 {{ version }}</l-button>
            <l-button size="large" type="primary" @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea.Setup.${version}.exe`)">Gridea for Windows -𝗏 {{ version }}</l-button>
          </div>
          <div class="star">
            <gh-btns-star slug="getgridea/gridea" show-count></gh-btns-star>
            <span class="star-tip">🌟Star 支持作者！</span>
          </div>
          <div class="shields-container">
            <a href="https://github.com/getgridea/gridea/releases/latest">
              <img src="https://img.shields.io/github/release/getgridea/gridea.svg?style=flat-square" alt="">
            </a>

            <a href="https://github.com/getgridea/gridea/blob/master/LICENSE">
              <img src="https://img.shields.io/github/license/getgridea/gridea.svg?style=flat-square" alt="">
            </a>

            <a href="https://github.com/getgridea/gridea/releases/latest">
              <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/getgridea/gridea/total.svg?color=%2312b886&style=flat-square">
            </a>
          </div>
        </div>
        <div class="right">
          <img src="https://raw.githubusercontent.com/getgridea/gridea/develop/gridea-app.png" alt="Gridea" class="app-img">
        </div>
      </div>
    </div>
    <div class="container-wrapper">
      <div class="container">
        <h2 class="section-title">你最需要的，我们都准备了</h2>
        <div class="item-container">
          <div class="item" v-for="(item, index) in featureList" :key="index">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-wrapper white">
      <div class="container">
        <h2 class="section-title">不止这些</h2>
        <div class="content-container">
          除了这些，还有一些你可能期待的（主题包含）：Katex 公式、Google Analytics、社交链接、TOC...，心动了吗？快快下载体验吧！
        </div>
        <div class="action-container">
          <l-button size="large" @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea-${version}.dmg`)">Gridea for Mac -𝗏 {{ version }}</l-button>
          <l-button size="large" @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea.Setup.${version}.exe`)">Gridea for Windows -𝗏 {{ version }}</l-button>
        </div>
        <div class="star-container">
          <div class="star-tip">🌟Star 支持作者！👇</div>
          <gh-btns-star slug="getgridea/gridea" show-count></gh-btns-star>
        </div>
      </div>
    </div>
    <div class="home-content">
      <p><span class="large-icon">🌱</span> 当然 Gridea 还很年轻，有很多不足，但请相信，它会不停向前 <span class="large-icon">🏃</span></p>
      <p>未来，它一定会成为你离不开的伙伴</p>
      <p>尽情发挥你的才华吧！</p>
      <p>😘 𝖤𝗇𝗃𝗈𝗒~</p>
      <a href="https://t.me/joinchat/AAAAAEj82_lma0Y1wmyqUQ" target="_blank">Telegram 频道</a> |
      <a href="https://t.me/joinchat/IDY0ahRqb8NPodv95BNpBg" target="_blank">Telegram 群组</a>
      <l-button type="text">QQ 群：970332209</l-button>
      <div class="shields-container">
        <a href="https://github.com/getgridea/gridea/releases/latest">
          <img src="https://img.shields.io/github/release/getgridea/gridea.svg?style=flat-square" alt="">
        </a>

        <a href="https://github.com/getgridea/gridea/blob/master/LICENSE">
          <img src="https://img.shields.io/github/license/getgridea/gridea.svg?style=flat-square" alt="">
        </a>

        <a href="https://github.com/getgridea/gridea/releases/latest">
          <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/getgridea/gridea/total.svg?color=%2312b886&style=flat-square">
        </a>
      </div>
    </div>
    <footer>
      <css-doodle class="footer-bg">
        :doodle {
          @grid: 6 / 100%;
        }
        @size: .8em;
        background: hsla(calc(10 * @index()), 60%, 60%, .2);
        clip-path: polygon( 50% 0, 100% 100%, 0 100%);
        transform:
          rotate(@rand(360deg))
          scale(@rand(.6, 1, .1))
          translate(
            @rand(-10em, 10em),
            @rand(-10em, 10em)
          )
      </css-doodle>
      Made with ❤️ by <a href="https://github.com/EryouHao" target="_blank">EryouHao</a>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import 'css-doodle'

export default {
  data() {
    return {
      stars: 0,
      version: '',
      featureList: [
        {
          title: 'Markdown',
          desc: '使用最酷的 Markdown 进行创作，专注内容，其他的交给 Gridea',
        },
        {
          title: '封面图',
          desc: '快去为文章搭配一张精心挑选的封面图，为文章添彩，外链图也没问题哦',
        },
        {
          title: '自定义标签',
          desc: '用标签来为文章进行归类，以你喜欢的方式：编程、旅行、读书笔记...，是时候按分类来整理文章了',
        },
        {
          title: '自定义菜单',
          desc: '我们提供了自定义菜单功能，同时候选菜单中提供了主页、归档和标签列表快捷选择。当然了，你也可以创建外部菜单到任何地方',
        },
        {
          title: '跨设备',
          desc: '或许你工作使用 Mac，生活使用 Windows，这都不是事儿，Gridea 全都支持！什么，你喜欢用 Linux？再等等，稍后就来',
        },
        {
          title: '多平台',
          desc: '大部分情况下你用 Github Pages 来托管博客就够了，但我们同时提供了 Coding Pages 的支持',
        },
        {
          title: '多评论',
          desc: 'Gridea 内置了 Gitalk 和 DisqusJS 两个评论系统，你可以任选其一，利用评论结交更多朋友吧！',
        },
        {
          title: '多主题',
          desc: '我们目前提供了 4 款内置主题，总有一款会获得你的芳心，更有趣的是，我们为每款主题提供了丰富的自定义配置，稍加配置，邂逅大不同',
        },
        {
          title: '多语言',
          desc: '我们贴心地为您内置了中文简体和 English 两种语言',
        },
      ],
    }
  },
  created() {
    this.fetchStars()
    this.fetchVersion()
  },
  methods: {
    goPage(url) {
      window.open(url, '_blank')
    },
    fetchStars() {
      axios.get('https://api.github.com/repos/getgridea/gridea').then((res) => {
        this.stars = res.data.stargazers_count
      })
    },
    async fetchVersion() {
      const res = await axios.get('https://api.github.com/repos/getgridea/gridea/releases/latest')
      if (res.status === 200) {
        this.version = res.data.name.substring(1)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.home-page
  .description
    padding 16px 0 32px
  .action-container
    text-align center
  .home-content
    text-align center
    padding-bottom 32px
    .large-icon
      font-size 28px
  .star-container
    padding-top: 16px;
    text-align center
    .star-tip
      padding 16px 0
      font-weight bold
  .shields-container
    padding 24px 0
  >>> .gh-button-container
    float none
    margin 0

.hero-container
  overflow hidden
  position relative
  .hero-bg
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    z-index -1
  .hero-content
    display flex
    justify-content space-between
    padding 80px
    .left
      width 38.2%
      display flex
      flex-direction column
      justify-content center
      .slogon
        font-size 40px
        color #000
        font-weight 600
      .description
        font-size 24px
      >>> .live-btn-primary
        background #434343
        transition all 0.382s
        &:hover
          box-shadow 0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)!important
          transform translateY(-4px)
      .star
        padding 24px 0
        display flex
        align-items center
        font-weight bold

    .right
      width 61.8%
      display flex
      align-items center
      justify-content center
      .app-img
        width 100%

.section-title
  text-align center
  border-bottom none
.container-wrapper
  background #f9f7f3
  padding 32px
  &.white
    background #fff
.container
  max-width 1200px
  margin 48px auto
  .item-container
    display flex
    flex-wrap wrap
    justify-content center
    .item
      width 25%
      padding 16px
      margin 16px
      box-shadow 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)
      // border-radius 4px
      background #fff
      border-bottom-left-radius: 25px 115px;
      border-bottom-right-radius: 155px 25px;
      border-top-left-radius: 15px 225px;
      border-top-right-radius: 25px 150px;
      .title
        font-size 18px
        padding-bottom 16px
        font-weight bold
        color #000
      .desc
        line-height 1.5

.content-container
  text-align: center
  padding 32px
  line-height 1.5

.home-content
  padding 32px
footer
  padding: 48px 0;
  position: relative;
  overflow: hidden;
  text-align center

@media (max-width: 800px)
  .hero-container
    .hero-content
      flex-direction column
      padding 48px 32px
      .star
        flex-direction column-reverse
        .star-tip
          padding-bottom 16px
      .left, .right
        width 100%
        text-align center
      .left
        .slogon
          font-size 32px
        .description
          font-size 18px
        .live-btn-primary
          margin-bottom 8px

  .container
    margin 32px auto
    .item-container
      .item
        width 100%
        margin 16px 0
.content-container
  padding 16px 0 32px

</style>
