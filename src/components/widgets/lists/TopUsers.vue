<template>
	<div class="card" :class="widgetClasses">
		<div class="card-header pt-7 border-0">
			<h3 class="card-title align-items-start flex-column">
				<span class="card-label fw-bold text-gray-800">Top Users</span>
				<span class="text-gray-500 mt-1 fw-semibold fs-6">We love this guys</span>
			</h3>
		</div>
		<div class="card-body pt-8 ">
			<template v-for="(item, index) in list" :key="index">
				<div :class="{ 'mb-7': list.length - 1 !== index }" class="d-flex align-items-center flex-row">
					<div class="">
						<span class="text-gray-800 fw-bold fs-6 me-5">
							{{ index + 1 }}</span>
					</div>
					<div class="symbol symbol-50px me-5">

						<img :src="item.avatar" class="" alt="" />
					</div>

					<div class="flex-grow-1">
						<span class="text-gray-900 fw-bold text-hover-primary fs-6">{{
							item.name
						}}</span>

						<span class="text-muted d-block fw-semibold">{{
							item.description
						}}</span>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
	name: "TopUsers",
	components: {
		Dropdown2,
	},
	props: {
		widgetClasses: String,
	},
	setup() {
		const list = ref([
			{
				avatar: getAssetPath("media/avatars/300-6.jpg"),
				name: "Arthur Morgan",
				description: "smith@kpmg.com",
			},
			{
				avatar: getAssetPath("media/avatars/300-5.jpg"),
				name: "Arthur Morgan ",
				description: "smith@kpmg.com",
			},
			{
				avatar: getAssetPath("media/avatars/300-11.jpg"),
				name: "Arthur Morgan ",
				description: "smith@kpmg.com",
			},
			{
				avatar: getAssetPath("media/avatars/300-9.jpg"),
				name: "Arthur Morgan ",
				description: "smith@kpmg.com",
			},
			{
				avatar: getAssetPath("media/avatars/300-23.jpg"),
				name: "Arthur Morgan ",
				description: "smith@kpmg.com",
			},
			{
				avatar: getAssetPath("media/avatars/300-23.jpg"),
				name: "Arthur Morgan ",
				description: "smith@kpmg.com",
			},
		]);

		return {
			list,
			getAssetPath,
		};
	},
});
</script>
