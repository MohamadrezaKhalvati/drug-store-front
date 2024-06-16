<template>
	<div id="change-password-modal" ref="changePasswordModal" class="modal fade" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered mw-650px">
			<div class="modal-content">
				<div id="kt_modal_add_customer_header" class="modal-header justify-content-between">
					<h2 class="fw-bold">
						Change Password
					</h2>
					<div id="kt_modal_add_customer_close" data-bs-dismiss="modal"
						class="btn btn-icon btn-sm btn-active-icon-primary">
						<KTIcon icon-name="cross-circle" icon-class="fs-1" />
					</div>
				</div>

				<el-form ref="formRef" :model="formData" :rules="rules" @submit.prevent="submit()">

					<div class="modal-body py-10 px-lg-17">

						<div class="scroll-y me-n7 pe-7" data-kt-scroll="true"
							data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
							data-kt-scroll-offset="300px">

							<!--  CurrentPassword  input -->
							<div class="fv-row mb-7">
								<label class="fs-6 fw-semibold mb-2 required">CurrentPassword</label>
								<div class="d-flex align-items-center position-relative my-1">
									<input v-model="formData.currentPassword" type="text"
										class=" form-control form-control-solid w-100 bg-input"
										:placeholder="'123456789'">
								</div>
							</div>


							<!--  new Password -->
							<div class="fv-row mb-7">
								<label class="fs-6 fw-semibold mb-2 required">New Password</label>
								<div class="d-flex align-items-center position-relative my-1">
									<input v-model="formData.newPassword" type="password"
										class=" form-control form-control-solid w-100 bg-input"
										:placeholder="'123456789'">
								</div>
								<span class="text-muted fs-7 mt-1">
									Use 8 or more characters with a mix of letters, numbers & symbols.
								</span>
							</div>
							<!--  confirm new Password -->
							<div class="fv-row mb-7">
								<label class="fs-6 fw-semibold mb-2 required">Confirm New Password</label>
								<div class="d-flex align-items-center position-relative my-1">
									<input v-model="formData.confirmNewPassword" type="password"
										class=" form-control form-control-solid w-100 bg-input"
										:placeholder="formData.confirmNewPassword">
								</div>
							</div>
						</div>
					</div>

					<div class="modal-footer flex-center">
						<button id="kt_modal_add_customer_cancel" type="reset" class="btn btn-light px-10">
							Discard
						</button>

						<button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg bt-blue-dark px-10"
							type="submit">
							<span v-if="!loading" class="indicator-label">
								Save
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
	name: 'ChangePasswordModal',
	components: {},
	setup() {
		const formRef = ref<null | HTMLFormElement>(null)
		const changePasswordModal = ref<null | HTMLElement>(null)
		const loading = ref<boolean>(false)
		const formData = ref({
			currentPassword: '',
			newPassword: '123456789',
			confirmNewPassword: '123456789'
		})

		const rules = ref({
			currentPassword: [
				{
					required: true,
					message: 'current password is required',
					trigger: 'change',
				},
			],
			newPassword: [
				{
					required: true,
					message: 'new password is required',
					trigger: 'change',
				},
			],
			confirmNewPassword: [
				{
					required: true,
					message: 'confirm password is required',
					trigger: 'change',
				},
			]
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
							hideModal(changePasswordModal.value)
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
			changePasswordModal,
			getAssetPath,
			countries,
		}
	},
})
</script>
