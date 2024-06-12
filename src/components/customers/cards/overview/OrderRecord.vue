<template>
	<div :class="`card pt-4 ${cardClasses}`">
		<div class="card-header border-0">
			<div class="card-title d-flex flex-column">
				<h2>Order Record</h2>
				<span class="fs-7 mt-2 text-muted ">What you Buys These Days</span>
			</div>

			<div class="card-toolbar">
				<button type="button" class="btn btn-sm btn-flex btn-light-primary" data-bs-toggle="modal"
					data-bs-target="#kt_modal_add_payment">
					<KTIcon icon-name="plus-square" icon-class="fs-3" />
					Add payment
				</button>
			</div>
		</div>

		<div class="card-body pt-0 pb-5">
			<Datatable :header="tableHeader" :data="tableData" :items-per-page="5"
				:items-per-page-dropdown-enabled="false">
				<template #orderId="{ row: payment }">
					{{ payment.orderId }}
				</template>
				<template #status="{ row: payment }">
					<span :class="`badge badge-light-${payment.status.state}`">{{
						payment.status.label
					}}</span>
				</template>
				<template #totalPrice="{ row: payment }">
					{{ payment.totalPrice }}
				</template>
				<template #date="{ row: payment }">
					{{ payment.date }}
				</template>
				<template #actions="{ row: payment }">
					<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click"
						data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">Actions
						<KTIcon icon-name="down" icon-class="fs-5 m-0" />
					</a>
					<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
						data-kt-menu="true">
						<div class="menu-item px-3">
							<router-link to="/apps/customers/customer-details" class="menu-link px-3">
								View
							</router-link>
						</div>

						<div class="menu-item px-3">
							<a class="menu-link px-3" @click="deleteRecord(payment.invoice)">Delete</a>
						</div>
					</div>
				</template>
			</Datatable>
		</div>
	</div>
</template>

<script lang="ts">
import Datatable from '@/components/kt-datatable/KTDataTable.vue';
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'PaymentRecords',
	components: {
		Datatable,
	},
	props: {
		cardClasses: {
			type: String,
			required: false,
			default: ''
		},
	},
	setup() {
		const tableHeader = ref([
			{
				columnName: 'Order ID',
				columnLabel: 'orderId',
				sortEnabled: false,
			},
			{
				columnName: 'Status',
				columnLabel: 'status',
				sortingField: 'status.label',
				sortEnabled: false,
			},
			{
				columnName: 'Total Price',
				columnLabel: 'totalPrice',
				sortEnabled: false,
			},
			{
				columnName: 'Date Added',
				columnLabel: 'date',
				sortEnabled: false,
			},
			{
				columnName: 'Actions',
				columnLabel: 'actions',
				sortEnabled: false,
			},
		])
		const tableData = ref([
			{
				orderId:
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
					'-' +
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
				description: 'Payment for invoice',
				totalPrice: '$880.00',
				status: {
					label: 'Pending',
					state: 'warning',
				},
				date: '21 Oct 2020, 5:54 pm',
			},
			{
				orderId:
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
					'-' +
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
				description: 'Monthly utilites',
				totalPrice: '$7,650.00',
				status: {
					label: 'Successful',
					state: 'success',
				},
				date: '19 Oct 2020, 7:32 am',
			},
			{
				orderId:
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
					'-' +
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
				description: 'Payment for invoice',
				totalPrice: '$375.00',
				status: {
					label: 'Successful',
					state: 'success',
				},
				date: '23 Sep 2020, 12:38 am',
			},
			{
				orderId:
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
					'-' +
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
				description: 'Hosting Fees',
				totalPrice: '$129.00',
				status: {
					label: 'Successful',
					state: 'success',
				},
				date: '11 Sep 2020, 3:18 pm',
			},
			{
				orderId:
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
					'-' +
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
				description: 'Marketing automation',
				totalPrice: '$450.00',
				status: {
					label: 'Rejected',
					state: 'danger',
				},
				date: '03 Sep 2020, 1:08 am',
			},
			{
				orderId:
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
					'-' +
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
				description: 'Sales injection',
				totalPrice: '$8,700.00',
				status: {
					label: 'Pending',
					state: 'warning',
				},
				date: '01 Sep 2020, 4:58 pm',
			},
			{
				orderId:
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
					'-' +
					Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
				description: 'Payment for invoice',
				amount: '$1,200.00',
				status: {
					label: 'Successful',
					state: 'success',
				},
				date: '14 Dec 2020, 8:43 pm',
			},
		])

		function deleteRecord(invoice: string) {
			for (let i = 0; i < tableData.value.length; i++) {
				if (tableData.value[i].orderId === invoice) {
					tableData.value.splice(i, 1)
				}
			}
		}

		return { tableHeader, tableData, deleteRecord, getAssetPath }
	},
})
</script>
