import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant' // 引入vant组件库
import 'vant/lib/index.css' // 引入样式
import 'amfe-flexible' // 引入动态设置 字体大小的包
Vue.use(Vant) // 全局注册
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
