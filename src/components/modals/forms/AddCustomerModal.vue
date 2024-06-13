<template>
	<div id="kt_modal_add_customer" ref="addCustomerModalRef" class="modal fade" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered mw-650px">
			<div class="modal-content">
				<div id="kt_modal_add_customer_header" class="modal-header justify-content-between">
					<h2 class="fw-bold">
						Add a Customer
					</h2>
					<div id="kt_modal_add_customer_close" data-bs-dismiss="modal"
						class="btn btn-icon btn-sm btn-active-icon-primary">
						<KTIcon icon-name="cross-circle" icon-class="fs-1" />
					</div>
				</div>

				<el-form ref="formRef" :model="formData" :rules="rules" @submit.prevent="submit()">

					<div class="modal-body py-10 px-lg-17">

						<div id="kt_modal_add_customer_scroll" class="scroll-y me-n7 pe-7" data-kt-scroll="true"
							data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
							data-kt-scroll-dependencies="#kt_modal_add_customer_header"
							data-kt-scroll-wrappers="#kt_modal_add_customer_scroll" data-kt-scroll-offset="300px">

							<!--  name input -->
							<div class="fv-row mb-7">
								<label class="fs-6 fw-semibold mb-2">Name</label>
								<div class="d-flex align-items-center position-relative my-1">
									<input v-model="formData.name" type="text"
										class="form-control form-control-solid w-100" :placeholder="formData.name">
								</div>
							</div>

							<!-- email input -->
							<div class="fv-row mb-7">

								<label class="fs-6 fw-semibold mb-2">
									<span>Email</span>
								</label>

								<div class="d-flex align-items-center position-relative my-1">
									<input v-model="formData.email" type="text"
										class="form-control form-control-solid w-100" :placeholder="formData.email">
								</div>
							</div>

							<div class="fw-bold fs-3 rotate collapsible my-10" data-bs-toggle="collapse" role="button"
								aria-expanded="false" aria-controls="kt_customer_view_details">
								Shipping Address
							</div>

							<!-- address -->
							<div class="collapse show">
								<div class="d-flex flex-column mb-7 fv-row">
									<label class="fs-6 fw-semibold mb-2">Address</label>
									<div class="d-flex align-items-center position-relative my-1 ">
										<textarea v-model="formData.addressLine" type="text"
											class="form-control form-control-solid w-10 min-h-150px"
											:placeholder="formData.addressLine" />
									</div>
								</div>

								<!--  state and city -->
								<div class="row g-9 mb-7">
									<div class="col-md-6 fv-row">
										<label class="fs-6 fw-semibold mb-2">State</label>
										<div class="d-flex align-items-center position-relative my-1">
											<input v-model="formData.state" type="text"
												class="form-control form-control-solid w-100"
												:placeholder="formData.state">
										</div>
									</div>

									<div class="col-md-6 fv-row">
										<label class="required fs-6 fw-semibold mb-2">City</label>
										<div class="d-flex align-items-center position-relative my-1">
											<input v-model="formData.city" type="text"
												class="form-control form-control-solid w-100"
												:placeholder="formData.name">
										</div>
									</div>
								</div>


								<!-- Neighbourhood -->
								<div class="d-flex flex-column mb-7 fv-row">
									<label class="fs-6 fw-semibold mb-2">Neighbourhood</label>
									<div class="d-flex align-items-center position-relative my-1">
										<input v-model="formData.neighbourhood" type="text"
											class="form-control form-control-solid w-100"
											:placeholder="formData.neighbourhood">
									</div>
								</div>


								<div class="row g-9 mb-7">
									<div class="col-md-3 fv-row">
										<label class="fs-6 fw-semibold mb-2">Home Number</label>
										<div class="d-flex align-items-center position-relative my-1">
											<input v-model="formData.state" type="text"
												class="form-control form-control-solid w-100"
												:placeholder="formData.state">
										</div>
									</div>

									<div class="col-md-3 fv-row">
										<label class="fs-6 fw-semibold mb-2">Home Unit</label>
										<div class="d-flex align-items-center position-relative my-1">
											<input v-model="formData.city" type="text"
												class="form-control form-control-solid w-100"
												:placeholder="formData.name">
										</div>
									</div>

									<div class="col-md-6 fv-row">
										<label class="fs-6 fw-semibold mb-2">Postal Code</label>
										<div class="d-flex align-items-center position-relative my-1">
											<input v-model="formData.city" type="text"
												class="form-control form-control-solid w-100"
												:placeholder="formData.name">
										</div>
									</div>
								</div>


							</div>
						</div>
					</div>

					<div class="modal-footer flex-center">
						<button id="kt_modal_add_customer_cancel" type="reset" class="btn btn-light me-3">
							Discard
						</button>

						<button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg bt-blue-dark"
							type="submit">
							<span v-if="!loading" class="indicator-label">
								Add Customer
							</span>
							<span v-if="loading" class="indicator-progress">
								Please wait...
								<span class="spinner-border spinner-border-sm align-middle ms-2" />
							</span>
						</button>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { countries } from '@/core/data/countries'
import { getAssetPath } from '@/core/helpers/assets'
import { hideModal } from '@/core/helpers/modal'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'AddCustomerModal',
	components: {},
	setup() {
		const formRef = ref<null | HTMLFormElement>(null)
		const addCustomerModalRef = ref<null | HTMLElement>(null)
		const loading = ref<boolean>(false)
		const formData = ref({
			name: 'Sean Bean',
			email: 'sean@dellito.com',
			addressLine: '101, Collins Street',
			state: 'Victoria',
			neighbourhood: 'Somewhere',
			city: 'shiraz',
			postCode: '3000',
		})

		const rules = ref({
			name: [
				{
					required: true,
					message: 'Customer name is required',
					trigger: 'change',
				},
			],
			email: [
				{
					required: true,
					message: 'Customer email is required',
					trigger: 'change',
				},
			],
			addressLine: [
				{
					required: true,
					message: 'Address 1 is required',
					trigger: 'change',
				},
			],
			town: [
				{
					required: true,
					message: 'Town is required',
					trigger: 'change',
				},
			],
			state: [
				{
					required: true,
					message: 'State is required',
					trigger: 'change',
				},
			],
			postCode: [
				{
					required: true,
					message: 'Post code is required',
					trigger: 'change',
				},
			],
		})

		function submit() {
			if (!formRef.value) {
				return
			}

			formRef.value.validate((valid: boolean) => {
				if (valid) {
					loading.value = true

					setTimeout(() => {
						loading.value = false

						Swal.fire({
							text: 'Form has been successfully submitted!',
							icon: 'success',
							buttonsStyling: false,
							confirmButtonText: 'Ok, got it!',
							heightAuto: false,
							customClass: {
								confirmButton: 'btn btn-primary',
							},
						}).then(() => {
							hideModal(addCustomerModalRef.value)
						})
					}, 2000)
				} else {
					Swal.fire({
						text: 'Sorry, looks like there are some errors detected, please try again.',
						icon: 'error',
						buttonsStyling: false,
						confirmButtonText: 'Ok, got it!',
						heightAuto: false,
						customClass: {
							confirmButton: 'btn btn-primary',
						},
					})
					return false
				}
			})
		};

		return {
			formData,
			rules,
			submit,
			formRef,
			loading,
			addCustomerModalRef,
			getAssetPath,
			countries,
		}
	},
})
</script>
