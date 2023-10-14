import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.css'
import { registerMicroApps, start } from 'qiankun'
// import { registerMicroApps, start } from './micro-fe'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 注册子应用
// 微前端的运行原理和 SPA 非常的相似
registerMicroApps([
  // 当匹配到 activeRule 的时候，请求获取 entry 资源，渲染到 container 中
  {
    name: 'app-react',
    entry: '//localhost:9001', // 子应用的 HTML 入口
    container: '#subapp-container', // 渲染到哪里
    activeRule: '/subapp/app-react' // 路由匹配规则
  },
  {
    name: 'app-vue2',
    entry: '//localhost:9002',
    container: '#subapp-container',
    activeRule: '/subapp/app-vue2'
  },
  {
    name: 'app-vue3',
    entry: '//localhost:9003',
    container: '#subapp-container',
    activeRule: '/subapp/app-vue3'
  }
])

start({
  sandbox: {
    // strictStyleIsolation: true // 使用 shadow dom 解决样式冲突
    experimentalStyleIsolation: true // 通过添加选择器范围来解决样式冲突
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
