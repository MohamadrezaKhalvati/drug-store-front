<template>
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Payment and Shipping Information
				</h3>
			</div>
		</div>
		<div class="separator dotted   mb-7" />

		<div class="card-body p-9">
			<div class="d-flex flex-row">
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Total Payment:</label>
					<div class="col-lg-8 text-center">
						<span class="fw-bold fs-6 text-gray-900">$123.00</span>
					</div>
				</div>
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Shipping ID:</label>
					<div class="col-lg-8 fv-row text-center">
						<span class="fw-bold fs-6">#SHP-0025410</span>
					</div>
				</div>
			</div>

			<div class="d-flex flex-row">
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Your Profit :</label>
					<div class="col-lg-8 text-center">
						<span class="fw-bold fs-6 text-gray-900">$12.00</span>
					</div>
				</div>
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Shipping Method:</label>
					<div class="col-lg-8 fv-row text-center">
						<span class="fw-bold fs-6">Flat Shipping Rate</span>
					</div>
				</div>
			</div>

			<div class="d-flex flex-row">
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Shipping Rate:</label>
					<div class="col-lg-8 text-center">
						<span class="fw-bold fs-6 text-gray-900">$5.00</span>
					</div>
				</div>
			</div>

			<div class="d-flex flex-row">
				<div class="row mb-7 col-lg-6">
					<label class="col-lg-4 fw-semibold text-muted">Payment Methode :</label>
					<div class="col-lg-8 text-center">
						<span class="fw-bold fs-6 text-gray-900">Online</span>
					</div>
				</div>

			</div>

		</div>
	</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'PaymentAndShippingInformation',
	setup() { }
})
</script>
