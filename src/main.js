import Vue from 'vue'
import App from './layout/App.vue'
import router from './router/index'
import store from './store/index.js'
import './assets/scss/index.scss'
import './plugins/elementui'

Vue.config.productionTip = false

require('./plugins/mock.js')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
