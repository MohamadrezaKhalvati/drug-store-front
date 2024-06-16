<template>

	<div class="d-flex flex-column">
		<div class="card d-flex flex-row justify-content-between flex-wrap flex-sm-nowrap mb-3">
			<div class="d-flex flex-row">
				<div class="my-3">
					<div class="mx-3 symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">

						<img :src="getAssetPath('media/avatars/300-1.jpg')" alt="image">
						<div
							class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px" />
					</div>
				</div>

				<div class=" my-4 mx-2 d-flex flex-column justify-content-around">
					<div>
						<div class="d-flex align-items-center">
							<span class="text-gray-800 text-hover-primary fs-2 fw-bold me-1">Max Lopez</span>
						</div>
						<div class="d-flex flex-wrap fw-semibold fs-6 pe-2">
							<span class="d-flex align-items-center text-gray-500 text-hover-primary me-5 ">
								#F4679132
							</span>
						</div>
					</div>
					<div>
						<div class="d-flex flex-wrap fw-semibold fs-6  pe-2">
							<span class="d-flex align-items-center text-hover-primary me-5">
								Role:
							</span>
							<span class="d-flex align-items-center text-gray-500 text-hover-primary me-5">
								Administrator
							</span>
						</div>
						<div class="d-flex flex-wrap fw-semibold fs-6 pe-2">
							<span class="d-flex align-items-center  text-hover-primary me-5">
								Email:
							</span>
							<span class="d-flex align-items-center text-gray-500 text-hover-primary me-5">
								jane.doe@pharmacy.com
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="d-flex align-items-end mb-3 mx-9">
				<button type="button" class="btn bt-red  fs-6" @click="deleteProfile">
					Delete Profile
				</button>
			</div>
		</div>
		<div class="card mb-5 mb-xl-10">
			<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
				data-bs-target="#kt_account_profile_details" aria-expanded="true"
				aria-controls="kt_account_profile_details">
				<div class="card-title m-0">
					<h3 class="fw-bold m-0">
						Profile Details
					</h3>
				</div>
			</div>
			<div id="kt_account_profile_details" class="collapse show">
				<VForm id="kt_account_profile_details_form" class="form" novalidate
					:validation-schema="profileDetailsValidator" @submit="saveChanges1()">
					<div class="card-body border-top p-9">
						<div class="row mb-6">
							<label class="col-lg-4 col-form-label fw-semibold fs-6">Avatar</label>
							<div class="col-lg-8">
								<div class="image-input image-input-outline" data-kt-image-input="true" :style="{
									backgroundImage: `url(${getAssetPath(
										'/media/avatars/blank.png'
									)})`,
								}">
									<div class="image-input-wrapper w-125px h-125px"
										:style="`background-image: url(${profileDetails.avatar})`" />
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
								<div class="form-text">
									Allowed file types: png, jpg, jpeg.
								</div>
							</div>
						</div>
						<div class="row mb-6">
							<label class="col-lg-4 col-form-label  fw-semibold fs-6">Full Name</label>
							<div class="col-lg-8">
								<div class="row">
									<div class="col-lg-12 fv-row">
										<Field v-model="profileDetails.fullname" type="text" name="Full Name"
											class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-input"
											placeholder="Max Lopez" />
										<div class="fv-plugins-message-container">
											<div class="fv-help-block">
												<ErrorMessage name="Full Name" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="row mb-6">
							<label class="col-lg-4 col-form-label  fw-bolds fs-6">Email</label>
							<div class="col-lg-8 fv-row">
								<Field v-model="profileDetails.email" type="text" name="Email"
									class="form-control form-control-lg form-control-solid bg-input"
									placeholder="jane.doe@pharmacy.com" />
								<div class="fv-plugins-message-container">
									<div class="fv-help-block">
										<ErrorMessage name="Email" />
									</div>
								</div>
							</div>
						</div>

						<div class="row mb-6">
							<label class="col-lg-4 col-form-label fw-semibold fs-6">
								<span>Phone Number</span>

								<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
									title="Phone number must be active" />
							</label>

							<div class="col-lg-8 fv-row">
								<Field v-model="profileDetails.phoneNumber" type="tel" name="PhoneNumber"
									class="form-control form-control-lg form-control-solid bg-input"
									placeholder="(555) 123-4567" />
								<div class="fv-plugins-message-container">
									<div class="fv-help-block">
										<ErrorMessage name="PhoneNumber" />
									</div>
								</div>
							</div>
						</div>


						<div class="row mb-6">
							<label class="col-lg-4 col-form-label fw-semibold fs-6">Address</label>
							<div class="col-lg-8">
								<div class="row">
									<div class="col-lg-12 fv-row">
										<Field v-model="profileDetails.address" type="text" name="Address"
											class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-input"
											placeholder="123 Main St, Springfield, IL" />
										<div class="fv-plugins-message-container">
											<div class="fv-help-block">
												<ErrorMessage name="Address" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="row mb-6">
							<label class="col-lg-4 col-form-label  fw-semibold fs-6">Date of Birth</label>
							<div class="col-lg-8">
								<div class="row">
									<div class="col-lg-12 fv-row">
										<Field v-model="profileDetails.birthday" type="text" name="Date of Birthday"
											class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-input"
											placeholder="January 1, 1980" />
										<div class="fv-plugins-message-container">
											<div class="fv-help-block">
												<ErrorMessage name="Date of Birthday" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
					<div class="card-footer d-flex justify-content-end py-6 px-9">
						<button type="reset" class="btn btn-light btn-active-light-primary me-2">
							Discard
						</button>

						<button id="kt_account_profile_details_submit" ref="submitButton1" type="submit"
							class="btn bt-blue-dark">
							<span class="indicator-label"> Save Changes </span>
							<span class="indicator-progress">
								Please wait...
								<span class="spinner-border spinner-border-sm align-middle ms-2" />
							</span>
						</button>
					</div>
					<!--end::Actions-->
				</VForm>
				<!--end::Form-->
			</div>
			<!--end::Content-->
		</div>
		<!-- Role and Position -->
		<div class="card mb-5 mb-xl-10">
			<div class="card-header cursor-pointer">
				<div class="card-title m-0">
					<h3 class="fw-bold m-0">
						Role And position
					</h3>
				</div>
			</div>


			<div class="card-body p-9">
				<div class=" d-flex row  mb-7">
					<label class="col-lg-4 fw-semibold text-muted">Role</label>
					<div class="col-lg-6">
						<span class="fw-bold fs-6 text-gray-900">Administrator</span>
					</div>
					<div class="col-lg-2 row">
						<a class="btn bt-blue-light fs-6 px-6" data-bs-toggle="modal"
							data-bs-target="#change-role-modal">
							Change Role
						</a>
					</div>

				</div>

				<div class="row mb-7">
					<label class="col-lg-4 fw-semibold text-muted">Position</label>
					<div class="col-lg-8 fv-row">
						<span class="fw-bold fs-6">Senior Pharmacist</span>
					</div>
				</div>
			</div>

		</div>


		<!-- Sign-in method -->
		<div class="card mb-5 mb-xl-10">
			<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
				data-bs-target="#kt_account_signin_method">
				<div class="card-title m-0">
					<h3 class="fw-bolder m-0">
						Sign-in Method
					</h3>
				</div>
			</div>

			<div class="fs-4 fw-bolder mb-1 col-lg-12 mx-9">
				Login Method:
			</div>
			<div class="row mt-3 mx-6 my-7">

				<!-- AUTHENTICATION APP -->
				<div class="col-lg-4  ">
					<label
						class=" btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-5 h-100"
						for="kt_modal_two_factor_authentication_option_1">
						<KTIcon icon-name="setting-2" icon-class="fs-4x me-4" />
						<span class="d-block fw-semibold text-start">
							<span class="text-gray-900 fw-bold d-block fs-3">Authenticator Apps</span>
							<span class="text-gray-500 fw-semibold fs-7 ">
								Get codes from an app like google Authenticator, Microsoft Authenticator, Authy or
								1Password
							</span>
						</span>
					</label>
				</div>
				<!-- SMS -->
				<div class="col-lg-4">
					<label
						class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center h-100"
						for="kt_modal_two_factor_authentication_option_2">
						<KTIcon icon-name="message-text-2" icon-class="fs-4x me-4" />

						<span class="d-block fw-semibold text-start">
							<span class="text-gray-900 fw-bold d-block fs-3">SMS</span>
							<span class="text-gray-500 fw-semibold fs-6">We will send a code via SMS if you need
								to use your backup
								login method.</span>
						</span>
					</label>
				</div>
				<!-- NORMAL SIGN-IN -->
				<div class="col-lg-4">
					<label
						class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center h-100"
						for="kt_modal_two_factor_authentication_option_2">
						<KTIcon icon-name="message-text-2" icon-class="fs-4x me-4" />

						<span class="d-block fw-semibold text-start">
							<span class="text-gray-900 fw-bold d-block fs-3">Normal Sign-on</span>
							<span class="text-gray-500 fw-semibold fs-6">Just Use Your Password</span>
						</span>
					</label>
				</div>
			</div>
		</div>


		<!--  Save All Button -->
		<div class="my-10">
			<button class="btn bt-blue-dark align-self-center fs-4 ">
				<span class="mx-5">Save All</span>
			</button>
		</div>



		<ChangeEmail />
		<ChangePasswordModal />
		<ChangeRoleModal />
	</div>

</template>

<script lang="ts">
import ChangeEmail from '@/components/modals/forms/ChangeEmail.vue'
import ChangePasswordModal from '@/components/modals/forms/ChangePasswordModal.vue'
import ChangeRoleModal from '@/components/modals/forms/ChangeRole.vue'
import { getAssetPath } from '@/core/helpers/assets'
import { ErrorMessage, Field, Form as VForm } from 'vee-validate'
import { defineComponent, ref } from 'vue'

import * as Yup from 'yup'
export default defineComponent({
	name: 'EditProfile',
	components: {
		ChangeEmail,
		ChangePasswordModal,
		ChangeRoleModal,
		ErrorMessage,
		Field,
		VForm,
	},
	setup() {

		const submitButton1 = ref<HTMLElement | null>(null)

		const profileDetails = ref({
			avatar: getAssetPath('media/avatars/300-1.jpg'),
			fullname: 'Max Lopez',
			email: 'jane.doe@pharmacy.com',
			phoneNumber: '(555) 123-4567',
			address: '123 Main St, Springfield, IL',
			birthday: 'January 1, 1980'
		})

		const profileDetailsValidator = Yup.object().shape({
			fullname: Yup.string().label('Full Name'),
			email: Yup.string().email().label('Email'),
			phoneNumber: Yup.string().label('PhoneNumber'),
			address: Yup.string().label('Address '),
			birthday: Yup.date().label('Date of Birthday')
		})

		function saveChanges1() {
			if (submitButton1.value) {
				submitButton1.value.setAttribute('data-kt-indicator', 'on')

				setTimeout(() => {
					submitButton1.value?.removeAttribute('data-kt-indicator')
				}, 2000)
			}
		}



		function removeImage() {
			profileDetails.value.avatar = '/media/avatars/blank.png'
		}

		function deleteProfile() { }

		return {
			deleteProfile,
			getAssetPath,
			profileDetails,
			profileDetailsValidator,
			saveChanges1,
			removeImage

		}
	}
})
</script>

<style scoped></style>