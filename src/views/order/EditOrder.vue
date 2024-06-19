<template>

	<!--  add product -->
	<div class="card mb-5 mb-xl-10 ">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0 justify-content-between">

				<h3 class="fw-bold m-0">
					Select Product
				</h3>
			</div>

			<div class="my-6">
				<KTIcon icon-name="up-square" icon-class="fs-1 text-dark" />
			</div>


		</div>


		<div class="card-body p-9">
			<div class="row mb-7">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Product</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7">Select a Product or Add New Product</label>
				</div>
				<div class="d-flex align-items-center position-relative my-5">
					<KTIcon icon-name="magnifier" icon-class="fs-1 position-absolute ms-6 text-dark" />
					<input v-model="searchProduct" type="text"
						class="form-control form-control-solid w-100 ps-15 bg-input" placeholder="Search Product Here"
						@input="searchItems()">
				</div>
			</div>


			<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
				<button class="btn bt-blue-dark  me-3" @click="clearCustomerInformation">
					<span class="mx-5 my-2">
						Add New Product
					</span>
				</button>
			</div>

		</div>
	</div>



	<!-- Customer Information -->
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Customer Information
				</h3>
			</div>

			<div class="my-6">
				<KTIcon icon-name="up-square" icon-class="fs-1 text-dark" />
			</div>
		</div>


		<div class="card-body p-9">
			<div class="d-flex flex-row justify-content-between">
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  required">First Name</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer first name</label>
					</div>
					<div class="d-flex align-items-center position-relative my-5">
						<input v-model="formdata.firstName" type="text"
							class="form-control form-control-solid w-100  bg-input" placeholder="John">
					</div>
				</div>

				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  required">Last Name</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer last name</label>
					</div>
					<div class="d-flex align-items-center position-relative my-5">
						<input v-model="formdata.lastName" type="text"
							class="form-control form-control-solid w-100  bg-input" placeholder="Smith">
					</div>
				</div>

				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  required">Phone Number</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer phone
							number</label>
					</div>
					<div class="d-flex align-items-center position-relative my-5">
						<input v-model="formdata.phoneNumber" type="text"
							class="form-control form-control-solid w-100  bg-input" placeholder="+555-75356776265">
					</div>
				</div>

			</div>

			<div class="row mb-7 col-lg-4">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Email</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer Email</label>
				</div>
				<div class="d-flex align-items-center position-relative my-5">
					<input v-model="formdata.email" type="text" class="form-control form-control-solid w-100  bg-input"
						placeholder="example@example.com">
				</div>
			</div>


			<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
				<button class="btn bt-blue-light  me-3">
					<span class="mx-5  my-2">
						Clear All Data
					</span>
				</button>
			</div>

		</div>
	</div>


	<!-- Shipping Address -->
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Shipping Address
				</h3>
			</div>

			<div class="my-6">
				<KTIcon icon-name="up-square" icon-class="fs-1 text-dark" />
			</div>
		</div>





		<div class="card-body p-9">
			<!-- address -->
			<div class="row mb-7 w-100">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Address</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer full Address
						here</label>
				</div>
				<div class="d-flex align-items-center position-relative my-5 ">
					<textarea type="text" :v-model="formdata.address" placeholder="101, Colins Street"
						class="form-control form-control-solid w-10 min-h-150px bg-input" />
				</div>
			</div>


			<!--  row one -->
			<div class="d-flex flex-row justify-content-between">

				<!--  state -->
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  required">State</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer last name</label>
					</div>
					<div class="d-flex align-items-center position-relative my-5">
						<input v-model="formdata.state" type="text"
							class="form-control form-control-solid w-100  bg-input" placeholder="Texas">
					</div>
				</div>


				<!-- city -->
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  required">City</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer city</label>
					</div>
					<div class="d-flex align-items-center position-relative my-5">
						<input v-model="formdata.city" type="text"
							class="form-control form-control-solid w-100  bg-input" placeholder="Austin">
					</div>
				</div>


				<!-- Neighbourhood -->
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  required w-100">Neighbourhood</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer Neighbourhood
						</label>
					</div>
					<div class="d-flex align-items-center position-relative my-5">
						<input v-model="formdata.neighbourhood" type="text"
							class="form-control form-control-solid w-100  bg-input" placeholder="Gorge 23">
					</div>
				</div>

			</div>



			<!-- row two -->
			<div class="d-flex flex-row justify-content-between">
				<!--  Home Number -->
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  required">Home Number</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer Home
							Number</label>
					</div>
					<div class="d-flex align-items-center position-relative my-5">
						<input v-model="formdata.homeNumber" type="text"
							class="form-control form-control-solid w-100  bg-input" placeholder="29">
					</div>
				</div>


				<!-- Home Unit -->
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  required">Home Unit</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer Home Unit</label>
					</div>
					<div class="d-flex align-items-center position-relative my-5">
						<input v-model="formdata.homeUnit" type="text"
							class="form-control form-control-solid w-100  bg-input" placeholder="4">
					</div>
				</div>


				<!-- Postal Code -->
				<div class="row mb-7 col-lg-4">
					<div class="d-flex flex-column">
						<label class="col-lg-4 fw-bold fs-5  required w-100">Postal Code</label>
						<label class="col-lg-4 fw-semibold  text-muted fs-7 w-100">Enter the customer Postal Code
						</label>
					</div>
					<div class="d-flex align-items-center position-relative my-5">
						<input v-model="formdata.postalCode" type="text"
							class="form-control form-control-solid w-100  bg-input" placeholder="123456789">
					</div>
				</div>

			</div>


			<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
				<button class="btn bt-blue-light  me-3" @click="clearShippingAddress">
					<span class="mx-5  my-2">
						Clear All Data
					</span>
				</button>
			</div>

		</div>
	</div>



	<!--  Prescription -->
	<div class="card mb-5 mb-xl-10 ">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0 justify-content-between">

				<h3 class="fw-bold m-0">
					Prescription
				</h3>
			</div>

			<div class="my-6">
				<KTIcon icon-name="up-square" icon-class="fs-1 text-dark" />
			</div>


		</div>


		<div class="card-body p-9">
			<div class="row mb-7">
				<div class="d-flex flex-column">
					<label class="col-lg-4 fw-bold fs-5  required">Prescription Image</label>
					<label class="col-lg-4 fw-semibold  text-muted fs-7">Upload The Prescription Image Here </label>
				</div>
				<div class="d-flex align-items-center position-relative my-5">
					<input v-model="formdata.prescriptionImage" type="text"
						class="form-control form-control-solid w-100 ps-15 bg-input" placeholder="Search Product Here">
				</div>
			</div>


			<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
				<button class="btn bt-blue-light  me-3" @click="clearShippingAddress">
					<span class="mx-5  my-2">
						Clear All Data
					</span>
				</button>
			</div>

		</div>
	</div>



	<!-- order Items -->
	<div class="my-5">
		<div class="card mb-5 mb-xl-10">
			<div class="card-header cursor-pointer">
				<div class="card-title m-0">
					<h3 class="fw-bold m-0">
						Ordered Items
					</h3>
				</div>
				<div class="mt-4">
					<KTIcon icon-name="up-square" icon-class="fs-1 text-dark" />
				</div>
			</div>
			<div class="separator dotted   mb-7" />

			<div class="cards m-9 card-color">

				<div class="card-body py-3">
					<div class="table-responsive">
						<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
							<thead>
								<tr class="fw-bold text-muted">
									<th class="min-w-125px">
										Product
									</th>
									<th class="min-w-120px">
										SKU
									</th>
									<th class="min-w-120px">
										QTY
									</th>
									<th class="min-w-100px ">
										Unit Price
									</th>
									<th class="min-w-140px">
										Total Price
									</th>

								</tr>
							</thead>

							<tbody>
								<template v-for="(order, index) in list" :key="index">
									<tr>
										<td>
											<div class="d-flex align-items-center">
												<div class="symbol  symbol-125px me-5">
													<img :src="order.product.image" alt="">
												</div>
												<div class="d-flex justify-content-start flex-column">
													<span href="#"
														class="text-gray-900 fw-bold text-hover-primary fs-6">{{
															order.product.name }}</span>
													<span class="text-muted fw-semibold text-muted d-block fs-7 mt-1">{{
														order.product.information
													}}</span>
												</div>
											</div>
										</td>
										<td>
											<span class="text-muted fw-bold text-hover-primary d-block fs-6">
												{{ order.sku }}
											</span>
										</td>
										<td class="text-end">
											<div class="d-flex flex-column w-100 me-2">
												<div class="d-flex flex-stack mb-2">
													<span class=" me-2 fs-7  fw-bold text-muted">
														{{ order.quantity }}
													</span>
												</div>
											</div>
										</td>
										<td>
											<span
												class="text-muted fw-bold text-hover-primary d-block fs-6 bg-light w-fit">${{
													order.unitPrice }}</span>
										</td>
										<td>
											<a class="text-muted fw-bold text-hover-primary d-block fs-6">${{
												order.totalPrice }}</a>
										</td>
									</tr>
								</template>
							</tbody>
						</table>
					</div>
				</div>

				<div class="card-footer text-end">
					<span class="fs-3 fw-bold ">
						Total Cash: $84.00
					</span>
				</div>
			</div>
		</div>
	</div>


	<div class="card-toolbar  d-flex justify-content-end" data-bs-toggle="tooltip" data-bs-placement="top"
		data-bs-trigger="hover">
		<button class="btn bt-blue-dark  me-3  mb-10" @click="submitOrder">
			<span class="mx-5  my-2">
				Order
			</span>
		</button>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'EditOrder',
	components: {},
	setup() {

		const formdata = ref({
			firstName: 'John',
			lastName: 'Smith',
			phoneNumber: '+555-75356776265',
			email: 'example@example.gamil',
			address: '101, Colins Street',
			state: 'Texas',
			city: 'Austin',
			neighbourhood: 'Gorge 23',
			homeNumber: '29',
			homeUnit: '4',
			postalCode: '123456789',
			prescriptionImage: ''
		})
		const searchProduct = ref()

		function searchItems() { }

		function clearCustomerInformation() {
			formdata.value.firstName = formdata.value.lastName = formdata.value.phoneNumber = formdata.value.email = ''
		}

		function clearShippingAddress() {
			formdata.value.address = formdata.value.state = formdata.value.city = formdata.value.neighbourhood = formdata.value.homeNumber = formdata.value.homeUnit = formdata.value.postalCode = ''
		}

		function clearPrescriptionImage() {
			formdata.value.prescriptionImage = ''
		}


		function submitOrder() { }

		const list = ref([
			{
				product: {
					image: getAssetPath('./../../../public/media/order/product-ordered-1.svg'),
					name: 'CardioHealth Plus 20 mg',
					information: 'Put Product information Here',
				},
				sku: 'XYZ-12345',
				quantity: '1',
				unitPrice: '15.00',
				totalPrice: '15.00'
			},
			{
				product: {
					image: getAssetPath('./../../../public/media/order/product-ordred-2.svg'),
					name: 'CardioHealth Plus 20 mg',
					information: 'Put Product information Here',
				},
				sku: 'XYZ-12345',
				quantity: '3',
				unitPrice: '20.00',
				totalPrice: '60.00'
			},
			{
				product: {
					image: getAssetPath('./../../../public/media/order/product-ordered-3.svg'),
					name: 'CardioHealth Plus 20 mg',
					information: 'Put Product information Here',
				},
				sku: 'XYZ-12345',
				quantity: '1',
				unitPrice: '9.00',
				totalPrice: '9.00'
			}
		])

		return {
			formdata,
			searchItems,
			searchProduct,
			clearCustomerInformation,
			clearShippingAddress,
			clearPrescriptionImage,
			list,
			submitOrder
		}

	}
})
</script>

<style scoped></style>