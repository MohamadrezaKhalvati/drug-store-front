<template>
	<div id="Order-Filter-Modal" ref="changeRoleModal" class="modal modal-sm fade" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered mw-400px">
			<div class="modal-content">
				<div id="kt_modal_add_customer_header" class="modal-header justify-content-between">
					<h2 class="fw-bold">
						Filters
					</h2>
					<div id="kt_modal_add_customer_close" data-bs-dismiss="modal"
						class="btn btn-icon btn-sm btn-active-icon-primary">
						<KTIcon icon-name="cross-circle" icon-class="fs-1" />
					</div>
				</div>

				<el-form ref="formRef" :model="formData" :rules="rules" @submit.prevent="submit()">

					<div class=" ml-5 row mb-7 mx-5 my-10">
						<div class="d-flex flex-column">
							<label class="col-lg-4 fw-bold fs-5 mb-5">Status
							</label>
							<div v-for="(role, index) in statusType" :key="index">
								<div class="form-check form-check-sm form-check-solid me-5 my-2">
									<input v-model="formData.role" class="form-check-input" type="radio"
										:value="role.value">
									<div class="d-flex flex-column">
										<span class="form-check-label fw-bold text-dark fs-6">
											{{ role.label }}
										</span>
									</div>
								</div>
							</div>

							<div class="fv-row mb-7 mt-10">
								<label class="fs-6 fw-semibold mb-2 ">Date Added</label>
								<div class="d-flex align-items-center position-relative my-1">
									<input v-model="formData.date" type="date"
										class=" form-control form-control-solid w-100 bg-input"
										:placeholder="formData.date">
								</div>
							</div>


							<div>

								<div class="d-flex flex-row justify-content-between ">
									<div class="d-flex flex-column ">
										<label class="fs-6 fw-semibold mb-2 ">Min</label>
										<input v-model="range[0]" type="text"
											class=" form-control form-control-solid w-50 bg-input "
											:placeholder="formData.priceRange.min.toString()">
									</div>

									<div class="d-flex flex-column  align-items-end">
										<label class="fs-6 fw-semibold mb-2 w-50 ">Max</label>
										<input v-model="range[1]" type="text"
											class=" form-control form-control-solid  w-50 bg-input "
											:placeholder="formData.priceRange.max.toString()">
									</div>
								</div>
								<div class="mt-5">
									<vue-slider v-model="range" :min="formData.priceRange.min"
										:max="formData.priceRange.max" :contained="true">
									</vue-slider>
								</div>

							</div>

						</div>
					</div>

					<div class="modal-footer flex-center ">
						<button id="kt_modal_add_customer_cancel" type="reset" class="btn btn-lg btn-light px-10">
							Reset
						</button>
						<button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg bt-blue-dark px-10"
							type="submit">
							<span v-if="!loading" class="indicator-label">
								Set Filters
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
import { hideModal } from '@/core/helpers/modal';
import Swal from 'sweetalert2';
import { defineComponent, ref } from 'vue';
import VueSlider from 'vue-slider-component';
export default defineComponent({
	name: 'OrderFilterModal',
	component: { VueSlider },
	setup() {
		const formRef = ref<null | HTMLFormElement>(null)
		const orderFilterModal = ref(null)
		const loading = ref(false)
		const formData = ref({
			status: '',
			date: '',
			priceRange: {
				min: 10,
				max: 1000
			}
		})

		const range = ref([formData.value.priceRange.min, formData.value.priceRange.max])

		const statusType = [{
			label: 'Delivered',
			value: 'Delivered',
		},
		{
			label: 'Canceled',
			value: 'Canceled',

		},
		{
			label: 'In Prosses',
			value: 'In Prosses',

		},
		]



		const rules = ref({
			email: [
				{
					required: true,
					message: 'email is invalid',
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
							hideModal(orderFilterModal.value)
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
			orderFilterModal,
			statusType,
			range
		}
	}
})
</script>
