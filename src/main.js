import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/assets/css/font-awesome.css'
import '~/assets/css/owl.carousel.css'
import '~/assets/css/owl.theme.css'
import '~/assets/css/skin.less'
import '~/assets/css/style.less'
import '~/assets/css/variables.less'
// import jquery from 'jquery'
import Vuex from 'vuex'
import getters from './store/getters'
import mutations from './store/mutations'
import actions from './store/actions'

export default function (Vue, { head, appOptions }) {
  Vue.use(Bootstrap)
  Vue.use(Vuex)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:700'
  })

  head.script.push(
      {type: 'text/javascript', src: 'https://code.jquery.com/jquery-3.3.1.min.js'},
      {type: 'text/javascript', src: '/assets/plugins/imagesloaded.pkgd.min.js'},
      {type: 'text/javascript', src: '/assets/plugins/owl.carousel.min.js'},
      {type: 'text/javascript', src: '/assets/plugins/masonry.pkgd.min.js'},
      {type: 'text/javascript', src: '/assets/js/navigation.js'},
      {type: 'text/javascript', src: '/assets/js/skip-link-focus-fix.js'},
      {type: 'text/javascript', src: '/assets/js/script.min.js'}
  )
  // Vue.prototype.$jquery = jquery

  // set Vuex store
  appOptions.store = new Vuex.Store({
    state: {
      allArticles: [],
      articles: [],
      language: 'en',
      languages: {
        'en': 'English',
        'it': 'Italiano',
        'ar': 'العربية',
        'fa': 'فارسی',
        'es': 'Español',
        'fr': 'français',
        'cn': '中文',
        'de': 'Deutsch',
        'ru': 'русский',
        'hi': 'हिन्दी'
      },
      social_links: [
        // { id: 1, icon: "twitter" },
        { id: 2, icon: "facebook", url:"https://www.facebook.com/The-Dawn-Breakers-Challenge-329820570524376/" },
        // { id: 3, icon: "instagram" },
        // { id: 4, icon: "pinterest" },
        { id: 5, icon: "youtube", url:"" }
      ]
    },
    mutations,
    getters,
    actions
  })
}
