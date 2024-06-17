<template>
	<div>
		<div class="d-flex justify-content-end">
			<span href="#" class="btn bt-red ps-7 mx-3" data-bs-toggle="modal" data-bs-target="#Delete-Alert-Modal">
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

	<div class="my-5">
		<OrderItems />
	</div>



	<DeleteAlert name="order" />

</template>

<script lang="ts">
import DeleteAlert from '@/components/deleteAlert/DeleteAlert.vue'
import OrderDetailCom from '@/components/orderDetail/OrderDetailCom.vue'
import OrderItems from '@/components/orderItems/OrderItems.vue'
import PaymentAndShipping from '@/components/paymentAndShipping/PaymentAndShipping.vue'
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'OrderDetail',
	components: { OrderDetailCom, PaymentAndShipping, DeleteAlert, OrderItems },
	setup() {
		return {

		}
	}
})
</script>

<style scoped></style>