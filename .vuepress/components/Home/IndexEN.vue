<template>
  <div class="home-page">
    <div class="hero-container">
      <css-doodle class="hero-bg">
        :doodle {
          @grid: 24 / 120vmax;
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
          <div class="slogon">A static blog writing client.</div>
          <div class="description">record your life, mood, knowledge, notes and ideas...</div>
          <div class="btn-container">
            <l-button size="large" type="primary" @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea-${version}.dmg`)">Gridea for Mac -𝗏 {{ version }}</l-button>
            <l-button size="large" type="primary" @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea.Setup.${version}.exe`)">Gridea for Windows -𝗏 {{ version }}</l-button>
            <l-button size="large" type="primary" @click="goPage(`https://github.com/getgridea/gridea/releases`)">Gridea for Linux -𝗏 {{ version }}</l-button>
          </div>
          <div class="star">
            <gh-btns-star slug="getgridea/gridea" show-count></gh-btns-star>
            <span class="star-tip">🌟Give us a star!</span>
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
          <img src="https://raw.githubusercontent.com/getgridea/gridea/master/gridea-app-en.png" alt="Gridea" class="app-img">
        </div>
      </div>
    </div>
    <div class="container-wrapper">
      <div class="container">
        <h2 class="section-title">We have all the things you need most.</h2>
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
        <h2 class="section-title">Themes Support</h2>
        <img class="theme-img" src="/themes.png" alt="">
      </div>
    </div>
    <div class="container-wrapper">
      <div class="container">
        <h2 class="section-title">More than these.</h2>
        <div class="content-container">
          In addition to these, there are some things you might expect (topics include): KaTeX formula, Google Analytics, social links, TOC ..., are you excited? Download quickly!
        </div>
        <div class="action-container">
          <l-button size="large" @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea-${version}.dmg`)">Gridea for Mac -𝗏 {{ version }}</l-button>
          <l-button size="large" @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Gridea.Setup.${version}.exe`)">Gridea for Windows -𝗏 {{ version }}</l-button>
          <l-button size="large" type="primary" @click="goPage(`https://github.com/getgridea/gridea/releases`)">Gridea for Linux -𝗏 {{ version }}</l-button>
        </div>
        <div class="star-container">
          <div class="star-tip">🌟Give us a star!👇</div>
          <gh-btns-star slug="getgridea/gridea" show-count></gh-btns-star>
        </div>
      </div>
    </div>
    <div class="home-content">
      <p><span class="large-icon">🌱</span> Of course Gridea is still very basic, but please believe that it will keep moving forward. <span class="large-icon">🏃</span></p>
      <p>In the future, it will definitely become your inseparable partner.</p>
      <p>Give full play to your talent!</p>
      <p>😘 𝖤𝗇𝗃𝗈𝗒~</p>
      <a href="https://t.me/joinchat/AAAAAEj82_lma0Y1wmyqUQ" target="_blank">Telegram Channel</a> |
      <a href="https://t.me/joinchat/IDY0ahRqb8NPodv95BNpBg" target="_blank">Telegram Group(Chinese)</a>
      <l-button type="text">QQ Group(Chinese)：970332209</l-button>
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
// import 'css-doodle'

export default {
  data() {
    return {
      stars: 0,
      version: '',
      featureList: [
        {
          title: 'Markdown',
          desc: 'Use the coolest Markdown to create, focus on content, and leave the rest to Gridea',
        },
        {
          title: 'Cover Picture',
          desc: 'Go and pick a beautiful cover picture to add color to the article. The outer chain picture is no problem.',
        },
        {
          title: 'Custom tag',
          desc: 'Use tag to classify articles, and use your favorite methods: programming, traveling, reading notes, etc. to simplify the complex and do not have to struggle with it.',
        },
        {
          title: 'Custom menu',
          desc: 'We provide custom menu function, and at the same time, we prepare home page, archive and label list for quick selection. Of course, you can also create external menus anywhere.',
        },
        {
          title: 'Cross equipment',
          desc: 'Maybe you use Mac in your work, Windows in your life, or you are a geek using Linux. this is not a matter. Gridea supports all of them! At the same time, it supports changing the source folder, and it is easy to manage blogs across devices by using synchronization tools such as OneDrive and Dropbox.',
        },
        {
          title: 'Multiple platforms',
          desc: 'In most cases, it is enough for you to use Github Pages to host blogs, but we also provide Coding Pages support.',
        },
        {
          title: 'Comments support',
          desc: 'Gridea provides two comment systems Gitalk and DisqusJS. You can choose one of them. Make more friends with comments!',
        },
        {
          title: 'Theme support',
          desc: 'At present, we provide 4 built-in themes, one of which will win your heart. What is more interesting is that we provide a wealth of custom configurations for each theme. With a little configuration, we meet a big difference.',
        },
        {
          title: 'Languages support',
          desc: 'Yes, we have kindly provided you with simplified Chinese, traditional Chinese and English',
        },
        {
          title: 'RSS',
          desc: 'RSS is also a good way to subscribe information.',
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
      // const res = await axios.get('https://api.github.com/repos/getgridea/gridea/releases/latest')
      // if (res.status === 200) {
      //   this.version = res.data.name.substring(1)
      // }
      this.version = '0.8.2'
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
    .live-btn-large
      margin-bottom 8px
      background #f9d654
      box-shadow 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)!important
      color #000000
      transition all 0.382s
      &:hover
        box-shadow 0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)!important
        transform translateY(-4px)
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
        text-shadow 2px 2px 0px #f9f7f3
      .description
        font-size 24px
      .btn-container
        padding 32px 0
        .live-btn
          margin-bottom 8px
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

.theme-img
  display block
  width 100%
  max-width 800px
  margin 32px auto
  border-radius 8px
  box-shadow 0 25px 50px -12px rgba(0, 0, 0, .25)

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
          font-size 28px
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
