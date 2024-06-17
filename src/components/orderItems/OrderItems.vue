<template>
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Ordered Items
				</h3>
			</div>
			<div class="mt-4">
				<button href="#" class="btn  bt-blue-dark ps-7" data-kt-menu-trigger="click"
					data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
					View Invoice
				</button>
			</div>
		</div>
		<div class="separator dotted   mb-7" />

		<div class="cards m-9 card-color">
			<div class="card-header align-items-center ">
				<h4 class="fw-bold m-0 text-success ">
					<KTIcon icon-name="check-circle" icon-class="fs-2 text-success" />
					Delivered
				</h4>
				<div class="fw-bold fs-6">
					<span class="text-muted">
						Delivery time :
					</span>
					<span>
						11 Sep 2020, 3:18 pm
					</span>
				</div>
			</div>
			<div class="separator separator-dashed bg-seperator   mb-7 mx-5" />


			<div class="card-body py-3">
				<div class="table-responsive">
					<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
						<thead>
							<tr class="fw-bold text-muted">
								<th class="min-w-125px">
									Product
								</th>
								<th class="min-w-120px">
									SKU
								</th>
								<th class="min-w-120px">
									QTY
								</th>
								<th class="min-w-100px ">
									Unit Price
								</th>
								<th class="min-w-140px">
									Total Price
								</th>

							</tr>
						</thead>

						<tbody>
							<template v-for="(order, index) in list" :key="index">
								<tr>
									<td>
										<div class="d-flex align-items-center">
											<div class="symbol  symbol-125px me-5">
												<img :src="order.product.image" alt="">
											</div>
											<div class="d-flex justify-content-start flex-column">
												<span href="#" class="text-gray-900 fw-bold text-hover-primary fs-6">{{
													order.product.name }}</span>
												<span class="text-muted fw-semibold text-muted d-block fs-7 mt-1">{{
													order.product.information
												}}</span>
											</div>
										</div>
									</td>
									<td>
										<span class="text-muted fw-bold text-hover-primary d-block fs-6">
											{{ order.sku }}
										</span>
									</td>
									<td class="text-end">
										<div class="d-flex flex-column w-100 me-2">
											<div class="d-flex flex-stack mb-2">
												<span class=" me-2 fs-7  fw-bold text-muted">
													{{ order.quantity }}
												</span>
											</div>
										</div>
									</td>
									<td>
										<span
											class="text-muted fw-bold text-hover-primary d-block fs-6 bg-light w-fit">${{
												order.unitPrice }}</span>
									</td>
									<td>
										<a class="text-muted fw-bold text-hover-primary d-block fs-6">${{
											order.totalPrice }}</a>
									</td>
								</tr>
							</template>
						</tbody>
					</table>
				</div>
			</div>

			<div class="card-footer text-end">
				<span class="fs-3 fw-bold ">
					Total Cash: $84.00
				</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
// import { getAssetPath } from '@/core/helpers/assets';
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'OrderItems',
	components: {},
	setup() {
		const list = ref([
			{
				product: {
					image: getAssetPath('./../../../public/media/order/product-ordered-1.svg'),
					name: 'CardioHealth Plus 20 mg',
					information: 'Put Product information Here',
				},
				sku: 'XYZ-12345',
				quantity: '1',
				unitPrice: '15.00',
				totalPrice: '15.00'
			},
			{
				product: {
					image: getAssetPath('./../../../public/media/order/product-ordred-2.svg'),
					name: 'CardioHealth Plus 20 mg',
					information: 'Put Product information Here',
				},
				sku: 'XYZ-12345',
				quantity: '3',
				unitPrice: '20.00',
				totalPrice: '60.00'
			},
			{
				product: {
					image: getAssetPath('./../../../public/media/order/product-ordered-3.svg'),
					name: 'CardioHealth Plus 20 mg',
					information: 'Put Product information Here',
				},
				sku: 'XYZ-12345',
				quantity: '1',
				unitPrice: '9.00',
				totalPrice: '9.00'
			}
		])
		return {
			list
		}
	}

})
</script>


<style scoped>
.card-color {
	background-color: #F5F5F5;
}
</style>