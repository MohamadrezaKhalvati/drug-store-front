<template>
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Personal Information
				</h3>
			</div>

			<router-link to="/staff/edit" class="btn bt-blue-dark align-self-center fs-6">
				Edit Profile
			</router-link>
		</div>


		<div class="card-body p-9">
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">Full Name</label>
				<div class="col-lg-8">
					<span class="fw-bold fs-6 text-gray-900">Max Smith</span>
				</div>
			</div>
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">Email</label>
				<div class="col-lg-8 fv-row">
					<span class="fw-bold fs-6">Keenthemes</span>
				</div>
			</div>
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">
					Phone Number
				</label>
				<div class="col-lg-8 d-flex align-items-center">
					<span class="fw-bold fs-6 me-2">(555) 123-4567</span>
				</div>
			</div>
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">Address</label>
				<div class="col-lg-8">
					<a href="#" class="fw-bold fs-6 text-dark text-hover-primary">123 Main St, Springfield, IL</a>
				</div>
			</div>
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">
					Date of Birth
				</label>
				<div class="col-lg-8">
					<span class="fw-bold fs-6 text-gray-900">January 1, 1980</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'PersonalInformation',
	props: {
		cardClasses: {
			type: String,
			required: false,
			default: ''
		},
	},
	setup() {

	},

})

</script>
