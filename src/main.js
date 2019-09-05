// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SocialSharing from 'vue-social-sharing'
import VueAnalytics from 'vue-analytics'
import VViewer from 'v-viewer'

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-113292325-1',
  router
})
Vue.use(SocialSharing)
Vue.use(VViewer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
