<template>
	<div :class="`card pt-4 ${cardClasses}`">
		<div class="card-header border-0">
			<div class="card-title">
				<h2 class="fw-bold mb-0">
					Address Book
				</h2>
			</div>

			<div class="card-toolbar">
				<a href="#" class="btn btn-sm btn-flex bt-blue-dark" data-bs-toggle="modal"
					data-bs-target="#kt_modal_new_card">
					<KTIcon icon-name="plus-square" icon-class="fs-3" />
					Add New Address
				</a>
			</div>
		</div>

		<div id="kt_customer_view_payment_method" class="card-body pt-0">

			<div class="py-0" data-kt-customer-payment-method="row">

				<div class="py-3 d-flex flex-stack flex-wrap">

					<div class="d-flex align-items-center collapsible rotate collapsed" data-bs-toggle="collapse"
						role="button" aria-expanded="false">

						<div class="me-3">
							<div class="d-flex align-items-center">
								<div class="text-gray-800 fw-bold">
									Home
								</div>
								<div class="badge badge-light-primary ms-20">
									Default Address
								</div>
							</div>
							<div class="text-muted">
								101 Collin Street
							</div>
						</div>
					</div>

					<div class="d-flex my-3 ms-9">
						<a class="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal"
							data-bs-target="#kt_modal_new_card">
							<span data-bs-toggle="tooltip" data-bs-trigger="hover" title=""
								data-bs-original-title="Edit">
								<KTIcon icon-name="pencil" icon-class="fs-3" />
							</span>
						</a>
						<a class="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="tooltip"
							title="" data-kt-customer-payment-method="delete" data-bs-original-title="Delete">
							<KTIcon icon-name="trash" icon-class="fs-3" />
						</a>
						<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3"
							data-kt-menu="true">
							<div class="menu-item px-3">
								<a href="#" class="menu-link px-3" data-kt-payment-mehtod-action="set_as_primary">Set as
									Primary</a>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div class="separator separator-dashed" />
			<div class="py-0" data-kt-customer-payment-method="row">
				<div class="py-3 d-flex flex-stack flex-wrap">
					<div class="d-flex align-items-center collapsible rotate collapsed" data-bs-toggle="collapse"
						role="button" aria-expanded="false" aria-controls="kt_customer_view_payment_method_2">

						<div class="me-3">
							<div class="d-flex align-items-center">
								<div class="text-gray-800 fw-bold">
									Home
								</div>
							</div>
							<div class="text-muted">
								101 Collin Street
							</div>
						</div>
					</div>

					<div class="d-flex my-3 ms-9">
						<a href="#" class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
							data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
							<span data-bs-toggle="tooltip" data-bs-trigger="hover" title=""
								data-bs-original-title="Edit">
								<KTIcon icon-name="pencil" icon-class="fs-3" />
							</span>
						</a>
						<a href="#" class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
							data-bs-toggle="tooltip" title="" data-kt-customer-payment-method="delete"
							data-bs-original-title="Delete">
							<KTIcon icon-name="trash" icon-class="fs-3" />
						</a>
						<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3"
							data-kt-menu="true">

							<div class="menu-item px-3">
								<a href="#" class="menu-link px-3" data-kt-payment-mehtod-action="set_as_primary">Set as
									Primary</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="separator separator-dashed" />
			<div class="py-0" data-kt-customer-payment-method="row">
				<div class="py-3 d-flex flex-stack flex-wrap">
					<div class="d-flex align-items-center collapsible collapsed rotate" data-bs-toggle="collapse"
						href="#kt_customer_view_payment_method_3" role="button" aria-expanded="false"
						aria-controls="kt_customer_view_payment_method_3">

						<div class="me-3">
							<div class="d-flex align-items-center">
								<div class="text-gray-800 fw-bold">
									Home
								</div>
							</div>
							<div class="text-muted">
								101 Collin Street
							</div>
						</div>
					</div>

					<div class="d-flex my-3 ms-9">
						<a href="#" class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
							data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
							<span data-bs-toggle="tooltip" data-bs-trigger="hover" title=""
								data-bs-original-title="Edit">
								<KTIcon icon-name="pencil" icon-class="fs-3" />
							</span>
						</a>

						<a href="#" class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
							data-bs-toggle="tooltip" title="" data-kt-customer-payment-method="delete"
							data-bs-original-title="Delete">
							<KTIcon icon-name="trash" icon-class="fs-3" />
						</a>



						<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3"
							data-kt-menu="true">

							<div class="menu-item px-3">
								<a href="#" class="menu-link px-3" data-kt-payment-mehtod-action="set_as_primary">Set as
									Primary</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'AddressBook',
	components: {},
	props: {
		cardClasses: {
			type: String,
			required: false,
			default: ''
		},
	},
	setup() {
		return {
			getAssetPath,
		}
	},
})
</script>
