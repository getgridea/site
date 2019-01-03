<template>
  <div class="home-page">
    <div class="action-container">
      <l-button size="large" @click="goPage('https://github.com/hve-notes/hve-notes/releases/download/v0.6.1/hve-notes-0.6.1.dmg')">Hve Notes for Mac -v 0.6.1</l-button>
      <l-button size="large" @click="goPage('https://github.com/hve-notes/hve-notes/releases/download/v0.6.1/hve-notes.Setup.0.6.1.exe')">Hve Notes for Windows -v 0.6.1</l-button>
    </div>
    <div>
      <img src="../../public/hve-notes-app.png" alt="">
    </div>
    <div class="home-content">
      <div class="star-container">
        <l-tag class="star-tag" type="info" @click.native="goPage('https://github.com/hve-notes/hve-notes')">Star: {{ stars }}</l-tag>
      </div>
      <p><span class="large-icon">🌱</span> 当然 Hve Notes 还很年轻，有很多不足，但请相信，它会不停向前 <span class="large-icon">🏃</span></p> 
      <p>未来，它一定会成为你离不开的伙伴</p> 
      <p>尽情发挥你的才华吧！</p> 
      <p>😘 Enjoy~</p> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      stars: 0,
    }
  },
  created() {
    this.fetchStars()
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
    .star-tag
      cursor pointer
</style>
