<template>
	<div class="mine">
		{{ count }}
	</div>
</template>

<script>
import {
	defineComponent,
	reactive,
	ref,
	shallowReactive,
	toRef,
	isRef,
	toRefs,
	readonly,
	isReadonly,
	shallowReadonly,
} from 'vue';
export default defineComponent({
	setup() {
		const count = ref(10);
		const user = 'xianzao';
		const obj = reactive({
			t: 100,
			count,
			userInfo: {
				age: 666,
			},
		});

		// 设置obj为readonly
		const objOnly = readonly(obj);

		console.log('read only obj is: ', objOnly);
		// obj.t = 200;
		objOnly.t = 200;
		console.log('changed obj is: ', obj);
		console.log('changed read only obj is: ', objOnly);
		console.log('changed obj is read only?: ', isReadonly(obj));
		console.log('changed read only obj is read only?: ', isReadonly(objOnly), objOnly.t);

		// 设置obj为shallowReadOnly
		const objShallowOnly = shallowReadonly(obj);
		console.log('shallow read only obj is: ', objShallowOnly);
		objShallowOnly.t = 200;
		objShallowOnly.userInfo.age = 777;
		console.log('changed shallow read only obj is:', objShallowOnly);

		// 判断是否为ref创建出来的
		console.log('user is ref? ', isRef(user));
		console.log('count is ref? ', isRef(count));

		// 将reactive() 创建出来的响应式对象，转换为普通的对象
		console.log('refs obj is ', obj);
		console.log('to refs obj is: ', toRefs(obj));
		console.log('to refs obj.t is: ', toRefs(obj).t);

		console.log('ref count is: ', count.value);

		// 通过reactive 来获取ref 的值时,不需要使用.value属性， ref 将被自动解包
		console.log('ref obj.count is: ', obj.count); // 10
		console.log('ref obj.count is reactive? ', obj.count === count.value); // true

		// count 改变时，更新 `obj.count
		count.value = 12;
		console.log('ref count.value is updated to: ', count.value); // 12
		console.log('ref obj.count is: ', obj.count); // 12

		// 反之，修改obj 的count 值 ，ref 也会更新
		obj.count = 20;
		console.log('ref obj.count is: ', obj.count); // 20
		console.log('ref count.value is updated to: ', count.value); // 20

		const person = {
			name: 'xianzao',
			age: 1,
			contacts: {
				phone: 123456789,
			},
		};

		const personReactive = reactive(person);

		// 查看 reactive 实例结构
		console.log('reactive', personReactive);

		// 获取嵌套对象属性
		const contacts = personReactive.contacts;
		// 因为深层响应，所以依然有响应性
		console.log('contacts属性：', contacts);

		// 获取简单类型的属性
		let name = personReactive.name;

		// name属性是简单类型的，所以失去响应性，如果需要响应式，需要使用toRef(name)
		console.log('name属性：', name);

		const personShallowReactive = shallowReactive(person);
		// 查看 reactive 实例结构
		console.log('shallow reactive', personShallowReactive);

		// 获取嵌套对象属性
		const shallowContacts = personShallowReactive.contacts;
		// 因为深层响应，所以依然有响应性
		console.log('shallow contacts属性：', shallowContacts);

		// 获取简单类型的属性
		let shallowName = personShallowReactive.name;

		// name属性是简单类型的，所以失去响应性，如果需要响应式，需要使用toRef(name)
		console.log('shallow name属性：', shallowName);

		return {
			count,
			...toRefs(obj),
		};
	},
});
</script>
