<template>
	<div id="Order-Detail-modal" ref="changeEmailModal" class="modal fade" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered mw-450px">
			<div class="modal-content">
				<div id="kt_modal_add_customer_header" class="modal-header justify-content-between">
					<h2 class="fw-bold">
						Order Details
					</h2>
					<div id="kt_modal_add_customer_close" data-bs-dismiss="modal"
						class="btn btn-icon btn-sm btn-active-icon-primary">
						<KTIcon icon-name="cross-circle" icon-class="fs-1" />
					</div>
				</div>


				<div class="card-body p-9">
					<div class="row mb-7">
						<label class="col-lg-4 fw-semibold text-muted">Order ID:</label>
						<div class="col-lg-8">
							<span class="fw-bold fs-6 text-gray-900">#12345</span>
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-semibold text-muted">Customer Name:</label>
						<div class="col-lg-8 fv-row">
							<span class="fw-bold fs-6">John Smith</span>
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-semibold text-muted">
							Order Date:
						</label>
						<div class="col-lg-8 d-flex align-items-center">
							<span class="fw-bold fs-6 me-2">05/09/2024</span>
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-semibold text-muted">Total Amount:</label>
						<div class="col-lg-8">
							<a href="#" class="fw-bold fs-6 text-dark text-hover-primary">$123.00</a>
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-semibold text-muted">
							Items Ordered:
						</label>
						<div class="symbol symbol-50px me-5  my-5">
							<img class="me-3" :src="getAssetPath(' ./../../../../public/media/order/O-01.svg')" alt="">
							<img class="me-3" :src="getAssetPath(' ./../../../../public/media/order/O-02.svg')" alt="">
							<img class="me-3" :src="getAssetPath(' ./../../../../public/media/order/O-03.svg')" alt="">
						</div>
					</div>
				</div>


				<div class="modal-footer flex-center ">

					<router-link to="/order-detail">
						<span class="btn btn-lg bt-blue-dark px-10 indicator-label">
							View More
						</span>
					</router-link>

				</div>

			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'OrderDetailModal',
	components: {},
	setup() {
		return {
			getAssetPath
		}
	}
})
</script>
