<template>
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Orders Details
				</h3>
			</div>
		</div>
		<div class="separator dotted   mb-7" />

		<div class="card-body p-9">
			<div class="d-flex flex-row">
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Order ID:</label>
					<div class="col-lg-8 text-center">
						<span class="fw-bold fs-6 text-gray-900">#12345</span>
					</div>
				</div>
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Customer Name:</label>
					<div class="col-lg-8 fv-row text-center">
						<span class="fw-bold fs-6">John Smith</span>
					</div>
				</div>
			</div>

			<div class="d-flex flex-row">
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Order Date:</label>
					<div class="col-lg-8 text-center">
						<span class="fw-bold fs-6 text-gray-900">05/09/2024</span>
					</div>
				</div>
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Phone Number:</label>
					<div class="col-lg-8 fv-row text-center">
						<span class="fw-bold fs-6">(555) 123-4567</span>
					</div>
				</div>
			</div>

			<div class="d-flex flex-row">
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Shipping Address:</label>
					<div class="col-lg-8 text-justify ">
						<div class="d-flex justify-content-end">
							<span class="fw-bold fs-6 text-gray-900">
								Apartment 4B, 456 Elm Street,<br>
								Springfield Heights,<br>
								Springfield, IL 62704, USA</span>
						</div>
					</div>
				</div>

			</div>

		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'OrderDetail',
	components: {},
	setup() {
		return {}
	}
})
</script>
