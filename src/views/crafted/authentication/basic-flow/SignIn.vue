<template>
	<div class="w-lg-500px p-10">
		<VForm id="kt_login_signin_form" class="form w-100" :validation-schema="login"
			:initial-values="{ email: 'admin@demo.com', password: 'demo' }" @submit="onSubmitLogin">
			<div class="text-start mb-10">
				<h1 class="text-gray-900 mb-3">
					Welcome back!
				</h1>
				<span class="text-muted ">
					Please login to continue
				</span>
			</div>

			<div class="fv-row mb-10">
				<label class="form-label fs-6 fw-bold text-gray-900">Email</label>
				<Field tabindex="1" class="form-control form-control-lg form-control-solid" type="text" name="email"
					autocomplete="off" />

				<div class="fv-plugins-message-container">
					<div class="fv-help-block">
						<ErrorMessage name="email" />
					</div>
				</div>
			</div>
			<div class="fv-row mb-10">
				<div class="d-flex flex-stack mb-2 fw-bold">
					Password
				</div>
				<Field tabindex="2" class="form-control form-control-lg form-control-solid" type="password"
					name="password" autocomplete="off" />
				<div class="fv-plugins-message-container">
					<div class="fv-help-block">
						<ErrorMessage name="password" />
					</div>
				</div>
				<div class="d-flex flex-stack mb-2 mt-4 justify-content-end">
					<router-link to="#" class="link-primary fs-6 fw-bold ">
						Forgot Password ?
					</router-link>
				</div>
			</div>
			<div class="text-center">
				<button id="kt_sign_in_submit" ref="submitButton" tabindex="3" type="submit"
					class="btn btn-lg bt-blue-dark w-100 mb-5">
					<span class="indicator-label"> Login </span>

					<span class="indicator-progress">
						Please wait...
						<span class="spinner-border spinner-border-sm align-middle ms-2" />
					</span>
				</button>

			</div>
		</VForm>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets'
import { useAuthStore, type User } from '@/stores/auth'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { ErrorMessage, Field, Form as VForm } from 'vee-validate'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import * as Yup from 'yup'

export default defineComponent({
	name: 'SignIn',
	components: {
		Field,
		VForm,
		ErrorMessage,
	},
	setup() {
		const store = useAuthStore()
		const router = useRouter()

		const submitButton = ref<HTMLButtonElement | null>(null)

		const login = Yup.object().shape({
			email: Yup.string().email().required().label('Email'),
			password: Yup.string().min(6).required().label('Password'),
		})

		//Form submit function
		async function onSubmitLogin(values: any) {
			values = values as User
			// Clear existing errors
			store.logout()

			if (submitButton.value) {
				// eslint-disable-next-line
				submitButton.value!.disabled = true;
				submitButton.value.setAttribute('data-kt-indicator', 'on')
			}


			await store.login(values)
			const error = Object.values(store.errors)

			if (error.length === 0) {
				Swal.fire({
					text: 'You have successfully logged in!',
					icon: 'success',
					buttonsStyling: false,
					confirmButtonText: 'Ok, got it!',
					heightAuto: false,
					customClass: {
						confirmButton: 'btn fw-semibold btn-light-primary',
					},
				}).then(() => {
					router.push({ name: 'dashboard' })
				})
			} else {
				Swal.fire({
					text: error[0] as string,
					icon: 'error',
					buttonsStyling: false,
					confirmButtonText: 'Try again!',
					heightAuto: false,
					customClass: {
						confirmButton: 'btn fw-semibold btn-light-danger',
					},
				}).then(() => {
					store.errors = {}
				})
			}

			submitButton.value?.removeAttribute('data-kt-indicator')
			// eslint-disable-next-line
			submitButton.value!.disabled = false;
		};

		return {
			onSubmitLogin,
			login,
			submitButton,
			getAssetPath,
		}
	},
})
</script>
