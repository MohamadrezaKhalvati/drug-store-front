<template>
	<div id="kt_app_sidebar_logo" class="app-sidebar-logo px-6">
		<router-link to="/">
			<div>
				<img v-if="themeMode === 'light' && layout === 'light-sidebar'" alt="Logo"
					:src="getAssetPath('./../../../../../public/media/project-logo/MediPro.svg')"
					class="h-20px app-sidebar-logo-default mx-3">
			</div>
		</router-link>
	</div>
</template>

<script setup lang="ts">
import { getAssetPath } from '@/core/helpers/assets';
import {
	layout,
	themeMode
} from '@/layouts/default-layout/config/helper';

</script>
