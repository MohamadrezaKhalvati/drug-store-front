<template>
	<div id="Delete-Alert-Modal" ref="changeRoleModal" class="modal modal-sm fade" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered mw-400px ">
			<div class="modal-content">
				<el-form ref="formRef" @submit.prevent="submit()">
					<div class="d-flex flex-column justify-content-center">
						<div class="d-flex justify-content-center my-10">
							<KTIcon icon-name="information-5" icon-class="text-danger  fs-5x" />
						</div>
						<span class="text-center fs-5 fv-semibold">
							Oops! Are you sure you want to delete this {{ name }}?<br>
							This action can't be undone.
						</span>
					</div>

					<div class="modal-footer flex-center ">

						<button id="kt_modal_add_customer_cancel" @click="cancel" type="reset"
							class="btn  bt-cancel text-white px-10">
							Cancel
						</button>

						<button :data-kt-indicator="loading ? 'on' : null" class="btn bg-danger text-white px-10"
							type="submit">
							<span v-if="!loading" class="indicator-label text-hover-danger">
								Delete
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
import { getAssetPath } from '@/core/helpers/assets';
import { hideModal } from '@/core/helpers/modal';
import Swal from 'sweetalert2';
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'DeleteAlert',
	props: {
		name: {
			type: String,
			reqiured: true,
			default: '',
		}
	},
	setup() {
		const formRef = ref<null | HTMLFormElement>(null)
		const deleteAlertModal = ref<null | HTMLElement>(null)
		const loading = ref<boolean>(false)

		function cancel() {
			hideModal(deleteAlertModal.value)
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
							hideModal(deleteAlertModal.value)
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
			cancel,
			submit,
			formRef,
			loading,
			deleteAlertModal,
			getAssetPath,
		}
	}
})
</script>


<style scoped>
.bt-cancel {
	background-color: #D7D7D7 !important;
}
</style>