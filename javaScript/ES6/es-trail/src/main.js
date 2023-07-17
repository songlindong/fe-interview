import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import store from './store/index'

// 样式适应处理
import Rem from './utils/rem';
import '../src/assets/css/public/reset.css';

Vue.use(iView);
Vue.use(ElementUI);


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
Rem.setFontSize();
