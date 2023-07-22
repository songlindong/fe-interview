<template>
	<div class="mine" ref="elmRefs">
		<span>{{ name }}</span>
		<br />
		<span>{{ count }}</span>
		<div>
			<button @click="handleClick">测试按钮</button>
		</div>

		<ul>
			<li v-for="item in list" :key="item.id">{{ item.name }}</li>
		</ul>
	</div>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	getCurrentInstance,
	onMounted,
	PropType,
	reactive,
	ref,
	toRefs,
} from 'vue';

interface IState {
	count: number;
	name: string;
	list: Array<object>;
}

export default defineComponent({
	name: 'demo',
	// 父组件传子组件参数
	props: {
		name: {
			type: String as PropType<null | ''>,
			default: 'vue3.x',
		},
		list: {
			type: Array as PropType<object[]>,
			default: () => [],
		},
	},
	components: {
		/// TODO 组件注册
	},
	emits: ['emits-name'], // 为了提示作用
	setup(props, context) {
		console.log(props.name);
		console.log(props.list);

		const state = reactive<IState>({
			name: 'vue 3.0 组件',
			count: 0,
			list: [
				{
					name: 'vue',
					id: 1,
				},
				{
					name: 'vuex',
					id: 2,
				},
			],
		});

		const a = computed(() => state.name);

		onMounted(() => {});

		function handleClick() {
			state.count++;
			// 调用父组件的方法
			context.emit('emits-name', state.count);
		}

		return {
			...toRefs(state),
			handleClick,
		};
	},
});
</script>
