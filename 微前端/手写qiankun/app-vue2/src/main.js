import './public-path'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let instance = null
function render(props) {
  const { container } = props
  instance = new Vue({
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  mount({})
}

// 子应用接入 qiankun
// 1. 导出三个必要的生命周期钩子函数
//   bootstrap 渲染之前
//   mount 渲染函数
//   unmount 卸载函数
// 注意：生命周期函数必须返回 Promise

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  console.log('[vue] vue app mount')
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
