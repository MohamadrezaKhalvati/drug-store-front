<template>
	<div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
		<div id="kt_app_toolbar_container" class="app-container d-flex flex-stack" :class="{
			'container-fluid': toolbarWidthFluid,
			'container-xxl': !toolbarWidthFluid,
		}">
			<KTPageTitle />
		</div>
	</div>
</template>

<script lang="ts">
import KTPageTitle from '@/layouts/default-layout/components/toolbar/PageTitle.vue';
import { toolbarWidthFluid } from '@/layouts/default-layout/config/helper';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LayoutToolbar',
	components: {
		KTPageTitle,
	},
	setup() {
		return {
			toolbarWidthFluid,
		}
	},
})
</script>