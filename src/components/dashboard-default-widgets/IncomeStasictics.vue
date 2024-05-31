<template>
	<div class="card card-flush" :class="className">
		<div class="card-header pt-5">
			<div class="card-title d-flex flex-column">
				<div class="d-flex align-items-center">
					<span class="fs-4 fw-semibold text-gray-500 me-1 align-self-start">$</span>
					<span class="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">69,700</span>
					<span class="badge badge-light-success fs-base">
						<KTIcon icon-name="arrow-up" icon-class="fs-5 text-success ms-n1" />
						4.2%
					</span>
				</div>

				<span class="text-gray-500 pt-1 fw-semibold fs-6">Last month Earning</span>
			</div>
		</div>

		<div class="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
			<div class="d-flex flex-center me-5 pt-2">
				<div id="kt_card_widget_17_chart" :style="{
					minWidth: `${chartSize}px`,
					minHeight: `${chartSize}px`,
				}" :data-kt-size="chartSize" :data-kt-line="11" />
			</div>

			<div class="d-flex flex-column content-justify-center flex-row-fluid">
				<div class="d-flex fw-semibold align-items-center">
					<div class="bullet w-8px h-3px rounded-2 bg-success me-3" />

					<div class="text-gray-500 flex-grow-1 me-4">
						medicine
					</div>

					<div class="fw-bolder text-gray-700 text-xxl-end">
						$7,660
					</div>
				</div>

				<div class="d-flex fw-semibold align-items-center my-3">
					<div class="bullet w-8px h-3px rounded-2 bg-primary me-3" />

					<div class="text-gray-500 flex-grow-1 me-4">
						Cosmetics
					</div>

					<div class="fw-bolder text-gray-700 text-xxl-end">
						$2,820
					</div>
				</div>

				<div class="d-flex fw-semibold align-items-center">
					<div class="bullet w-8px h-3px rounded-2 me-3" style="background-color: #e4e6ef" />

					<div class="text-gray-500 flex-grow-1 me-4">
						Others
					</div>

					<div class="fw-bolder text-gray-700 text-xxl-end">
						$45,257
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets'
import { defineComponent, onMounted } from 'vue'
import { getCSSVariableValue } from '@/assets/ts/_utils'

export default defineComponent({
	name: 'IncomeStasictics',
	components: {},
	props: {
		className: { type: String, required: false },
		chartSize: { type: Number, required: true },
	},
	setup(props, { expose }) {
		function initChart() {
			expose()
			var el = document.getElementById('kt_card_widget_17_chart')

			if (!el) {
				return
			}

			var options = {
				size: el.getAttribute('data-kt-size')
					? parseInt(el.getAttribute('data-kt-size'))
					: 70,
				lineWidth: el.getAttribute('data-kt-line')
					? parseInt(el.getAttribute('data-kt-line'))
					: 11,
				rotate: el.getAttribute('data-kt-rotate')
					? parseInt(el.getAttribute('data-kt-rotate'))
					: 145,
				//percent:  el.getAttribute('data-kt-percent') ,
			}

			var canvas = document.createElement('canvas')
			var span = document.createElement('span')

			var ctx = canvas.getContext('2d')
			canvas.width = canvas.height = options.size

			el.appendChild(span)
			el.appendChild(canvas)

			ctx.translate(options.size / 2, options.size / 2) // change center
			ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI) // rotate -90 deg

			//imd = ctx.getImageData(0, 0, 240, 240);
			var radius = (options.size - options.lineWidth) / 2

			function drawCircle(
				color: string,
				lineWidth: number,
				percent: number
			) {
				percent = Math.min(Math.max(0, percent || 1), 1)
				ctx.beginPath()
				ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false)
				ctx.strokeStyle = color
				ctx.lineCap = 'round' // butt, round or square
				ctx.lineWidth = lineWidth
				ctx.stroke()
			}

			// Init
			drawCircle('#E4E6EF', options.lineWidth, 100 / 100)
			drawCircle(
				getCSSVariableValue('--bs-primary'),
				options.lineWidth,
				100 / 150
			)
			drawCircle(
				getCSSVariableValue('--bs-success'),
				options.lineWidth,
				100 / 250
			)
		}

		onMounted(() => {
			initChart()
		})

		return {
			getAssetPath,
		}
	},
})
</script>
