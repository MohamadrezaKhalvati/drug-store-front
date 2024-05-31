<template>
	<div class="row g-5 g-xl-10 mb-5 mb-xl-10">
		<div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
			<IncomeStasictics className="h-md-50 mb-5 mb-xl-10" :chartSize="70" />
			<OrderThisMonth widget-classes=" mb-xl-8" title="Order This Month" description="1476" progress="69%"
				color="success" />
		</div>
		<div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">

			<Registrationstatistics className="h-md-50 mb-5 mb-xl-10" :icon="false" stats="2.3K"
				description="New Customer This Month" labelColor="dark" textColor="gray-300" />

			<AverageDailySales widgetClasses=" mb-xl-8" :height="100" />
		</div>

		<div class="col-xxl-6">
			<SalesThisMonth widgetClasses="h-md-100" />
		</div>
	</div>
	<div class="row g-5 g-xl-10 mb-5 mb-xl-10">
		<div class="col-xl-8">
			<ProductOrders />
		</div>
		<div class="col-xl-4">
			<TopUsers widgetClasses="mb-xl-8" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Registrationstatistics from '@/components/dashboard-default-widgets/Registrationstatistics.vue'
import IncomeStasictics from '@/components/dashboard-default-widgets/IncomeStasictics.vue'
import ProductOrders from '@/components/dashboard-default-widgets/ProductOrders.vue'
import SalesThisMonth from '@/components/widgets/charts/SalesThisMonth.vue'
import AverageDailySales from '@/components/widgets/charts/AverageDailySales.vue'
import TopUsers from '@/components/widgets/lists/TopUsers.vue'
import OrderThisMonth from '@/components/widgets/statsistics/OrderThisMonth.vue'
export default defineComponent({
	name: 'MainDashboard',
	components: {
		AverageDailySales,
		Registrationstatistics,
		IncomeStasictics,
		ProductOrders,
		SalesThisMonth,
		TopUsers,
		OrderThisMonth
	},
	setup() {
		return {

		}
	},
})
</script>
