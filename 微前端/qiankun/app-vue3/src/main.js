// 在顶部动态设置 public-path, 后面所有需要用到的就可以正常使用了
import './public-path'; 
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './router';
// import store from './store';

// Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
    // 主应用在加载子应用的时候会把container传递下来
  const { container } = props;
  router = createRouter({
    // 在qiankun中的base 是 /app-vue3/
    // 独立运行的时候的base是 /
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    history: createWebHistory(),
    routes: []
  });
 
  instance = createApp(App).use(router).mount(
    // 如果是运行在qiankun中则渲染到container中
    // 如果是独立运行，则渲染到 #app
    container ? container.querySelector('#app') : '#app'
  )
//   instance = new Vue({
//     router,
//     store,
//     render: (h) => h(App),
//   }).$mount(container ? container.querySelector('#app') : '#app');
}

// 当子应用独立运行的时侯要手动render
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('子应用是独立运行的')
  render();
}


// 当子应用运行在主应用中的时候，必须暴露三个必要的声明周期钩子函数
// 启动微应用的时候调用
// qiankun会自动的调用这些钩子函数
// 注意：钩子函数必须返回Promise
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

// 挂载子应用
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

// 子应用卸载的时候
export async function unmount() {
  // 销毁Vue 应用实例  
  instance.$destroy();

  // 清空渲染期间生成的html
  instance.$el.innerHTML = '';

  // 销毁实例对象，防止内存泄漏
  instance = null;
  // 销毁实例对象，防止内存泄漏
  router = null;
}

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')
