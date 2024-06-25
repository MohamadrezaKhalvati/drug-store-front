<template>
	<div id="Add-Staff-modal" ref="addStaffModal" class="modal modal-sm fade" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered mw-650px">
			<div class="modal-content">
				<div id="kt_modal_add_customer_header" class="modal-header justify-content-between">
					<h2 class="fw-bold">
						Add Staff
					</h2>
					<div id="kt_modal_add_customer_close" data-bs-dismiss="modal"
						class="btn btn-icon btn-sm btn-active-icon-primary">
						<KTIcon icon-name="cross-circle" icon-class="fs-1" />
					</div>
				</div>

				<el-form ref="formRef" :model="formData" :rules="rules" @submit.prevent="submit()">



					<div class="modal-body">

						<div class="fv-row my-4">
							<label class="fs-6 fw-bold mb-2">Avatar</label>
							<div class="d-flex align-items-center position-relative my-1">
								<div class="col-lg-8 ">
									<div class="image-input image-input-outline" data-kt-image-input="true" :style="{
										backgroundImage: `url(${getAssetPath(
											'./../../../../public/media/avatars/blank.png'
										)})`,
									}">
										<div class="image-input-wrapper w-125px h-125px"
											:style="`background-image: url(${formData.image})`" />
										<label
											class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
											data-kt-image-input-action="change" data-bs-toggle="tooltip"
											title="Change avatar">
											<i class="bi bi-pencil-fill fs-7" />
											<input type="hidden" name="avatar_remove">
										</label>
										<span
											class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
											data-kt-image-input-action="remove" data-bs-toggle="tooltip"
											title="Remove avatar" @click="removeImage()">
											<i class="bi bi-x fs-2" />
										</span>
									</div>

								</div>
							</div>
						</div>


						<div class="fv-row mt-5">
							<label class="fs-6 fw-bold mb-2">Full number</label>
							<div class="d-flex align-items-center position-relative my-1">
								<input v-model="formData.fullname" type="text"
									class="form-control form-control-solid w-100 bg-input" placeholder="John smith">
							</div>
						</div>

						<div class="fv-row my-5">
							<label class="fs-6 fw-bold mb-2">Email</label>
							<div class="d-flex align-items-center position-relative my-1">
								<input v-model="formData.email" type="text"
									class="form-control form-control-solid w-100 bg-input"
									placeholder="exampel@example.com">
							</div>
						</div>

						<div class=" ml-5 row mb-7 my-10">
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
					</div>

					<div class="modal-footer flex-center ">
						<button id="kt_modal_add_customer_cancel" type="reset" class="btn btn-lg btn-light px-10"
							@click="cancel">
							Cancel
						</button>
						<button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg bt-blue-dark px-10"
							type="submit">
							<span v-if="!loading" class="indicator-label">
								Add Staff
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
	name: 'AddStaff',
	components: {},
	setup() {
		const formRef = ref<null | HTMLFormElement>(null)
		const addStaffModal = ref<null | HTMLElement>(null)
		const loading = ref<boolean>(false)
		const formData = ref({
			role: '',
			fullname: "",
			email: "",
			image: getAssetPath("./../../../../public/media/avatars/blank.png")
		})


		const roleType = [{
			label: 'Administrator',
			value: 'admin',
			description: 'super admin'
		},
		{
			label: 'Normal',
			value: 'normal',
			description: 'normal user'

		},
		{
			label: 'Manager',
			value: 'manager',
			description: 'manager user'

		},
		{
			label: 'Pharmacists',
			value: 'pharmacists',
			description: 'pharmacists user'

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


		function removeImage() {
			formData.value.image = '/media/avatars/blank.png'
		}

		function cancel() {
			hideModal(addStaffModal.value)
		}
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
							hideModal(addStaffModal.value)
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
			addStaffModal,
			getAssetPath,
			countries,
			roleType,
			cancel,
			removeImage
		}
	},
})
</script>
