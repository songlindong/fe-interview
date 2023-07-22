<template>
	<h1>My app!</h1>
	<async-comp />
	<!-- 5. 自定义指令 -->
	<button v-copy:[success]="msg">点击复制</button>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
	setup() {
		let msg = ref('先早先早123');
		return {
			msg,
			success: value => {
				console.log(value);
			},
		};
	},
});
</script>
