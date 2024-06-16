<template>
	<div>
		<OrderList widgetClasses="mb-5 mb-xl-8" />
	</div>
</template>

<script>
import OrderList from '@/components/orderList/OrderList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Order',
	components: { OrderList },
	setup() {
		return {}
	}
})
</script>

<style lang="scss" scoped></style>