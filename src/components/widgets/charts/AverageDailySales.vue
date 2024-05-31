<template>
	<div class="card min-h-50" :class="widgetClasses">

		<div class="card-header pt-5 border-0">
			<div class="card-title d-flex flex-column">
				<div class="d-flex align-items-center">
					<span class="fs-4 fw-semibold text-gray-500 me-1 align-self-start">$</span>
					<span class="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">1,700</span>
					<span class="badge badge-light-success fs-base">
						<KTIcon icon-name="arrow-up" icon-class="fs-5 text-success ms-n1" />
						4.5%
					</span>
				</div>
				<span class="text-gray-500 pt-1 fw-semibold fs-6">Average daily Sales</span>
			</div>
		</div>

		<div class="">
			<apexchart ref="chartRef" type="bar" :options="chart" :series="series" :height="height"></apexchart>
		</div>
	</div>

</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onBeforeMount, ref, watch } from "vue";
import { useThemeStore } from "@/stores/theme";
import type { ApexOptions } from "apexcharts";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import type VueApexCharts from "vue3-apexcharts";

export default defineComponent({
	name: "AverageDailySales",
	props: {
		widgetClasses: String,
		height: Number,
	},
	components: {
		Dropdown1,
	},
	setup() {
		const chartRef = ref<typeof VueApexCharts | null>(null);
		const chart = ref<ApexOptions>({});
		const store = useThemeStore();

		const series = [
			{
				name: "Net Profit",
				data: [44, 55, 57, 56, 61, 58],
			},
		];

		const themeMode = computed(() => {
			return store.mode;
		});

		onBeforeMount(() => {
			Object.assign(chart.value, chartOptions());
		});

		const refreshChart = () => {
			if (!chartRef.value) {
				return;
			}

			chartRef.value.updateOptions(chartOptions());
		};

		watch(themeMode, () => {
			refreshChart();
		});

		return {
			chart,
			series,
			chartRef,
			getAssetPath,
		};
	},
});

const chartOptions = (): ApexOptions => {
	const labelColor = getCSSVariableValue("--bs-gray-500");
	const borderColor = getCSSVariableValue("--bs-gray-200");
	const baseColor = getCSSVariableValue("--bs-primary");
	const secondaryColor = getCSSVariableValue("--bs-gray-300");

	return {
		chart: {
			fontFamily: "inherit",
			type: "bar",
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "30%",
				borderRadius: 5,
			},
		},
		legend: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ["transparent"],
		},
		xaxis: {
			categories: ["", "", "", "", "", ""],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				style: {
					colors: labelColor,
					fontSize: "0px",
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: labelColor,
					fontSize: "0px",
				},
			},
		},
		fill: {
			opacity: 1,
		},
		states: {
			normal: {
				filter: {
					type: "none",
					value: 0,
				},
			},
			hover: {
				filter: {
					type: "none",
					value: 0,
				},
			},
			active: {
				allowMultipleDataPointsSelection: false,
				filter: {
					type: "none",
					value: 0,
				},
			},
		},
		tooltip: {
			style: {
				fontSize: "12px",
			},
			y: {
				formatter: function (val) {
					return "$" + val + " thousands";
				},
			},
		},
		colors: [baseColor, secondaryColor],
		grid: {
			borderColor: borderColor,
			strokeDashArray: 4,
			yaxis: {
				lines: {
					show: false,
				},
			},
		},
	};
};
</script>
