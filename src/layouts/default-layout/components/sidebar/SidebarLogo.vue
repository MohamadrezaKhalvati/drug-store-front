<template>
	<div id="kt_app_sidebar_logo" class="app-sidebar-logo px-6">
		<router-link to="/">
			<div>
				<img alt="Logo" :src="getAssetPath('./../../../../../public/media/project-logo/MediPro.svg')"
					class="h-20px app-sidebar-logo-default mx-3">
			</div>
		</router-link>
	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets';
import type { defineComponent } from 'vue';
export default defineComponent({
	name: 'SideBarLogo',
	components: {},
	setup() {
		return {
			getAssetPath
		}
	}
})
</script>
