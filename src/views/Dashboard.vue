<template>
	<div class="row g-5 g-xl-10 mb-5 mb-xl-10">

		<div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">

			<Widget3 className="h-md-50 mb-5 mb-xl-10" :chartSize="70" />

			<OrderThisMonth widget-classes=" mb-xl-8" title="Order This Month" description="1476" progress="69%"
				color="success">
			</OrderThisMonth>
		</div>

		<div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">

			<Widget2 className="h-md-50 mb-5 mb-xl-10" :icon="false" stats="2.3K" description="New Customer This Month"
				labelColor="dark" textColor="gray-300" />

			<AverageDailySales widgetClasses=" mb-xl-8" :height="100"></AverageDailySales>

		</div>

		<div class="col-xxl-6">
			<SalesThisMonth widgetClasses="h-md-100">

			</SalesThisMonth>
		</div>
	</div>

	<div class="row g-5 g-xl-10 mb-5 mb-xl-10">
		<div class="col-xl-8">

			<Widget10 className="h-md-100" />
		</div>

		<div class="col-xl-4">
			<TopUsers widget-classes="card-xl-stretch mb-xl-8"></TopUsers>
		</div>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets'
import { defineComponent } from 'vue'
import Widget1 from '@/components/dashboard-default-widgets/Widget1.vue'
import Widget2 from '@/components/dashboard-default-widgets/Widget2.vue'
import Widget3 from '@/components/dashboard-default-widgets/Widget3.vue'
import Widget4 from '@/components/dashboard-default-widgets/Widget4.vue'
import Widget5 from '@/components/dashboard-default-widgets/Widget5.vue'
import Widget8 from '@/components/dashboard-default-widgets/Widget8.vue'
import Widget9 from '@/components/dashboard-default-widgets/Widget9.vue'
import Widget10 from '@/components/dashboard-default-widgets/Widget10.vue'
import MixedWidget5 from '@/components/widgets/mixed/Widget5.vue'
import SalesThisMonth from "@/components/widgets/charts/SalesThisMonth.vue"
import AverageDailySales from "@/components/widgets/charts/AverageDailySales.vue"
import TopUsers from "@/components/widgets/lists/TopUsers.vue"
import OrderThisMonth from "@/components/widgets/statsistics/OrderThisMonth.vue";
export default defineComponent({
	name: 'MainDashboard',
	components: {
		AverageDailySales,
		Widget1,
		Widget2,
		Widget3,
		Widget4,
		Widget5,
		Widget8,
		Widget9,
		Widget10,
		MixedWidget5,
		SalesThisMonth,
		TopUsers,
		OrderThisMonth
	},
	setup() {
		return {
			getAssetPath,
		}
	},
})
</script>
