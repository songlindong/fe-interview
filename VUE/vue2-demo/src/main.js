import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// el 直接要绑定的元素
// binding, 一个对象，包含：
   // name
   // value
   // oldValue
   // arg
   // modifiers

Vue.directive('demo', {
  // 只调用一次，指令第一次绑定元素时调用，主要进行初始化
  bind(){},
  // 被绑定元素插入父节点的时候调用
  inserted(){},
  // 所在组件的Vnode 更新时调用
  update(){},
  // 所在组件的Vnode 更新后调用
  componentUpdated(){},
  // 只调用一次
  unbind(){}
})

new Vue({
  render: h => h(App),
}).$mount('#app')
