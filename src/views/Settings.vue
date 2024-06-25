<template>

	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					General Setting
				</h3>
			</div>
		</div>


		<div class="card-body p-9 d-flex flex-column justify-content-between  ">


			<div class="mb-7 my-5 d-flex flex-row ">
				<div class=" col-lg-4 d-flex">
					<label class="fw-bold fs-4 ">Theme</label>
				</div>
				<div class="col-lg-8 d-flex flex-row ">
					<div class="form-check  form-check-solid me-7 my-2">
						<input v-model="theme" class="form-check-input " type="radio" value="Dark">
						<label class="form-check-label text-dark  fs-5">
							Dark
						</label>
					</div>
					<div class="form-check  form-check-solid  me-7 my-2">
						<input v-model="theme" class="form-check-input" type="radio" value="Light">
						<label class="form-check-label text-dark fs-5">
							Light
						</label>
					</div>

				</div>
			</div>



			<div class="row mb-7  my-5">
				<label class="col-lg-4 fw-bold fs-4">Language</label>
				<div class="col-lg-8 fv-row  d-flex flex-row ">
					<div v-for="(item, index) in flags" :key="index" class="d-flex flex-row">
						<div class="d-flex flex-row ">
							<div class="my-3 ">
								<div class="mx-3 symbol symbol-30px  symbol-fixed position-relative">
									<img :src="item.imageUrl" alt="image">
								</div>
							</div>
							<div class=" my-4 mx-2 d-flex ">
								<div>
									<div class="d-flex align-items-center">
										<span class="text-gray-800 text-hover-primary fs-5 fw-bold me-1">{{ item.label
											}}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row mb-7 my-5">
				<label class="col-lg-4 fw-bold fs-4">
					Time Zone
				</label>
				<div class="col-lg-8 d-flex align-items-center">
					<input v-model="timeZoneSelected" type="text" class="form-control form-control-solid w-50 bg-input "
						placeholder="UTC+0">
				</div>
			</div>
			<div class="row mb-7 my-5">
				<label class="col-lg-4 fw-bold fs-4">Date Format</label>
				<div class="col-lg-8 flex-column">
					<div class="form-check  form-check-solid me-7">
						<input v-model="dateFormat" class="form-check-input" type="radio" value="December 9, 2024">
						<label class="form-check-label text-dark fs-5">
							December 9, 2024
						</label>
					</div>
					<div class="form-check  form-check-solid  me-7 my-8">
						<input v-model="dateFormat" class="form-check-input" type="radio" value="2024/12/09">
						<label class="form-check-label text-dark fs-5">
							2024/12/09
						</label>
					</div>
					<div class="form-check  form-check-solid  me-7 my-8">
						<input v-model="dateFormat" class="form-check-input" type="radio" value="12/09/2024">
						<label class="form-check-label text-dark fs-5">
							12/09/2024
						</label>
					</div>
					<div class="form-check  form-check-solid me-7 my-8">
						<input v-model="dateFormat" class="form-check-input" type="radio" value="09/12/2024">
						<label class="form-check-label text-dark fs-5">
							09/12/2024
						</label>
					</div>
				</div>
			</div>
			<div class="row mb-7 my-5">
				<label class="col-lg-4 fw-bold fs-4">
					Date Format
				</label>
				<div class="col-lg-8">
					<div class="form-check  form-check-solid  me-7 my-8">
						<input v-model="timeZone" class="form-check-input" type="radio" value="first">
						<label class="form-check-label text-dark fs-5">
							9:23 pm
						</label>
					</div>
					<div class="form-check  form-check-solid  me-7 my-8">
						<input v-model="timeZone" class="form-check-input" type="radio" value="secend">
						<label class="form-check-label text-dark fs-5">
							9:23 PM
						</label>
					</div>
					<div class="form-check  form-check-solid me-7 my-8">
						<input v-model="timeZone" class="form-check-input" type="radio" value="third">
						<label class="form-check-label text-dark fs-5">
							21:23
						</label>
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
	name: 'Settings',
	components: {},
	setup() {

		function deleteProfile() {

		}

		const theme = ref('Light')
		const themeMode = ref([{
			value: 'Dark',
			label: 'Dark'
		},
		{
			value: 'Light',
			label: 'Light'
		}]
		)

		const flags = ref([
			{
				label: 'English',
				imageUrl: getAssetPath('./../../public/media/flags/united-kingdom.svg')
			},
			{
				label: 'Farsi',
				imageUrl: getAssetPath('./../../public/media/flags/iran.svg')
			},
			{
				label: 'German',
				imageUrl: getAssetPath('./../../public/media/flags/germany.svg')
			},
			{
				label: 'Spanish',
				imageUrl: getAssetPath('./../../public/media/flags/spain.svg')
			},
			{
				label: 'Japanese',
				imageUrl: getAssetPath('./../../public/media/flags/japan.svg')
			},
			{
				label: 'French',
				imageUrl: getAssetPath('./../../public/media/flags/france.svg')
			}
		])

		const dateFormat = ref('December 9, 2024')
		const timeZone = ref('first')
		const timeZoneSelected = ref()
		return {
			getAssetPath,
			deleteProfile,
			themeMode,
			theme,
			flags,
			dateFormat,
			timeZone,
			timeZoneSelected
		}
	}

})
</script>
