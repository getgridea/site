<template>
  <div class="home-page">
    <div class="description">
      当然，除了这些，还有一些你可能期待的（主题包含）：Katex 公式、Google Analytics、社交链接...，心动了吗？快快下载体验吧！
    </div>
    <div class="action-container">
      <l-button size="large" @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Hve.Notes-${version}.dmg`)">Gridea for Mac -𝗏 {{ version }}</l-button>
      <l-button size="large" @click="goPage(`https://github.com/getgridea/gridea/releases/download/v${version}/Hve.Notes.Setup.${version}.exe`)">Gridea for Windows -𝗏 {{ version }}</l-button>
    </div>
    <div class="star-container">
      <div class="star-tip">🌟Star 支持作者！👇</div>
      <gh-btns-star slug="getgridea/gridea" show-count></gh-btns-star>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/getgridea/gridea/develop/gridea-app.png" alt="">
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      stars: 0,
      version: '',
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
</style>
