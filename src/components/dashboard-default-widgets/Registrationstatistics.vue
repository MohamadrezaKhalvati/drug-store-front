<template>
	<div class="card card-flush" :class="className">

		<div class="card-header pt-5">
			<div class="card-title d-flex flex-column">
				<span class="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">{{
					stats
				}}</span>

				<span class="text-gray-500 pt-1 fw-semibold fs-6">{{
					description
				}}</span>
			</div>
		</div>

		<div class="card-body d-flex flex-column justify-content-end pe-0">
			<span class="fs-6 fw-bolder text-gray-800 d-block mb-2">Today’s Heroes</span>

			<div class="symbol-group symbol-hover flex-nowrap">
				<template v-for="(item, i) in profiles" :key="i">
					<div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" :title="item.name">
						<img v-if="item.src" alt="Pic" :src="item.src" />
						<span v-else class="symbol-label fw-bold"
							:class="`bg-${item.state} text-inverse-${item.state}`">{{ item.initials }}</span>
					</div>
				</template>
				<a href="#" class="symbol symbol-35px symbol-circle" data-bs-toggle="modal"
					data-bs-target="#kt_modal_view_users">
					<span class="symbol-label bg-dark text-gray-300 fs-8 fw-bold">+42</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
	name: "Registrationstatistics",
	components: {},
	props: {
		stats: { type: String, required: true },
		description: { type: String, required: true },
		className: { type: String, required: false },
	},
	setup() {
		const profiles = [
			{
				name: "Alan Warden",
				initials: "A",
				state: "warning",
			},
			{
				name: "Michael Eberon",
				src: getAssetPath("media/avatars/300-11.jpg"),
			},
			{
				name: "Susan Redwood",
				initials: "S",
				state: "primary",
			},
			{
				name: "Melody Macy",
				src: getAssetPath("media/avatars/300-2.jpg"),
			},
			{
				name: "Perry Matthew",
				initials: "P",
				state: "danger",
			},
			{
				name: "Barry Walter",
				src: getAssetPath("media/avatars/300-12.jpg"),
			},
		];

		return {
			profiles,
			getAssetPath,
		};
	},
});
</script>
