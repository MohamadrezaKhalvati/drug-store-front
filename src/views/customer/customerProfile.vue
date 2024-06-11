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
							Max Smith
						</a>
						<div class="fs-5 fw-semibold text-muted mb-6">
							Software Enginer
						</div>
						<div class="d-flex flex-wrap flex-center">
							<div class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
								<div class="fs-4 fw-bold text-gray-700">
									<span class="w-75px">6,900</span>
									<KTIcon icon-name="arrow-up" icon-class="fs-3 text-success" />
								</div>
								<div class="fw-semibold text-muted">
									Earnings
								</div>
							</div>
							<div class="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
								<div class="fs-4 fw-bold text-gray-700">
									<span class="w-50px">130</span>
									<KTIcon icon-name="arrow-down" icon-class="fs-3 text-danger" />
								</div>
								<div class="fw-semibold text-muted">
									Tasks
								</div>
							</div>
							<div class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
								<div class="fs-4 fw-bold text-gray-700">
									<span class="w-50px">500</span>
									<KTIcon icon-name="arrow-up" icon-class="fs-3 text-success" />
								</div>
								<div class="fw-semibold text-muted">
									Hours
								</div>
							</div>
						</div>
					</div>
					<div class="d-flex flex-stack fs-4 py-3">
						<div class="fw-bold rotate collapsible" data-bs-toggle="collapse"
							href="#kt_customer_view_details" role="button" aria-expanded="false"
							aria-controls="kt_customer_view_details">
							Details
							<span class="ms-2 rotate-180">
								<KTIcon icon-name="down" icon-class="fs-3" />
							</span>
						</div>

						<span data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit customer details">
							<a href="#" class="btn btn-sm btn-light-primary" data-bs-toggle="modal"
								data-bs-target="#kt_modal_update_customer">
								Edit
							</a>
						</span>
					</div>
					<div class="separator separator-dashed my-3" />
					<div id="kt_customer_view_details" class="collapse show">
						<div class="py-5 fs-6">
							<div class="badge badge-light-info d-inline">
								Premium user
							</div>
							<div class="fw-bold mt-5">
								Account ID
							</div>
							<div class="text-gray-600">
								ID-45453423
							</div>
							<div class="fw-bold mt-5">
								Billing Email
							</div>
							<div class="text-gray-600">
								<a href="#" class="text-gray-600 text-hover-primary">info@keenthemes.com</a>
							</div>
							<div class="fw-bold mt-5">
								Billing Address
							</div>
							<div class="text-gray-600">
								101 Collin Street, <br>Melbourne 3000 VIC <br>Australia
							</div>
							<div class="fw-bold mt-5">
								Language
							</div>
							<div class="text-gray-600">
								English
							</div>
							<div class="fw-bold mt-5">
								Upcoming Invoice
							</div>
							<div class="text-gray-600">
								54238-8693
							</div>
							<div class="fw-bold mt-5">
								Tax ID
							</div>
							<div class="text-gray-600">
								TX-8674
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
					<a href="#" class="btn btn-primary ps-7" data-kt-menu-trigger="click" data-kt-menu-attach="parent"
						data-kt-menu-placement="bottom-end">
						Actions
						<KTIcon icon-name="down" icon-class="fs-2 me-0" />
					</a>
					<Dropdown3 />
				</li>
			</ul>
			<div id="myTabContent" class="tab-content">
				<div id="kt_customer_view_overview_tab" class="tab-pane fade show active" role="tabpanel">
					<PaymentRecords card-classes="mb-6 mb-xl-9" />

					<PaymentMethods card-classes="mb-6 mb-xl-9" />

					<CreditBalance card-classes="mb-6 mb-xl-9" />

					<Invoices card-classes="mb-6 mb-xl-9" />
				</div>
				<div id="kt_customer_view_overview_events_and_logs_tab" class="tab-pane fade" role="tabpanel">
					<Logs card-classes="mb-6 mb-xl-9" />
					<Events card-classes="mb-6 mb-xl-9" />
				</div>
				<div id="kt_customer_view_overview_statements" class="tab-pane fade" role="tabpanel">
					<Earnings card-classes="mb-6 mb-xl-9" />
					<Statement card-classes="mb-6 mb-xl-9" />
				</div>
			</div>
		</div>
	</div>
	<NewCardModal />
</template>

<script lang="ts">
import CreditBalance from '@/components/customers/cards/overview/CreditBalance.vue'
import Invoices from '@/components/customers/cards/overview/Invoices.vue'
import PaymentMethods from '@/components/customers/cards/overview/PaymentMethods.vue'
import PaymentRecords from '@/components/customers/cards/overview/PaymentRecords.vue'
import Dropdown3 from '@/components/dropdown/Dropdown3.vue'
import NewCardModal from '@/components/modals/forms/NewCardModal.vue'
import { getAssetPath } from '@/core/helpers/assets'
import { defineComponent } from 'vue'

import Events from '@/components/customers/cards/events-and-logs/Events.vue'
import Logs from '@/components/customers/cards/events-and-logs/Logs.vue'

import Earnings from '@/components/customers/cards/statments/Earnings.vue'
import Statement from '@/components/customers/cards/statments/Statement.vue'

export default defineComponent({
	name: 'CustomerProfile',
	components: {
		PaymentRecords,
		PaymentMethods,
		CreditBalance,
		Invoices,
		Events,
		Logs,
		Earnings,
		Statement,
		Dropdown3,
		NewCardModal,
	},
	setup() {
		return {
			getAssetPath,
		}
	},
})
</script>
