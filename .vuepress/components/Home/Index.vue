<template>
  <div class="home-page">
    <div class="action-container">
      <l-button size="large" @click="goPage(`https://github.com/hve-notes/hve-notes/releases/download/v${version}/hve-notes-${version}.dmg`)">𝖧𝗏𝖾 𝖭𝗈𝗍𝖾𝗌 𝖿𝗈𝗋 𝖬𝖺𝖼 -𝗏 {{ version }}</l-button>
      <l-button size="large" @click="goPage(`https://github.com/hve-notes/hve-notes/releases/download/v${version}/hve-notes.Setup.${version}.exe`)">𝖧𝗏𝖾 𝖭𝗈𝗍𝖾𝗌 𝖿𝗈𝗋 𝖶𝗂𝗇𝖽𝗈𝗐𝗌 -𝗏 {{ version }}</l-button>
    </div>
    <div class="star-container">
      <gh-btns-star slug="hve-notes/hve-notes" show-count></gh-btns-star>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/hve-notes/hve-notes/master/hve-notes-app.png" alt="">
    </div>
    <div class="home-content">
      <p><span class="large-icon">🌱</span> 当然 𝗛𝘃𝗲 𝗡𝗼𝘁𝗲𝘀 还很年轻，有很多不足，但请相信，它会不停向前 <span class="large-icon">🏃</span></p>
      <p>未来，它一定会成为你离不开的伙伴</p>
      <p>尽情发挥你的才华吧！</p>
      <p>😘 𝖤𝗇𝗃𝗈𝗒~</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      stars: 0,
      version: '0.6.2',
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
      axios.get('https://api.github.com/repos/hve-notes/hve-notes').then((res) => {
        this.stars = res.data.stargazers_count
      })
    },
    async fetchVersion() {
      const res = await axios.get('https://api.github.com/repos/hve-notes/hve-notes/releases/latest')
      if (res.status === 200) {
        this.version = res.data.name.substring(1)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.home-page
  .action-container
    text-align center
  .home-content
    text-align center
    .large-icon
      font-size 28px
  .star-container
    padding-top: 16px;
    text-align center
  >>> .gh-button-container
    float none
</style>
