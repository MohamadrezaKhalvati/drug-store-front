<template>
	<div id="change-role-modal" ref="changeRoleModal" class="modal modal-sm fade" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered mw-400px">
			<div class="modal-content">
				<div id="kt_modal_add_customer_header" class="modal-header justify-content-between">
					<h2 class="fw-bold">
						Change Role
					</h2>
					<div id="kt_modal_add_customer_close" data-bs-dismiss="modal"
						class="btn btn-icon btn-sm btn-active-icon-primary">
						<KTIcon icon-name="cross-circle" icon-class="fs-1" />
					</div>
				</div>

				<el-form ref="formRef" :model="formData" :rules="rules" @submit.prevent="submit()">

					<div class=" ml-5 row mb-7   mx-10 my-10">
						<div class="d-flex flex-column">
							<label class="col-lg-4 fw-bold fs-5 mb-5">Role
							</label>
							<div v-for="(role, index) in roleType" :key="index">
								<div class="form-check  form-check-sm form-check-solid me-5 my-2">
									<input v-model="formData.role" class="form-check-input" type="radio"
										:value="role.value">
									<div class="d-flex flex-column">
										<span class="form-check-label fw-bold text-dark fs-4">
											{{ role.label }}
										</span>
										<label class="form-check-label">
											{{ role.description }}
										</label>
									</div>
								</div>
							</div>

						</div>

					</div>

					<div class="modal-footer flex-center ">

						<button id="kt_modal_add_customer_cancel" type="reset" class="btn btn-lg btn-light px-10">
							Cancel
						</button>

						<button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg bt-blue-dark px-10"
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
	name: 'ChaneRoleModal',
	components: {},
	setup() {
		const formRef = ref<null | HTMLFormElement>(null)
		const changeRoleModal = ref<null | HTMLElement>(null)
		const loading = ref<boolean>(false)
		const formData = ref({
			role: ''
		})


		const roleType = [{
			label: 'Administrator',
			value: 'Administrator',
			description: 'Best for business owners and company administrator '
		},
		{
			label: 'Administrator',
			value: 'Administrator',
			description: 'Best for business owners and company administrator '

		},
		{
			label: 'Administrator',
			value: 'Administrator',
			description: 'Best for business owners and company administrator '

		},
		{
			label: 'Administrator',
			value: 'Administrator',
			description: 'Best for business owners and company administrator '

		}]

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
							hideModal(changeRoleModal.value)
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
			changeRoleModal,
			getAssetPath,
			countries, roleType
		}
	},
})
</script>
