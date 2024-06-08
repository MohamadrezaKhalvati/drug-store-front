<template>
	<div class="card" :class="widgetClasses">
		<div class="card-header border-0 pt-5 ">
			<div class="d-flex flex-row justify-content-between  w-100">
				<div class="card-title">
					<div class="d-flex align-items-center position-relative my-1">
						<KTIcon icon-name="magnifier" icon-class="fs-1 position-absolute ms-6" />
						<input v-model="search" type="text" class="form-control form-control-solid w-250px ps-15"
							placeholder="Search Order" @input="searchItems()">
					</div>
				</div>
				<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
					<a href="#" class="btn btn-sm btn-light-primary me-2" data-bs-toggle="modal"
						data-bs-target="#kt_modal_invite_friends">
						Filter
					</a>
					<a href="#" class="btn btn-sm btn-light-primary" data-bs-toggle="modal"
						data-bs-target="#kt_modal_invite_friends">
						Add Order
					</a>
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
								<th class="min-w-100px">
									Order ID
								</th>
								<th class="min-w-100px text-center">
									Customer
								</th>
								<th class="min-w-100px">
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
										<span class="text-muted fw-semibold text-muted d-block fs-7">{{ item.id
											}}</span>
									</td>
									<td>
										<div class="d-flex align-items-center   justify-content-center">
											<div class="d-flex justify-content-start flex-row">
												<div class="symbol symbol-45px me-5">
													<img :src="item.image" alt="">
												</div>
												<a href="#" class="text-gray-900 fw-bold text-hover-primary fs-6">{{
													item.customer }}</a>

											</div>
										</div>
									</td>
									<td>
										<a href="#" class="text-gray-900 fw-bold text-hover-primary d-block fs-6">
											{{ item.status }}
										</a>
									</td>
									<td class="text-end">
										<div class="d-flex flex-column w-100 me-2">
											<div class="d-flex flex-stack mb-2">
												<span class=" me-2 fs-7  fw-bold">
													${{ item.totalPrice }}
												</span>
											</div>
										</div>
									</td>

									<td>
										<a href="#" class="text-gray-900 fw-bold text-hover-primary d-block fs-6">{{
											item.dateJoined }}</a>
									</td>
									<td>
										<div class="d-flex justify-content-center">
											<a href="#" class="btn btn-sm btn-light-primary" data-bs-toggle="modal"
												data-bs-target="#kt_modal_invite_friends ">
												Action
												<KTIcon icon-name="down" icon-class="fs-3" />
											</a>
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
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'OrderList',
	components: {},
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
