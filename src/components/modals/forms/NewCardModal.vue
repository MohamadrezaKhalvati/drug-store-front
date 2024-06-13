<template>

	<div id="kt_modal_new_card" ref="newCardModalRef" class="modal fade" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered mw-650px">
			<div class="modal-content">
				<div class="modal-header justify-content-between">
					<h2>Add New Card </h2>
					<div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
						<KTIcon icon-name="cross-circle" icon-class="fs-1" />
					</div>
				</div>
				<div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
					<VForm id="kt_modal_new_card_form" class="form" :validation-schema="validationSchema"
						@submit="submit">
						<div class="d-flex flex-column mb-7 fv-row">

							<label class="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
								<span class="required">Name On Card</span>
								<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip"
									title="Specify a card holder's name" />
							</label>

							<Field v-model="cardData.nameOnCard" type="text" class="form-control form-control-solid"
								placeholder="" name="nameOnCard" />
							<div class="fv-plugins-message-container">
								<div class="fv-help-block">
									<ErrorMessage name="nameOnCard" />
								</div>
							</div>
						</div>

						<div class="d-flex flex-column mb-7 fv-row">
							<label class="required fs-6 fw-semibold form-label mb-2">Card Number</label>

							<div class="position-relative">
								<Field v-model="cardData.cardNumber" type="text" class="form-control form-control-solid"
									placeholder="Enter card number" name="cardNumber" />


								<div class="position-absolute translate-middle-y top-50 end-0 me-3">
									<KTIcon icon-name="credit-cart" icon-class="fs-2hx" />
								</div>

								<div class="fv-plugins-message-container">
									<div class="fv-help-block">
										<ErrorMessage name="cardNumber" />
									</div>
								</div>
							</div>
						</div>


						<!--  cvv2 -->
						<div class="col-md-12 fv-row">
							<label class="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
								<span class="required">CVV2</span>
							</label>

							<div class="position-relative">
								<Field v-model="cardData.cvv2" type="text" class="form-control form-control-solid"
									minlength="3" maxlength="4" placeholder="1234" name="cvv" />

								<div class="position-absolute translate-middle-y top-50 end-0 me-3">
									<KTIcon icon-name="credit-cart" icon-class="fs-2hx" />
								</div>
							</div>
							<div class="fv-plugins-message-container">
								<div class="fv-help-block">
									<ErrorMessage name="cvv" />
								</div>
							</div>
						</div>

						<div class="row mb-10 mt-8">
							<div class="col-md-12 fv-row">
								<label class="required fs-6 fw-semibold form-label mb-2">Expiration Date</label>

								<div class="row fv-row">
									<div class="col-6">
										<Field v-model="cardData.expirationMonth" name="expirationMonth"
											class="form-select form-select-solid fw-bold" data-control="select2"
											data-hide-search="true" data-placeholder="Month" as="select">
											<option />
											<template v-for="i in 12" :key="i">
												<option :value="i">
													{{ i }}
												</option>
											</template>
										</Field>
										<div class="fv-plugins-message-container">
											<div class="fv-help-block">
												<ErrorMessage name="expirationMonth" />
											</div>
										</div>
									</div>

									<div class="col-6">
										<Field v-model="cardData.expirationYear" name="expirationYear"
											class="form-select form-select-solid" data-control="select2"
											data-hide-search="true" data-placeholder="Year" as="select">
											<option />
											<template v-for="i in 10" :key="i">
												<option :value="new Date().getFullYear() + i">
													{{ new Date().getFullYear() + i }}
												</option>
											</template>
										</Field>
										<div class="fv-plugins-message-container">
											<div class="fv-help-block">
												<ErrorMessage name="expirationYear" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="text-center pt-15">
							<button id="kt_modal_new_card_cancel" type="reset" class="btn btn-light px-10">
								Discard
							</button>
							<button id="kt_modal_new_card_submit " ref="submitButtonRef" type="submit"
								class="btn  bt-blue-dark px-10">
								<span class="indicator-label"> Save </span>
								<span class="indicator-progress">
									Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2" />
								</span>
							</button>
						</div>
					</VForm>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets'
import { hideModal } from '@/core/helpers/modal'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { ErrorMessage, Field, Form as VForm } from 'vee-validate'
import { defineComponent, ref } from 'vue'
import * as Yup from 'yup'

interface CardData {
	nameOnCard: string;
	cardNumber: string;
	expirationMonth: string;
	expirationYear: string;
	cvv2: string;
}

export default defineComponent({
	name: 'NewCardModal',
	components: {
		ErrorMessage,
		Field,
		VForm,
	},
	setup() {
		const submitButtonRef = ref<null | HTMLButtonElement>(null)
		const newCardModalRef = ref<null | HTMLElement>(null)

		const cardData = ref<CardData>({
			nameOnCard: 'Max Doe',
			cardNumber: '4111 1111 1111 1111',
			expirationMonth: '',
			expirationYear: '',
			cvv2: '',
		})

		const validationSchema = Yup.object().shape({
			nameOnCard: Yup.string().required().label('Name'),
			cardNumber: Yup.string().required().label('Card number'),
			expirationMonth: Yup.string().required().label('Month'),
			expirationYear: Yup.string().required().label('Year'),
			cvv: Yup.string().required().label('CVV2'),
		})

		function submit() {
			if (!submitButtonRef.value) {
				return
			}

			submitButtonRef.value.disabled = true
			submitButtonRef.value.setAttribute('data-kt-indicator', 'on')

			setTimeout(() => {
				if (submitButtonRef.value) {
					submitButtonRef.value.disabled = false

					submitButtonRef.value?.removeAttribute('data-kt-indicator')
				}

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
					hideModal(newCardModalRef.value)
				})
			}, 2000)
		}

		return {
			cardData,
			validationSchema,
			submit,
			submitButtonRef,
			newCardModalRef,
			getAssetPath,
		}
	},
})
</script>
