import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

// 注册微应用列表并启动
// qiankun内部会拦截监听路由导航
// 路由导航的时候判断是否匹配子应用的activeRule
// 如果匹配动态请求加载子应用的entry（所以子应用必须要允许跨域）
// 然后把加载到的内容渲染到主应用预留好的container中
registerMicroApps([
  // 当匹配到activeRule 的时候，请求获取entry，渲染到container
  {
    name: 'app-vue3', // 自定义微应用名称， 必须唯一
    entry: '//localhost:8081', // 微应用的HTML 入口
    container: '#container', // 将子应用渲染到的入口
    activeRule: '/app-vue3',
    props: {
      // 传递额外的 props 数据
      // 主应用在调用微应用的声明周期钩子的时候会把这里的props 合并一起传递
    }
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
