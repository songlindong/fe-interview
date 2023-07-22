<template>
	<div id="life-cycle">
		<div>{{ count }}</div>
		<button @click="addCount">加1</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		addCount() {
			this.count += 1;
		},
	},

	// 1. 页面初始化
	// 此时data还不可用
	beforeCreate() {
		console.log('beforeCreate');
	},

	// data可用，DOM不可用
	created() {
		console.log('created');
	},

	// 在这个钩子后，mounted生命周期钩子之前，render函数（渲染页面函数）首次被调用
	beforeMount() {
		console.log('beforeMount');
	},

	// 页面有取值操作时（如：绑定数据，e.g. 插值语法{{ count }}）触发
	renderTracked({ type, key, target, effect }) {
		console.log('renderTracked ----', { type, key, target, effect });
	},

	// 页面挂载完毕后触发
	mounted() {
		console.log('mounted');
	},

	// 2. 数据发生改变后触发
	renderTriggered(e) {
		console.log('renderTriggered ----', e);
	},

	/*---------
  在数据发生改变后，DOM被更新之前调用。
  ----------*/
	beforeUpdate() {
		console.log('beforeUpdate');
	},

	/*---------
  DOM更新完毕之后调用。
  注意事项：updated不会保证所有子组件也都被重新渲染完毕
  ---------*/
	updated() {
		console.log('updated');
	},
};
</script>
