<template>
	<div class="card" :class="widgetClasses">
		<div class="card-header border-0 pt-5 ">
			<div class="d-flex flex-row justify-content-between  w-100">
				<div class="card-title">
					<div class="d-flex align-items-center position-relative my-1">
						<KTIcon icon-name="magnifier" icon-class="fs-1 position-absolute ms-6" />
						<input v-model="search" type="text" class="form-control form-control-solid w-250px ps-15"
							placeholder="Search Customers" @input="searchItems()">
					</div>
				</div>
				<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
					<a href="#" class="btn  btn-light-primary me-2" data-bs-toggle="modal"
						data-bs-target="#kt_modal_invite_friends">
						Filter
					</a>
					<button type="button" class="btn bt-blue-dark" data-bs-toggle="modal"
						data-bs-target="#kt_modal_add_customer">
						Add Customer
					</button>
				</div>

			</div>

			<div class="card-body py-3">
				<div class="table-responsive">
					<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
						<thead>
							<tr class="fw-bold text-muted">
								<th class="w-25px">
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" @change="
											checkedRows.length === 6
												? (checkedRows.length = 0)
												: (checkedRows = [0, 1, 2, 3, 4, 5])
											">
									</div>
								</th>
								<th class="min-w-150px">
									User
								</th>
								<th class="min-w-120px">
									Email
								</th>
								<th class="min-w-120px">
									Phone Number
								</th>
								<th class="min-w-100px ">
									Last login
								</th>
								<th class="min-w-140px">
									Create Date
								</th>
								<th class="min-w-120px text-start">
									Action
								</th>
							</tr>
						</thead>

						<tbody>
							<template v-for="(item, index) in list" :key="index">
								<tr>
									<td>
										<div class="form-check form-check-sm form-check-custom form-check-solid">
											<input v-model="checkedRows" class="form-check-input widget-9-check"
												type="checkbox" :value="index">
										</div>
									</td>
									<router-link :to="`/customers/customer-detail`" class="menu-link px-3">
										<td>
											<div class="d-flex align-items-center">
												<div class="symbol symbol-45px me-5">
													<img :src="item.image" alt="">
												</div>
												<div class="d-flex justify-content-start flex-column">
													<a href="#" class="text-gray-900 fw-bold text-hover-primary fs-6">{{
														item.name }}</a>
													<span class="text-muted fw-semibold text-muted d-block fs-7">{{
														item.id
													}}</span>
												</div>
											</div>
										</td>
									</router-link>
									<td>
										<a href="#" class="text-gray-900 fw-bold text-hover-primary d-block fs-6">
											{{ item.email }}
										</a>
									</td>
									<td class="text-end">
										<div class="d-flex flex-column w-100 me-2">
											<div class="d-flex flex-stack mb-2">
												<span class=" me-2 fs-7  fw-bold">
													{{ item.phoneNumber }}
												</span>
											</div>
										</div>
									</td>
									<td>
										<a href="#"
											class="text-gray-900 fw-bold text-hover-primary d-block fs-6 bg-light w-fit">{{
												item.lastLogin }}</a>
									</td>
									<td>
										<a href="#" class="text-gray-900 fw-bold text-hover-primary d-block fs-6">{{
											item.dateJoined }}</a>
									</td>
									<td>
										<a href="#" class="btn btn-sm btn-light-primary" data-bs-toggle="modal"
											data-bs-target="#kt_modal_invite_friends ">
											Action
											<KTIcon icon-name="down" icon-class="fs-3" />
										</a>
									</td>
								</tr>
							</template>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<AddCustomerModal />
</template>

<script lang="ts">
// import { MenuComponent } from '@/assets/ts/components';
// import type { ICustomer } from '@/core/data/customers';
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent, ref } from 'vue';
import AddCustomerModal from '../modals/forms/AddCustomerModal.vue';
export default defineComponent({
	name: 'CustomerList',
	components: {
		AddCustomerModal
	},
	props: {
		widgetClasses: {
			type: String, required: false, default: ''
		},
	},
	setup() {
		const checkedRows = ref<Array<number>>([])
		const list = ref([
			{
				id: '#S674837',
				image: getAssetPath('media/avatars/300-14.jpg'),
				name: 'Mehrshad Khalili',
				email: 'example@example.com',
				phoneNumber: '+1 (555) 123-4567',
				lastLogin: 'Yesterday',
				dateJoined: '2022/02/01'
			},
			{
				id: '#S674837',
				image: getAssetPath('media/avatars/300-14.jpg'),
				name: 'Mehrshad Khalili',
				email: 'example@example.com',
				phoneNumber: '+1 (555) 123-4567',
				lastLogin: 'Yesterday',
				dateJoined: '2022/02/01'
			},
			{
				id: '#S674837',
				image: getAssetPath('media/avatars/300-14.jpg'),
				name: 'Mehrshad Khalili',
				email: 'example@example.com',
				phoneNumber: '+1 (555) 123-4567',
				lastLogin: 'Yesterday',
				dateJoined: '2022/02/01'
			},
			{
				id: '#S674837',
				image: getAssetPath('media/avatars/300-14.jpg'),
				name: 'Mehrshad Khalili',
				email: 'example@example.com',
				phoneNumber: '+1 (555) 123-4567',
				lastLogin: 'Yesterday',
				dateJoined: '2022/02/01'
			},
			{
				id: '#S674837',
				image: getAssetPath('media/avatars/300-14.jpg'),
				name: 'Mehrshad Khalili',
				email: 'example@example.com',
				phoneNumber: '+1 (555) 123-4567',
				lastLogin: 'Yesterday',
				dateJoined: '2022/02/01'
			},
		])
		const search = ref<string>('')
		function searchItems() {
			// list.value.splice(0, list.value.length, ...initCustomers.value)
			// if (search.value !== '') {
			// 	let results: Array<ICustomer> = []
			// 	for (let j = 0; j < list.value.length; j++) {
			// 		if (searchingFunc(list.value[j], search.value)) {
			// 			results.push(list.value[j])
			// 		}
			// 	}
			// 	list.value.splice(0, list.value.length, ...results)
			// }
			// MenuComponent.reinitialization()
		}


		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		function searchingFunc(obj: any, value: string): boolean {
			for (let key in obj) {
				if (!Number.isInteger(obj[key]) && !(typeof obj[key] === 'object')) {
					if (obj[key].indexOf(value) != -1) {
						return true
					}
				}
			}
			return false
		}





		return {
			list,
			checkedRows,
			getAssetPath,
			searchItems,
			search
		}
	},
})
</script>
