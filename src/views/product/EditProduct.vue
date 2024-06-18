<template>
	<!-- Basic Information -->
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Basic Information
				</h3>
			</div>

		</div>


		<div class="card-body p-9">
			<div class="row mb-7">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Product name</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7">Enter Your Product Name Here</label>
				</div>
				<div class="d-flex align-items-center position-relative my-3">
					<input v-model="formData.productName" type="text" class="form-control form-control-solid w-100"
						:placeholder="'Radiant Glow Revitalizing Serum'">
				</div>
			</div>

			<div class="row mb-7">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Product Category</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7">Select the best category for your
						product</label>
				</div>
				<div class="d-flex align-items-center position-relative my-3">
					<input v-model="formData.productCategory" type="text" class="form-control form-control-solid w-100"
						:placeholder="'Skin Care Products'">
				</div>
			</div>
			<div class="row mb-7">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Thumbnail</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7">Set the product thumbnail image</label>
				</div>
				<div class="d-flex align-items-center position-relative my-3">
					<input v-model="formData.Thumbnail" type="text" class="form-control form-control-solid w-100"
						:placeholder="'Radiant Glow Revitalizing Serum'">
				</div>
			</div>


			<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
				<button class="btn bt-blue-dark bt-blue-dark me-3">
					Save
				</button>
				<button class="btn bt-blue-light  me-3">
					Clear All Data
				</button>
			</div>

		</div>
	</div>


	<!-- Slider -->
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Slider
				</h3>
			</div>

		</div>

		<div class="card-body p-9">
			<div class="row mb-7">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Slider</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100 ">The image ratio should be 3:1
						and the
						minimum
						resolution should be 1920 x 1080 and dont use transparent image!</label>
				</div>
				<div class="d-flex align-items-center position-relative my-3">
					<input v-model="formData.sliderImages" type="text" class="form-control form-control-solid w-100"
						:placeholder="'Radiant Glow Revitalizing Serum'">
				</div>
			</div>

			<div class="card-toolbar mt-20" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
				<button class="btn bt-blue-light  me-3">
					Clear All Data
				</button>
			</div>

		</div>
	</div>

	<!--  Description of Product -->
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Description
				</h3>
			</div>

		</div>



		<div class="card-body p-9">
			<div class="row mb-7">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Description of Product</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100 ">While paying attention to the character
						limit, describe the features of the Product</label>
				</div>
				<div class="d-flex align-items-center position-relative my-3">
					<div class="d-flex align-items-center position-relative my-1  w-100">
						<textarea v-model="formData.description" type="text"
							class="form-control form-control-solid w-100  min-h-150px" :placeholder="'Description'" />
					</div>
				</div>
			</div>

			<div class="card-toolbar mt-15" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
				<button class="btn bt-blue-light  me-3">
					Clear All Data
				</button>
			</div>

		</div>
	</div>

	<!-- Inventory And Pricing -->
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Inventory And Pricing
				</h3>
			</div>

		</div>


		<div class="card-body p-9">
			<div class="row mb-7">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Base Price</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7">Enter the product price in USD</label>
				</div>
				<div class="d-flex align-items-center position-relative my-3">
					<input v-model="formData.price" type="text" class="form-control form-control-solid w-100"
						:placeholder="'10.00'">


				</div>
			</div>


			<div>
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Discount</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7">Enter any applicable discount
						percentage</label>
				</div>
				<div class="d-flex flex-row my-3">
					<div v-for="(item, index) in discountAmount" :key="index"
						class="form-check  form-check-sm form-check-solid me-5">
						<input v-model="formData.discount" class="form-check-input" type="radio" :value="item">
						<label class="form-check-label">
							%{{ item }}
						</label>
					</div>
				</div>
			</div>

			<div class="separator border-3 my-10" />

			<div class="d-flex flex-row justify-content-between mt-5">
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5">SKU/Code</label>
						<label class="col-lg-4 fw-semibold w-100  text-muted fs-7">Enter the Stock Keeping Unit for
							inventory
							tracking</label>
					</div>
					<div class="d-flex align-items-center position-relative my-3">
						<input v-model="formData.skuCode" type="text" class="form-control form-control-solid w-100"
							:placeholder="'PROD123456'">
					</div>
				</div>
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5">Bacode</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter or scan the product
							barcode</label>
					</div>
					<div class="d-flex align-items-center position-relative my-3">
						<input v-model="formData.bacode" type="text" class="form-control form-control-solid w-100"
							:placeholder="'1234567890123'">
					</div>
				</div>
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5">Quantity</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the quantity of the
							product</label>
					</div>
					<div class="d-flex align-items-center position-relative my-3">
						<input v-model="formData.quantity" type="text" class="form-control form-control-solid w-100"
							:placeholder="'50'">
					</div>
				</div>

			</div>


			<div class="row mb-7 col-lg-12">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5">Supplier/Manufacturer</label>
					<label class="col-lg-4 fw-semibold w-100  text-muted fs-7">Select or enter the supplier of the
						product</label>
				</div>
				<div class="d-flex align-items-center position-relative my-3">
					<input v-model="formData.supplier" type="text" class="form-control form-control-solid w-100"
						:placeholder="'ABC Distributors'">
				</div>
			</div>

			<div class="row mb-7 col-lg-12">
				<div class="d-flex flex-row w-50 justify-content-between">
					<h2 class="fw-bold fs-5">
						Can Customer Return This Product ?
					</h2>
					<div class="d-flex flex-row mt-1">
						<div class="form-check  form-check-sm form-check-solid me-5">
							<input v-model="formData.returnable" class="form-check-input" type="radio" :value="true">
							<label class="form-check-label">
								YES
							</label>
						</div>
						<div class="form-check  form-check-sm form-check-solid me-5">
							<input v-model="formData.returnable" class="form-check-input" type="radio" :value="false">
							<label class="form-check-label">
								No
							</label>
						</div>
					</div>
				</div>

			</div>


			<div class="card-toolbar mt-10">
				<button class=" btn bt-blue-dark bt-blue-dark me-3">
					Save
				</button>
				<button class="btn bt-blue-light  me-3">
					Clear All Data
				</button>
			</div>

		</div>
	</div>



	<!-- Dosage and Usage -->
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Dosage and Usage
				</h3>
			</div>

		</div>


		<div class="card-body p-9">
			<div class="d-flex flex-row justify-content-between">
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  w-100">Dosage Strength</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the strength or potency of the
							medication</label>
					</div>
					<div class="d-flex align-items-center position-relative my-3">
						<input v-model="formData.dosage" type="text" class="form-control form-control-solid w-100"
							:placeholder="'10'">
					</div>
				</div>

				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5 ">Dosage Form</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Select or specify the form of the
							medication</label>
					</div>
					<div class="form-floating ">
						<select id="floatingSelect1" v-model="formData.dosageForm" class="form-select form-select-solid"
							aria-label="Floating label select example">
							<option selected>
								Capsule
							</option>
							<option value="1">
								One
							</option>
							<option value="2">
								Two
							</option>
							<option value="3">
								Three
							</option>
						</select>
					</div>
				</div>

				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5   w-100">Expiration Date</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the expiration date of the
							product</label>
					</div>
					<div class="d-flex align-items-center position-relative my-3">
						<input v-model="formData.expirationDate" type="date"
							class="form-control form-control-solid w-100" :placeholder="'DD/MM/YYYY'">
					</div>
				</div>
			</div>

			<div class="row mb-7">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Usage Instructions</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100 ">Enter any specific instructions for
						using the product</label>
				</div>
				<div class="d-flex align-items-center position-relative my-3">
					<div class="d-flex align-items-center position-relative my-1  w-100">
						<textarea v-model="formData.usageInstructions" type="text"
							class="form-control form-control-solid w-100  min-h-150px"
							:placeholder="'Take one tablet with water every 8 hours'" />
					</div>
				</div>
			</div>


			<div class="row mb-7 col-lg-12">
				<div class="d-flex flex-row w-100">
					<label class="col-lg-4 fw-bold fs-5"> Do Customer Need Prescription for this Product ?
					</label>
					<div class="d-flex flex-row">
						<div class="form-check  form-check-sm form-check-solid me-5 mx-10 mt-1">
							<input v-model="formData.Prescription" class="form-check-input" type="radio" :value="true">
							<label class="form-check-label">
								YES
							</label>
						</div>
						<div class="form-check  form-check-sm form-check-solid me-5">
							<input v-model="formData.returnable" class="form-check-input" type="radio" :value="false">
							<label class="form-check-label">
								No
							</label>
						</div>
					</div>
				</div>

			</div>

			<div class="card-toolbar mt-10" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
				<button class="btn bt-blue-dark bt-blue-dark me-3">
					Save
				</button>
				<button class="btn bt-blue-light  me-3">
					Clear All Data
				</button>
			</div>

		</div>
	</div>



	<!-- Status and Publication -->
	<div class="card mb-5 mb-xl-10 ">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Status and Publication
				</h3>
			</div>

		</div>


		<div class="card-body p-9">
			<div class="d-flex flex-row justify-content-between">
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  w-100 required">Status</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Select the current status of the
							product</label>
					</div>
					<div class="d-flex align-items-center position-relative my-3">
						<input v-model="formData.status" type="text" class="form-control form-control-solid w-100"
							:placeholder="'Published'">
					</div>
				</div>

				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5   w-100">Published date</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the date you want the product
							to published</label>
					</div>
					<div class="d-flex align-items-center position-relative my-3">
						<input v-model="formData.publishedDate" type="date"
							class="form-control form-control-solid w-100" :placeholder="'DD/MM/YYYY'">
					</div>
				</div>

				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5   w-100">Published time</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the time you want the product
							to published</label>
					</div>
					<div class="d-flex align-items-center position-relative my-3">
						<input v-model="formData.publishedTime" type="time"
							class="form-control form-control-solid w-100" :placeholder="'00:00'">
					</div>
				</div>
			</div>


			<div class="card-toolbar mt-10" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
				<button class="btn bt-blue-light  me-3">
					Clear All Data
				</button>
			</div>

		</div>
	</div>


	<!--  SUBMIT -->
	<div class="card-toolbar my-10 d-flex justify-content-end ">
		<button class=" btn bt-blue-dark bg-danger">
			Save
		</button>

	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
	name: 'EditProduct',
	component: {},
	setup() {
		const discountAmount = ['0', '5', '10', '15', '20', '25', '30', '35', '40 ', '45', '50', '60', '70', '80', '90', '99']

		const formData = ref({
			productName: 'Radiant Glow Revitalizing Serum',
			productCategory: 'Skin Care Products',
			Thumbnail: '',
			sliderImages: '',
			description: 'Lorem ipsum dolor sit amet consectetur. Sit quam vitae rhoncus dignissim cursus bibendum elementum platea. Aliquam nunc tellus sit lacus. Integer bibendum lacinia urna quam massa orci mattis nascetur ultrices. Eu purus adipiscing nam in purus quam et. At massa cursus aliquam vel. Lacus habitasse in risus non tincidunt fusce malesuada. Gravida lectus proin scelerisque ullamcorper leo orci tellus lorem amet. Nibh mattis nunc viverra phasellus. Massa ridiculus netus netus at in faucibus sit. Quam pharetra commodo libero amet eget donec sed mattis.',
			price: '10.00',
			discount: '0',
			skuCode: 'PROD123456',
			bacode: '1234567890123',
			quantity: '50',
			supplier: 'ABC Distributors',
			dosage: '10',
			dosageForm: 'Capsule',
			expirationDate: '',
			usageInstructions: 'Lorem ipsum dolor sit amet consectetur. Sit quam vitae rhoncus dignissim cursus bibendum elementum platea. Aliquam nunc tellus sit lacus. Integer bibendum lacinia urna quam massa orci mattis nascetur ultrices. Eu purus adipiscing nam in purus quam et. ',
			returnable: true,
			Prescription: true,
			status: 'Published',
			publishedDate: 'DD/MM/YYYY',
			publishedTime: '00:00'

		})

		watch(() => formData.value.productName, () => {
			console.log(formData.value.productName)
		})

		return {
			formData,
			discountAmount
		}
	}
})
</script>
