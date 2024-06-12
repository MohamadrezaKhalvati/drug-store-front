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

		<div class="mt-4">
			<ProfileDetail />
		</div>
	</div>



</template>

<script lang="ts">
import ProfileDetail from '@/components/profileDetail/ProfileDetail.vue';
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
	name: 'StaffProfile',
	components: { ProfileDetail },
	setup() {

		function deleteProfile() {
			console.log('want to delete profile')
		}

		onMounted(() => {
			console.log('sdf')
		})
		return {
			getAssetPath,
			deleteProfile,

		}
	}

})
</script>
