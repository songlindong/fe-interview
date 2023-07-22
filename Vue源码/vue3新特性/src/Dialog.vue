<template>
	<div class="portals">
		<button @click="showNotification">Trigger Notification!</button>
		<teleport to="#portal">
			<div v-if="isOpen" class="notification">
				This is rendering outside of this child component!
			</div>
		</teleport>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const isOpen = ref(false);

		var closePopup;

		const showNotification = () => {
			isOpen.value = true;

			clearTimeout(closePopup);

			closePopup = setTimeout(() => {
				isOpen.value = false;
			}, 2000);
		};

		return {
			isOpen,
			showNotification,
		};
	},
};
</script>

<style scoped>
.notification {
	font-family: myriad-pro, sans-serif;
	position: fixed;
	bottom: 20px;
	left: 20px;
	width: 300px;
	padding: 30px;
	background-color: #fff;
}
</style>
