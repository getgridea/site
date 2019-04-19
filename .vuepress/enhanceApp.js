import Live from 'live-ui'
import 'live-ui/dist/live.css'
// import 'css-doodle'
import VueGitHubButtons from '../node_modules/vue-github-buttons'
import '../node_modules/vue-github-buttons/dist/vue-github-buttons.css'
import HomeLayout from './components/HomeLayout.vue'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Live)
  Vue.use(VueGitHubButtons, { useCache: false })
  Vue.use(HomeLayout)
}
