<template>
	<div class="card card-flush min-h-100" :class="className">
		<div class="card-header pt-7">
			<h3 class="card-title align-items-start flex-column">
				<span class="card-label fw-bold text-gray-800">Product Order</span>
				<span class="text-gray-500 mt-1 fw-semibold fs-6">Avg. 35 orders per day</span>
			</h3>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<table class="table table-row-dashed align-middle gs-0 gy-3 my-auto ">
					<thead>
						<tr class="fs-7 fw-bold text-gray-500 border-bottom-0">
							<th class="p-0 pb-3 min-w-50px text-start">Order id</th>
							<th class="p-0 pb-3 min-w-100px text-center">Customer</th>
							<th class="p-0 pb-3 min-w-100px text-end">Total Price</th>
							<th class="p-0 pb-3 min-w-175px text-center ">Date added</th>
							<th class="p-0 pb-3 w-50px text-center">Status</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="(row, i) in table" :key="i">
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="d-flex justify-content-start flex-column">
											<a href="#" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">{{
												row.id }}</a>
										</div>
									</div>
								</td>
								<td class="text-center pe-0">
									<span class="text-gray-600 fw-bold fs-6">{{ row.name }}</span>
								</td>
								<td class="text-end pe-0">
									<span v-if="row.icon" class="badge badge-light-success fs-base">
										<KTIcon icon-name="arrow-up" icon-class="fs-5 text-success ms-n1" />
										{{ row.statistics }} %
									</span>
									<span v-else class="badge badge-light-danger fs-base">
										<KTIcon icon-name="arrow-down" icon-class="fs-5 text-danger ms-n1" />
										{{ row.statistics }} %
									</span>
								</td>
								<td class="text-center">
									<span class="text-gray-600 fw-bold fs-6">{{ row.date }}</span>
								</td>
								<td class="text-center">
									<span :class="`badge py-3 px-4 fs-7  badge-light-${row.status.state}`">{{
										row.status.label }}</span>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
	name: "ProductOrders",
	components: {},
	props: {
		className: { type: String, required: false },
	},
	setup() {
		const table = [
			{
				id: "#YHU-868",
				name: "Mehrshad Khalili",
				statistics: "9.2",
				icon: true,
				date: "03/05/2024",
				chartColor: "success",
				status: {
					label: "Shipped",
					state: "success",
				},
			},
			{
				id: "#YHU-868",
				name: "Mehrshad Khalili",
				statistics: "0.4",
				icon: false,
				date: "03/05/2024",
				chartColor: "success",
				status: {
					label: "success",
					state: "danger",
				},
			},
			{
				id: "#YHU-868",
				name: "Mehrshad Khalili",
				statistics: "9.2",
				icon: true,
				date: "03/05/2024",
				chartColor: "success",
				status: {
					label: "Shipped",
					state: "success",
				},
			},
			{
				id: "#YHU-868",
				name: "Mehrshad Khalili",
				statistics: "9.2",
				icon: true,
				date: "03/05/2024",
				chartColor: "primary",
				status: {
					label: "Confirmed",
					state: "primary",
				},
			},
			{
				id: "#YHU-868",
				name: "Mehrshad Khalili",
				statistics: "0.4",
				icon: false,
				date: "03/05/2024",
				chartColor: "warning",
				status: {
					label: "Pending",
					state: "warning",
				},
			},
		];

		return {
			table,
			getAssetPath,
		};
	},
});
</script>
