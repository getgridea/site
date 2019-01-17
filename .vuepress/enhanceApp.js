import Live from 'live-ui'
import 'live-ui/dist/live.css'
import VueGitHubButtons from 'vue-github-buttons'
import 'vue-github-buttons/dist/vue-github-buttons.css'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Live)
  Vue.use(VueGitHubButtons, { useCache: false })
}
