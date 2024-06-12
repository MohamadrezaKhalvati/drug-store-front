<template>
	<div class="d-flex flex-column flex-xl-row">
		<div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
			<div class="card mb-5 mb-xl-8">
				<div class="card-body pt-15">
					<div class="d-flex flex-center flex-column mb-5">
						<div class="symbol symbol-100px symbol-circle mb-7">
							<img :src="getAssetPath('media/avatars/300-1.jpg')" alt="image">
						</div>
						<a href="#" class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1">
							{{ customer.name }}
						</a>
						<div class="fs-5 fw-semibold text-muted mb-6">
							{{ customer.email }}
						</div>
						<div class="d-flex flex-wrap flex-center justify-content-evenly  w-75">
							<div class="border border-gray-300 border-dashed rounded py-3 px-7  mb-3">
								<div class="fs-4 fw-bold text-gray-700 text-center">
									<span class="w-75px">{{ customer.totalOrder }}</span>
								</div>
								<div class="fw-semibold text-muted">
									Order
								</div>
							</div>

							<div class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
								<div class="fs-4 fw-bold text-center text-gray-700">
									<span class="w-50px">${{ customer.totalPayment }}</span>
								</div>
								<div class="fw-semibold text-muted">
									Total Payment
								</div>
							</div>
						</div>
					</div>
					<div class="separator separator-dashed my-3" />
					<div class="collapse show">
						<div class="py-5 fs-6 min-h-450px">
							<div class="d-flex flex-row justify-content-between">
								<div class="fw-bold mt-5 ">
									Customer ID:
								</div>
								<div class="text-gray-600 align-content-end fs-7">
									{{ customer.id }}
								</div>
							</div>
							<div class="d-flex flex-row justify-content-between">
								<div class="fw-bold mt-5">
									Phone Number:
								</div>
								<div class="text-gray-600 align-content-end fs-7">
									<a href="#" class="text-gray-600 text-hover-primary">{{ customer.phoneNumber }}
									</a>
								</div>
							</div>
							<div class="d-flex flex-row justify-content-between">
								<div class="fw-bold mt-5">
									Delivery Address:
								</div>
								<div class="text-gray-600 align-content-end fs-7">
									{{ customer.deliveryAddress }}
								</div>
							</div>
							<div class="d-flex flex-row justify-content-between">
								<div class="fw-bold mt-5">
									Joined Date:
								</div>
								<div class="text-gray-600 align-content-end fs-7">
									{{ customer.joinedDated }}
								</div>
							</div>
							<div class="d-flex flex-row justify-content-between">
								<div class="fw-bold mt-5">
									Last Order
								</div>
								<div class="text-gray-600 align-content-end fs-7">
									{{ customer.lastOrder }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="flex-lg-row-fluid ms-lg-15">
			<ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8">
				<li class="nav-item">
					<a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab"
						href="#kt_customer_view_overview_tab">Overview</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-active-primary pb-4" data-bs-toggle="tab"
						href="#kt_customer_view_overview_events_and_logs_tab">Personal Information</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-active-primary pb-4" data-kt-countup-tabs="true" data-bs-toggle="tab"
						href="#kt_customer_view_overview_statements">Advance Setting</a>
				</li>
				<li class="nav-item ms-auto">
					<a href="#" class="btn bt-red ps-7" data-kt-menu-trigger="click" data-kt-menu-attach="parent"
						data-kt-menu-placement="bottom-end">
						Delete Profile
					</a>
					<Dropdown3 />
				</li>
			</ul>
			<div id="myTabContent" class="tab-content">
				<div id="kt_customer_view_overview_tab" class="tab-pane fade show active" role="tabpanel">
					<OrderRecord cardClasses="mb-6 mb-xl-9" />

					<PaymentRecords cardClasses="mb-6 mb-xl-9" />

				</div>
				<div id="kt_customer_view_overview_events_and_logs_tab" class="tab-pane fade" role="tabpanel">
					<div>
						<PersonalInformation />
					</div>
					<div class="mt-5">
						<AddressBook cardClasses="mb-6 mb-xl-9" />
					</div>
				</div>
				<div id="kt_customer_view_overview_statements" class="tab-pane fade" role="tabpanel">

					<SecurityDetails />
					<PaymentMethods cardClasses="mb-6 mb-xl-9" />
				</div>
			</div>
		</div>
	</div>
	<NewCardModal />
</template>

<script lang="ts">
import AddressBook from '@/components/customers/cards/overview/AddressBook.vue'
import OrderRecord from '@/components/customers/cards/overview/OrderRecord.vue'
import PaymentRecords from '@/components/customers/cards/overview/PaymentRecords.vue'
import PaymentMethods from '@/components/customers/cards/paymentMethods/PaymentMethods.vue'
import SecurityDetails from '@/components/customers/cards/securityDetails/SecurityDetails.vue'
import Dropdown3 from '@/components/dropdown/Dropdown3.vue'
import NewCardModal from '@/components/modals/forms/NewCardModal.vue'
import PersonalInformation from '@/components/personalInformation/PersonalInformation.vue'
import { getAssetPath } from '@/core/helpers/assets'
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: 'CustomerProfile',
	components: {
		PaymentRecords,
		Dropdown3,
		NewCardModal,
		OrderRecord,
		PersonalInformation,
		SecurityDetails,
		AddressBook,
		PaymentMethods
	},
	setup() {
		const customer = ref({
			name: 'Ava Green',
			email: 'example@example.com',
			id: '#C5467577',
			phoneNumber: '+1 (555) 123-4567',
			deliveryAddress: '101 Collin Street Melbourne 3000  VIC Australia',
			joinedDated: '10 Nov 2024',
			lastOrder: '#234565',
			totalOrder: 14,
			totalPayment: 1566
		})
		return {
			getAssetPath,
			customer,
		}
	},
})
</script>
