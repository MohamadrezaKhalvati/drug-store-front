<template>
	<div id="change-phone-number-modal" ref="changePhoneNumberModal" class="modal fade" tabindex="-1"
		aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered mw-650px">
			<div class="modal-content">
				<div id="kt_modal_add_customer_header" class="modal-header justify-content-between">
					<h2 class="fw-bold">
						Change Phone Number
					</h2>
					<div id="kt_modal_add_customer_close" data-bs-dismiss="modal"
						class="btn btn-icon btn-sm btn-active-icon-primary">
						<KTIcon icon-name="cross-circle" icon-class="fs-1" />
					</div>
				</div>

				<el-form ref="formRef" :model="formData" :rules="rules" @submit.prevent="submit()">


					<div class="notice d-flex bg-light-primary rounded border-primary  mb-9 p-6 mx-10 mt-10 ">
						<KTIcon icon-name="information" icon-class="fs-2tx text-primary me-4" />
						<div class="d-flex flex-stack flex-grow-1">
							<div class="fw-semibold">
								<div class="fs-6 text-gray-700">
									Please note that a valid phone number may be required for
									order or shipping rescheduling.
								</div>
							</div>
						</div>
					</div>

					<div class="modal-body py-10 px-lg-17">

						<div class="scroll-y me-n7 pe-7" data-kt-scroll="true"
							data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
							data-kt-scroll-offset="300px">

							<!--  phoneNumber  input -->
							<div class="fv-row mb-7">
								<label class="fs-6 fw-semibold mb-2 required">Phone Number</label>
								<div class="d-flex align-items-center position-relative my-1">
									<input v-model="formData.phoneNumber" type="text"
										class=" form-control form-control-solid w-100"
										:placeholder="formData.phoneNumber">
								</div>
							</div>
						</div>
					</div>

					<div class="modal-footer flex-end">
						<button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg px-10 bt-blue-dark"
							type="submit">
							<span v-if="!loading" class="indicator-label">
								Change
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
	name: 'ChangePhoneNumberModal',
	components: {},
	setup() {
		const formRef = ref<null | HTMLFormElement>(null)
		const changePhoneNumberRef = ref<null | HTMLElement>(null)
		const loading = ref<boolean>(false)
		const formData = ref({
			phoneNumber: '+6141 234 567'
		})

		const rules = ref({
			phoneNumber: [
				{
					required: true,
					message: 'Phone Number is required',
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
							hideModal(changePhoneNumberRef.value)
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
			changePhoneNumberRef,
			getAssetPath,
			countries,
		}
	},
})
</script>
