<template>
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer mt-5 flex-column">
			<div class="card-title m-0 d-flex mt-5  flex-column">
				<h3 class="fw-bold m-0 fs-2">
					How Can We Help You ?
				</h3>
			</div>
			<div class="my-3">
				<span class="fs-6  fw-semibold  text-muted">
					Need a helping hand? Tell us what you need assistance with, and we'll make it our mission to assist
					you every step of the way. Your <br> satisfaction is our priority!
				</span>
			</div>
		</div>



		<div class="card-body  p-9">

			<div class="d-flex flex-row">
				<div class="col-lg-6 mt-10">
					<div class="d-flex flex-row">
						<div class="row mb-7 col-lg-5">
							<div class="d-flex flex-column">
								<label class="col-lg-4 fw-bold fs-5 ">Name</label>
							</div>
							<div class="d-flex align-items-center position-relative my-3">
								<input v-model="formData.name" type="text" class="form-control form-control-solid w-100"
									:placeholder="'James'">
							</div>
						</div>
						<div class="row mb-7 col-lg-5 mx-5">
							<div class="d-flex flex-column">
								<label class="col-lg-4 fw-bold fs-5 ">Email</label>
							</div>
							<div class="d-flex align-items-center position-relative my-3">
								<input v-model="formData.email" type="text"
									class="form-control form-control-solid w-100" :placeholder="'Email@gmail.com'">
							</div>
						</div>
					</div>
					<div class="row mb-7">
						<div class="d-flex flex-column">
							<label class="col-lg-4 fw-bold fs-5 ">Subject</label>
						</div>
						<div class="d-flex align-items-center position-relative my-3">
							<input v-model="formData.subject" type="text" class="form-control form-control-solid w-100"
								:placeholder="'What’s Up ?'">
						</div>
					</div>

					<div class="d-flex flex-column mb-7 fv-row">
						<label class="fs-6 fw-semibold mb-2">Message</label>
						<div class="d-flex align-items-center position-relative my-1 ">
							<textarea v-model="formData.message" type="text"
								class="form-control form-control-solid w-10 min-h-150px"
								placeholder="Write Here For Us" />
						</div>
					</div>

					<button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg bt-blue-dark mt-5"
						type="submit">
						<span v-if="!loading" class="indicator-label">
							Send Feadback
						</span>
						<span v-if="loading" class="indicator-progress">
							Please wait...
							<span class="spinner-border spinner-border-sm align-middle ms-2" />
						</span>
					</button>
				</div>
				<div class="d-flex justify-content-center  col-lg-6 position-relative">
					<div class="py-10">
						<img :src="getAssetPath('./../../../public/media/map/map.svg')" alt="image" class="image">
					</div>
				</div>
			</div>


		</div>

	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'ContacfForm',
	setup() {

		const formData = ref({
			name: '',
			email: '',
			subject: '',
			message: ''
		})

		const loading = ref(false)
		return {
			getAssetPath,
			formData,
			loading
		}
	}
})
</script>


<style scoped>
.image {
	width: 500px;
	height: 500px;
}
</style>