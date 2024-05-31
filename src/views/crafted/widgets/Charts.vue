<template>
	<!--begin::Row-->
	<div class="row g-5 g-xl-8">
		<div class="col-xl-6">
			<AverageDailySales widget-classes="card-xl-stretch mb-xl-8" :height="400"></AverageDailySales>
		</div>
		<div class="col-xl-6">
			<ChartsWidget2 widget-classes="card-xl-stretch mb-xl-8" :height="400"></ChartsWidget2>
		</div>
	</div>
	<!--end::Row-->

	<!--begin::Row-->
	<div class="row g-5 g-xl-8">
		<div class="col-xl-6">
			<SalesThisMonth widget-classes="card-xl-stretch mb-xl-8"></SalesThisMonth>
		</div>
		<div class="col-xl-6">
			<ChartsWidget4 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget4>
		</div>
	</div>
	<!--end::Row-->

	<!--begin::Row-->
	<div class="row g-5 g-xl-8">
		<div class="col-xl-6">
			<ChartsWidget5 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget5>
		</div>
		<div class="col-xl-6">
			<ChartsWidget6 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget6>
		</div>
	</div>
	<!--end::Row-->

	<!--begin::Row-->
	<div class="row g-5 g-xl-8">
		<div class="col-xl-6">
			<ChartsWidget7 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget7>
		</div>
		<div class="col-xl-6">
			<ChartsWidget8 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget8>
		</div>
	</div>
	<!--end::Row-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AverageDailySales from "@/components/widgets/charts/AverageDailySales.vue";
import ChartsWidget2 from "@/components/widgets/charts/Widget2.vue";
import SalesThisMonth from "@/components/widgets/charts/SalesThisMonth.vue";
import ChartsWidget4 from "@/components/widgets/charts/Widget4.vue";
import ChartsWidget5 from "@/components/widgets/charts/Widget5.vue";
import ChartsWidget6 from "@/components/widgets/charts/Widget6.vue";
import ChartsWidget7 from "@/components/widgets/charts/Widget7.vue";
import ChartsWidget8 from "@/components/widgets/charts/Widget8.vue";

export default defineComponent({
	name: "widgets-chart",
	components: {
		AverageDailySales,
		ChartsWidget2,
		SalesThisMonth,
		ChartsWidget4,
		ChartsWidget5,
		ChartsWidget6,
		ChartsWidget7,
		ChartsWidget8,
	},
});
</script>
