import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 没有Vue.config.productionTip = false这句代码，它会显示你生产模式的消息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
