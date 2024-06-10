<template>
	<div class="card mb-5 mb-xl-10">
		<div class="card-body pt-9 pb-0">
			<div class="d-flex flex-wrap flex-sm-nowrap mb-3">
				<div class="me-7 mb-4">
					<div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">

						<img :src="getAssetPath('media/avatars/300-1.jpg')" alt="image">
						<div
							class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px" />
					</div>
				</div>

				<div class="flex-grow-1">
					<div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
						<div class="d-flex flex-column">
							<div class="d-flex align-items-center mb-2">
								<a href="#" class="text-gray-800 text-hover-primary fs-2 fw-bold me-1">Max Smith</a>
								<a href="#">
									<KTIcon icon-name="verify" icon-class="fs-1 text-primary" />
								</a>
								<a href="#" class="btn btn-sm btn-light-success fw-bold ms-2 fs-8 py-1 px-3"
									data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade to Pro</a>
							</div>
							<div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
								<a href="#"
									class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
									<KTIcon icon-name="profile-circle" icon-class="fs-4 me-1" />
									Developer
								</a>
								<a href="#"
									class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
									<KTIcon icon-name="geolocation" icon-class="fs-4 me-1" />
									SF, Bay Area
								</a>
								<a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
									<KTIcon icon-name="sms" icon-class="fs-4 me-1" />
									max@kt.com
								</a>
							</div>
						</div>

						<div class="d-flex my-4">
							<a id="kt_user_follow_button" href="#" class="btn btn-sm btn-light me-2">
								<KTIcon icon-name="check" icon-class="fs-3 d-none" />
								Follow
							</a>
							<a href="#" class="btn btn-sm btn-primary me-3" data-bs-toggle="modal"
								data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>
							<div class="me-0">
								<button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
									data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"
									data-kt-menu-flip="top-end">
									<i class="bi bi-three-dots fs-3" />
								</button>
								<Dropdown3 />
							</div>
						</div>
					</div>
					<div class="d-flex flex-wrap flex-stack">
						<div class="d-flex flex-column flex-grow-1 pe-8">
							<div class="d-flex flex-wrap">
								<div
									class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
									<div class="d-flex align-items-center">
										<KTIcon icon-name="arrow-up" icon-class="fs-3 text-success me-2" />
										<div class="fs-2 fw-bold">
											4500$
										</div>
									</div>
									<div class="fw-semibold fs-6 text-gray-500">
										Earnings
									</div>
								</div>
								<div
									class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
									<div class="d-flex align-items-center">
										<KTIcon icon-name="arrow-down" icon-class="fs-3 text-danger me-2" />
										<div class="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="75">
											75
										</div>
									</div>
									<div class="fw-semibold fs-6 text-gray-500">
										Projects
									</div>
								</div>
								<div
									class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
									<div class="d-flex align-items-center">
										<KTIcon icon-name="arrow-up" icon-class="fs-3 text-success me-2" />
										<div class="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="60"
											data-kt-countup-prefix="%">
											60%
										</div>
									</div>
									<div class="fw-semibold fs-6 text-gray-500">
										Success Rate
									</div>
								</div>
							</div>
						</div>
						<div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
							<div class="d-flex justify-content-between w-100 mt-auto mb-2">
								<span class="fw-semibold fs-6 text-gray-500">Profile Compleation</span>
								<span class="fw-bold fs-6">50%</span>
							</div>
							<div class="h-5px mx-3 w-100 bg-light mb-3">
								<div class="bg-success rounded h-5px" role="progressbar" style="width: 50%"
									aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
							</div>
						</div>
					</div>
				</div>

			</div>
			<div class="d-flex overflow-auto h-55px">
				<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap">
					<li class="nav-item">
						<router-link to="/crafted/account/overview" class="nav-link text-active-primary me-6"
							active-class="active">
							Overview
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/crafted/account/settings" class="nav-link text-active-primary me-6"
							active-class="active">
							Settings
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<router-view />
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets'
import { defineComponent } from 'vue'
import Dropdown3 from '@/components/dropdown/Dropdown3.vue'

export default defineComponent({
	name: 'KtAccount',
	components: {
		Dropdown3,
	},
	setup() {
		return {
			getAssetPath,
		}
	},
})
</script>
