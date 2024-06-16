<template>
	<div>
		<div class="d-flex justify-content-end">
			<span href="#" class="btn bt-red ps-7 mx-3" data-kt-menu-trigger="click" data-kt-menu-attach="parent"
				data-kt-menu-placement="bottom-end">
				Delete Order
			</span>
			<button href="#" class="btn  bt-blue-dark ps-7" data-kt-menu-trigger="click" data-kt-menu-attach="parent"
				data-kt-menu-placement="bottom-end">
				Edit Order
			</button>
		</div>
	</div>


	<div class="my-5">
		<OrderDetailCom />
	</div>

	<div classs="my-5">
		<PaymentAndShipping />
	</div>
</template>

<script lang="ts">
import OrderDetailCom from '@/components/orderDetail/OrderDetailCom.vue';
import PaymentAndShipping from '@/components/paymentAndShipping/PaymentAndShipping.vue';
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'OrderDetail',
	components: { OrderDetailCom, PaymentAndShipping },
	setup() {
		return {

		}
	}
})
</script>

<style scoped></style>