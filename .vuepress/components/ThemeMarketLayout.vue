<template>
  <div class="theme-market-layout">
    <theme-market></theme-market>
  </div>
</template>

<script>
import ThemeMarket from './ThemeMarket/Index.vue'

export default {
  components: {
    ThemeMarket,
  },
}
</script>

<style lang="stylus" scoped>
.theme-market-layout
  background #f9f7f3
</style>
