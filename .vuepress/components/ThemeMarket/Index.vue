<template>
  <div class="theme-market sm:px-1">
    <l-row :gutter="24">
      <l-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" v-for="(item, index) in list" :key="index">
        <div class="theme-item shadow-md rounded bg-white hover:shadow-lg" :style="{ 'background-image': `url(${item.image})` }" @click="download(item)">
        </div>
        <div class="theme-info">
          <span class="theme-title">{{ item.name }}</span>
          <l-button type="text" @click="download(item)">Download</l-button>
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
          name: 'Notes',
          github: 'https://github.com/getgridea/gridea-theme-notes',
          demo: 'https://fehey.com',
          image: '/images/themes/theme-notes.jpg',
        },
        {
          name: 'Simple',
          github: 'https://github.com/getgridea/gridea-theme-simple',
          image: '/images/themes/theme-simple.jpg',
          demo: 'https://fehey.com',
        },
        {
          name: 'Fly',
          github: 'https://github.com/getgridea/gridea-theme-fly',
          image: '/images/themes/theme-fly.jpg',
          demo: 'https://fehey.com',
        },
        {
          name: 'Paper',
          github: 'https://github.com/getgridea/gridea-theme-paper',
          image: '/images/themes/theme-paper.jpg',
          demo: 'https://fehey.com',
        },
      ],
    }
  },
  methods: {
    download(item) {
      window.open(item.github)
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
