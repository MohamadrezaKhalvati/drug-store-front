<template>
	<div class="card min-h-50">
		<div class="card-body  d-flex flex-column justify-content-between">
			<div>
				<div class="d-flex align-items-center">
					<span class="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">1476</span>
					<span class="badge badge-light-danger fs-base ">
						<KTIcon icon-name="arrow-down" icon-class="fs-5 me-2 text-danger ms-n1" />
						2.2%
					</span>
				</div>
				<div class="py-1">
					<span class="fw-semibold text-muted fs-7">{{ title }}</span>
				</div>
			</div>
			<div class="">
				<div class="d-flex flex-row justify-content-between">
					<span class="text-gray-900 fs-9 fw-bold me-2">1067 to goals</span>
					<span class="text-gray-900 fs-9 fw-bold me-2">{{ progress }}</span>
				</div>
				<div :class="`bg-${color}`" class="progress h-7px bg-opacity-50 mt-2">
					<div :class="`bg-${color}`" class="progress-bar" role="progressbar" :style="`width: ${progress}`"
						aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
				</div>
			</div>

		</div>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'OrderThisMonth',
	components: {},
	props: {
		widgetClasses: String,
		color: String,
		description: String,
		progress: String,
		title: String,
	},
	setup() {
		return {
			getAssetPath,
		}
	},
})
</script>
