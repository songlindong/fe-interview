<template>
	<div>
		<p>X: {{ x }}</p>
		<p>Y: {{ y }}</p>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
// 引入hooks
import useMousePosition from './hooks/useMousePosition';

export default defineComponent({
	setup() {
		// 使用hooks功能
		const { x, y } = useMousePosition();

		return {
			x,
			y,
		};
	},
});
</script>
