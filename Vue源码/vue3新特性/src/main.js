import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import MyApp from './MyApp.vue';

// 1. Composition
import Composition from './Composition.vue';

// 2. 生命周期
import LifeCycle from './LifeCycle.vue';
// 6. teleport实现的dialog
import Dialog from './Dialog.vue';

// 7. 自定义Hooks
import MouseMove from './MouseMove.vue';

// 8. 完整组件格式展示
import Total from './Total.vue';

import './index.css';

// 0. createApp(MyApp).mount('#root');
// 0. 可以使用实例方式定义
const myApp = createApp(MyApp);
myApp.mount('#root');

// 1. composition
const composition = createApp(Composition);
composition.mount('#composition');

// 2. 生命周期
const lifeCycle = createApp(LifeCycle);
lifeCycle.mount('#lifeCycle');

// 4. 可以利用返回值的实例去自定义注册异步组件，在哪个应用里生效，在哪个应用里注册
const AsyncComp = defineAsyncComponent(() => import('./components/AsyncComp.vue'));

const app = createApp(App);
// 4. 可以利用返回值的实例去自定义注册异步组件，在哪个应用里生效，在哪个应用里注册，在MyApp里直接使用不生效
// 4. 打包后不会集成在index.js中，会单独进行打包，方便后续操作，如缓存组件，异步loading加载等；
app.component('async-comp', AsyncComp);

// 5. 自定义指令
app.directive('copy', {
	beforeMount(el, binding) {
		const success = binding.arg;
		el.targetContent = binding.value;

		el.addEventListener('click', () => {
			if (!el.targetContent) return console.warn('没有需要复制的目标内容');
			// 创建textarea标签
			const textarea = document.createElement('textarea');
			// 设置相关属性
			textarea.readOnly = 'readonly';
			textarea.style.position = 'fixed';
			textarea.style.top = '-99999px';
			// 把目标内容赋值给它的value属性
			textarea.value = el.targetContent;
			// 插入到页面
			document.body.appendChild(textarea);
			// 调用onselect()方法
			textarea.select();
			// 把目标内容复制进剪贴板, 该API会返回一个Boolean
			const res = document.execCommand('Copy');
			res && success && console.log('复制成功，剪贴板内容：' + el.targetContent);
			// 移除textarea标签
			document.body.removeChild(textarea);
		});
	},
	updated(el, binding) {
		// 实时更新最新的目标内容
		el.targetContent = binding.value;
	},
	unmounted(el) {
		el.removeEventListener('click', () => {});
	},
});

app.mount('#app');

// 6. teleport
const dialog = createApp(Dialog);
dialog.mount('#portal');

// 7. 自定义Hooks
const mouseMove = createApp(MouseMove);
mouseMove.mount('#mouseMove');

// 8. 完整组件格式展示
const total = createApp(Total);
total.mount('#total');
