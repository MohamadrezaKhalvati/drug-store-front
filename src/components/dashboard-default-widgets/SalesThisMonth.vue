<template>
	<div :class="widgetClasses" class="card">
		<div class="card-header border-0 pt-5">
			<h3 class="card-title align-items-start flex-column">
				<span class="card-label fw-bold fs-1 mb-1">Sales this month</span>

				<span class="text-muted fw-semibold fs-5">users from all chanells</span>
			</h3>
		</div>


		<div class="card-header pt-5 border-0">
			<div class="card-title d-flex flex-column">
				<div class="d-flex align-items-center">
					<span class="fs-4 fw-semibold text-gray-500 me-1 align-self-start">$</span>
					<span class="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">21,780</span>
				</div>
			</div>
		</div>

		<div class="card-body">
			<apexchart ref="chartRef" type="area" :options="chart" :series="series" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref, watch } from 'vue'
import { useThemeStore } from '@/stores/theme'
import type { ApexOptions } from 'apexcharts'
import { getCSSVariableValue } from '@/assets/ts/_utils'
import type VueApexCharts from 'vue3-apexcharts'

export default defineComponent({
	name: 'SalesThisMonth',
	components: {},
	props: {
		widgetClasses: String,
	},
	setup() {
		const chartRef = ref<typeof VueApexCharts | null>(null)
		const chart = ref<ApexOptions>({})
		const store = useThemeStore()

		const series = [
			{
				name: 'Net Profit',
				data: [30, 40, 40, 90, 90, 70, 70],
			},
		]

		const themeMode = computed(() => {
			return store.mode
		})

		onBeforeMount(() => {
			Object.assign(chart.value, chartOptions())
		})

		function refreshChart() {
			if (!chartRef.value) {
				return
			}

			chartRef.value.updateOptions(chartOptions())
		}

		watch(themeMode, () => {
			refreshChart()
		})

		return {
			chart,
			series,
			chartRef,
		}
	},
})

function chartOptions(): ApexOptions {
	const labelColor = getCSSVariableValue('--bs-gray-500')
	const borderColor = getCSSVariableValue('--bs-gray-200')
	const baseColor = getCSSVariableValue('--bs-info')
	const lightColor = getCSSVariableValue('--bs-info-light')

	return {
		chart: {
			fontFamily: 'inherit',
			type: 'area',
			height: 350,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {},
		legend: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		fill: {
			type: 'solid',
			opacity: 1,
		},
		stroke: {
			curve: 'smooth',
			show: true,
			width: 3,
			colors: [baseColor],
		},
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				style: {
					colors: labelColor,
					fontSize: '12px',
				},
			},
			crosshairs: {
				position: 'front',
				stroke: {
					color: baseColor,
					width: 1,
					dashArray: 3,
				},
			},
			tooltip: {
				enabled: false,
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: labelColor,
					fontSize: '12px',
				},
			},
		},
		states: {
			normal: {
				filter: {
					type: 'none',
					value: 0,
				},
			},
			hover: {
				filter: {
					type: 'none',
					value: 0,
				},
			},
			active: {
				allowMultipleDataPointsSelection: false,
				filter: {
					type: 'none',
					value: 0,
				},
			},
		},
		tooltip: {
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function (val) {
					return '$' + val + ' thousands'
				},
			},
		},
		colors: [lightColor],
		grid: {
			borderColor: borderColor,
			strokeDashArray: 4,
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		markers: {
			strokeColors: baseColor,
			strokeWidth: 3,
		},
	}
}
</script>
