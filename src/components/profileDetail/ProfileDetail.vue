<template>
	<!-- Personal information -->
	<PersonalInformation />


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
					<a class="btn bt-blue-light fs-6 px-6" data-bs-toggle="modal" data-bs-target="#change-role-modal">
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
		<div id="kt_account_signin_method" class="collapse show">
			<div class="card-body border-top p-9">
				<div class="d-flex flex-wrap align-items-center mb-8">
					<div id="kt_signin_email" class="row  w-75" :class="{ 'd-none': emailFormDisplay }">
						<div class="fs-4 fw-bolder mb-1 col-lg-6 ">
							Email Address
						</div>
						<div class="fs-6 fw-semibold text-gray-600 col-lg-6">
							support@keenthemes.com
						</div>
					</div>

					<div id="kt_signin_email_edit" :class="{ 'd-none': !emailFormDisplay }" class="flex-row-fluid">
						<VForm id="kt_signin_change_email" class="form" novalidate :validation-schema="changeEmail"
							@submit="updateEmail()">
							<div class="row mb-6">
								<div class="col-lg-6 mb-4 mb-lg-0">
									<div class="fv-row mb-0">
										<label for="emailaddress" class="form-label fs-6 fw-bold mb-3">Enter New Email
											Address</label>
										<Field id="emailaddress" type="email"
											class="form-control form-control-lg form-control-solid fw-semibold fs-6"
											placeholder="Email Address" name="emailaddress"
											value="support@keenthemes.com" />
										<div class="fv-plugins-message-container">
											<div class="fv-help-block">
												<ErrorMessage name="emailaddress" />
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="fv-row mb-0">
										<label for="confirmemailpassword" class="form-label fs-6 fw-bold mb-3">Confirm
											Password</label>
										<Field id="confirmemailpassword" type="password"
											class="form-control form-control-lg form-control-solid fw-semibold fs-6"
											name="confirmemailpassword" />
										<div class="fv-plugins-message-container">
											<div class="fv-help-block">
												<ErrorMessage name="confirmemailpassword" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="d-flex">
								<button id="kt_signin_submit" ref="updateEmailButton" type="submit"
									class="btn btn-primary me-2 px-6">
									<span class="indicator-label"> Update Email </span>
									<span class="indicator-progress">
										Please wait...
										<span class="spinner-border spinner-border-sm align-middle ms-2" />
									</span>
								</button>
								<button id="kt_signin_cancel" type="button"
									class="btn btn-color-gray-500 btn-active-light-primary px-6"
									@click="emailFormDisplay = !emailFormDisplay">
									Cancel
								</button>
							</div>
						</VForm>
					</div>
					<div id="kt_signin_email_button" :class="{ 'd-none': emailFormDisplay }" class="ms-auto">
						<a class="btn bt-blue-light fs-6 px-6" data-bs-toggle="modal"
							data-bs-target="#change-email-modal">
							Change Email
						</a>
					</div>
				</div>

				<div class="d-flex flex-wrap align-items-center mb-8">
					<div id="kt_signin_password" class="row w-75" :class="{ 'd-none': passwordFormDisplay }">
						<div class="fs-4 fw-bolder mb-1 col-lg-6">
							Password
						</div>
						<div class="fs-6 fw-semibold text-gray-600 col-lg-6">
							************
						</div>
					</div>
					<div id="kt_signin_password_edit" class="flex-row-fluid"
						:class="{ 'd-none': !passwordFormDisplay }">
						<div class="fs-6 fw-semibold text-gray-600 mb-4">
							Password must be at least 8 character and contain symbols
						</div>

						<VForm id="kt_signin_change_password" class="form" novalidate
							:validation-schema="changePassword" @submit="updatePassword()">
							<div class="row mb-6">
								<div class="col-lg-4">
									<div class="fv-row mb-0">
										<label for="currentpassword" class="form-label fs-6 fw-bold mb-3">Current
											Password</label>
										<Field id="currentpassword" type="password"
											class="form-control form-control-lg form-control-solid fw-semibold fs-6"
											name="currentpassword" />
										<div class="fv-plugins-message-container">
											<div class="fv-help-block">
												<ErrorMessage name="currentpassword" />
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4">
									<div class="fv-row mb-0">
										<label for="newpassword" class="form-label fs-6 fw-bold mb-3">New
											Password</label>
										<Field id="newpassword" type="password"
											class="form-control form-control-lg form-control-solid fw-semibold fs-6"
											name="newpassword" />
										<div class="fv-plugins-message-container">
											<div class="fv-help-block">
												<ErrorMessage name="newpassword" />
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4">
									<div class="fv-row mb-0">
										<label for="confirmpassword" class="form-label fs-6 fw-bold mb-3">Confirm New
											Password</label>
										<Field id="confirmpassword" type="password"
											class="form-control form-control-lg form-control-solid fw-semibold fs-6"
											name="confirmpassword" />
										<div class="fv-plugins-message-container">
											<div class="fv-help-block">
												<ErrorMessage name="confirmpassword" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="d-flex">
								<button id="kt_password_submit" ref="updatePasswordButton" type="submit"
									class="btn btn-primary me-2 px-6">
									<span class="indicator-label"> Update Password </span>
									<span class="indicator-progress">
										Please wait...
										<span class="spinner-border spinner-border-sm align-middle ms-2" />
									</span>
								</button>
								<button id="kt_password_cancel" type="button"
									class="btn btn-color-gray-500 btn-active-light-primary px-6"
									@click="passwordFormDisplay = !passwordFormDisplay">
									Cancel
								</button>
							</div>
						</VForm>
					</div>
					<div id="kt_signin_password_button" class="ms-auto" :class="{ 'd-none': passwordFormDisplay }">
						<a class="btn bt-blue-light fs-6" data-bs-toggle="modal"
							data-bs-target="#change-password-modal">
							Change Password
						</a>
					</div>
				</div>
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
							Get codes from an app like google Authenticator, Microsoft Authenticator, Authy or 1Password
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
</template>

<script lang="ts">
import ChangeEmail from '@/components/modals/forms/ChangeEmail.vue'
import ChangeRoleModal from '@/components/modals/forms/ChangeRole.vue'
import { defineComponent, ref } from 'vue'
import ChangePasswordModal from '../modals/forms/ChangePasswordModal.vue'
import PersonalInformation from '../personalInformation/PersonalInformation.vue'
export default defineComponent({
	name: 'ProfileDetail',
	components: {
		PersonalInformation, ChangeEmail, ChangePasswordModal, ChangeRoleModal
	},
	setup() {
		const emailFormDisplay = ref(false)



		function updatePassword() {

		}
		return {
			updatePassword,
			emailFormDisplay
		}
	}
})
</script>
