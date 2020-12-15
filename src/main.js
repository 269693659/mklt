import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/index.js'
import './unit/vant'
import '@/api/axios'
import i18n from '@/i18n/index'
import './plugins/element.js'

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
