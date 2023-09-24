import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

// 注册微应用列表并启动
registerMicroApps([
  // 当匹配到activeRule 的时候，请求获取entry，渲染到container
  {
    name: 'reactApp', // 自定义微应用名称， 必须唯一
    entry: '//localhost:3000', // 微应用的HTML 入口
    container: '#container', // 将子应用渲染到的入口
    activeRule: '/app-vue3'
  },
  // {
  //   name: 'vueApp',
  //   entry: '//localhost:8080',
  //   container: '#container',
  //   activeRule: '/app-vue'
  // },
  // {
  //   name: 'angularApp',
  //   entry: '//localhost:4200',
  //   container: '#container',
  //   activeRule: '/app-angular'
  // },
])

// 启动qiankun
start()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
