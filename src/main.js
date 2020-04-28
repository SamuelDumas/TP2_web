import Vue from 'vue'
import Films from './views/Films.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Films)
}).$mount('#app')
