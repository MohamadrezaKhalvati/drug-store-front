<template>
	<div class="card" :class="widgetClasses">
		<div class="card-header border-0 pt-5 ">
			<div class="d-flex flex-row justify-content-between  w-100">
				<div class="card-title">
					<div class="d-flex align-items-center position-relative my-1">
						<KTIcon icon-name="magnifier" icon-class="fs-1 position-absolute ms-6" />
						<input v-model="search" type="text"
							class="form-control form-control-solid w-250px ps-15 bg-input" placeholder="Search Order"
							@input="searchItems()">
					</div>
				</div>
				<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
					<a href="#" class="btn  btn-light-primary me-3" data-bs-toggle="modal"
						data-bs-target="#Order-Filter-Modal">
						Filter
					</a>
					<router-link :to="'/order/add'" class="menu-link px-3">
						<span class="btn bt-blue-dark">
							Add Order
						</span>
					</router-link>
				</div>
			</div>
			<div class="card-body py-3">
				<div class="table-responsive">
					<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
						<thead>
							<tr>
								<th class="w-25px">
									<div class="form-check form-check-sm form-check-custom form-check-solid">
										<input class="form-check-input" type="checkbox" @change="
											checkedRows.length === 6
												? (checkedRows.length = 0)
												: (checkedRows = [0, 1, 2, 3, 4, 5])
											">
									</div>
								</th>
								<th class="min-w-100px">
									Order ID
								</th>
								<th class="min-w-100px text-center">
									Customer
								</th>
								<th class="min-w-100px text-center">
									Status
								</th>
								<th class="min-w-100px">
									Total Price
								</th>
								<th class="min-w-100px">
									Date Added
								</th>
								<th class="min-w-100px text-center">
									Action
								</th>
							</tr>
						</thead>

						<tbody>
							<template v-for="(item, index) in list" :key="index">
								<tr>
									<td>
										<div class="form-check form-check-sm form-check-custom form-check-solid ">
											<input v-model="checkedRows" class="form-check-input widget-9-check"
												type="checkbox" :value="index">
										</div>
									</td>

									<td>
										<span data-bs-toggle="modal" data-bs-target="#Order-Detail-modal"
											class=" fw-semibold text-hover-primary d-block fs-7">{{ item.id
											}}</span>
									</td>
									<td>
										<div class="d-flex align-items-center justify-content-center">
											<div class="d-flex justify-content-start flex-row">
												<div class="symbol symbol-45px me-5 symbol-circle">
													<img :src="item.image" alt="">
												</div>
												<span
													class=" d-flex align-items-center text-gray-900  text-hover-primary fs-6">{{
														item.customer }}</span>

											</div>
										</div>
									</td>
									<td>
										<span class="text-gray-900 fs-7 d-block  badge badge-success mx-10">
											{{ item.status }}
										</span>
									</td>
									<td class="text-end">
										<div class="d-flex flex-column w-100 me-2">
											<div class="d-flex flex-stack mb-2">
												<span class=" me-2 fs-7   text-gray-900">
													${{ item.totalPrice }}
												</span>
											</div>
										</div>
									</td>

									<td>
										<span class="text-gray-900  d-block
											 fs-6">{{
												item.dateJoined }}</span>
									</td>
									<td>
										<a href="#" class="btn btn-sm  bt-blue-light" data-kt-menu-trigger="click"
											data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
											Action
											<KTIcon icon-name="down" icon-class="fs-3" />
										</a>
										<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
											data-kt-menu="true">
											<div class="menu-item px-3">
												<router-link to="" class="menu-link px-3">
													Edit
												</router-link>
											</div>
											<div class="menu-item px-3">
												<a class="menu-link px-3">Delete</a>
											</div>
										</div>
									</td>
								</tr>
							</template>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<OrderDetailModal />

	<OrderFIlterModal />
</template>

<script lang="ts">
import OrderDetailModal from '@/components/modals/forms/OrderDetail.vue';
import OrderFIlterModal from '@/components/modals/forms/OrderFIlterModal.vue';
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'OrderList',
	components: { OrderDetailModal, OrderFIlterModal },
	props: {
		widgetClasses: {
			type: String, required: false, default: ''
		},
	},
	setup() {
		const checkedRows = ref([])
		const search = ref('')


		const list = ref([
			{
				id: '#2345634587',
				customer: 'James Madison',
				status: 'Shipped',
				totalPrice: '267.00',
				dateJoined: '05/09/2024',
				image: getAssetPath('media/avatars/300-14.jpg'),
			},
			{
				id: '#2345634587',
				customer: 'James Madison',
				status: 'Shipped',
				totalPrice: '267.00',
				dateJoined: '05/09/2024',
				image: getAssetPath('media/avatars/300-14.jpg'),
			},
			{
				id: '#2345634587',
				customer: 'James Madison',
				status: 'Shipped',
				totalPrice: '267.00',
				dateJoined: '05/09/2024',
				image: getAssetPath('media/avatars/300-14.jpg'),
			},
			{
				id: '#2345634587',
				customer: 'James Madison',
				status: 'Shipped',
				totalPrice: '267.00',
				dateJoined: '05/09/2024',
				image: getAssetPath('media/avatars/300-14.jpg'),
			},
			{
				id: '#2345634587',
				customer: 'James Madison',
				status: 'Shipped',
				totalPrice: '267.00',
				dateJoined: '05/09/2024',
				image: getAssetPath('media/avatars/300-14.jpg'),
			},
			{
				id: '#2345634587',
				customer: 'James Madison',
				status: 'Shipped',
				totalPrice: '267.00',
				dateJoined: '05/09/2024',
				image: getAssetPath('media/avatars/300-14.jpg'),
			},
			{
				id: '#2345634587',
				customer: 'James Madison',
				status: 'Shipped',
				totalPrice: '267.00',
				dateJoined: '05/09/2024',
				image: getAssetPath('media/avatars/300-14.jpg'),
			},
		])
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
	}


})
</script>
