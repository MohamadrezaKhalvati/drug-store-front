<template>
	<div id="kt_app_root" class="d-flex flex-column flex-root app-root bg-color">
		<div id="kt_app_page" class="app-page flex-column flex-column-fluid">
			<KTHeader />
			<div id="kt_app_wrapper" class="app-wrapper flex-column flex-row-fluid">
				<KTSidebar />
				<div id="kt_app_main" class="app-main flex-column flex-row-fluid">
					<div class="d-flex flex-column flex-column-fluid">
						<KTToolbar />
						<div id="kt_app_content" class="app-content flex-column-fluid">
							<KTContent />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<KTDrawers />


</template>

<script lang="ts">
import { reinitializeComponents } from '@/core/plugins/keenthemes'
import LayoutService from '@/core/services/LayoutService'
import KTContent from '@/layouts/default-layout/components/content/Content.vue'
import KTHeader from '@/layouts/default-layout/components/header/Header.vue'
import KTSidebar from '@/layouts/default-layout/components/sidebar/Sidebar.vue'
import KTToolbar from '@/layouts/default-layout/components/toolbar/Toolbar.vue'
import {
	defineComponent,
	nextTick,
	onBeforeMount,
	onMounted,
	watch,
} from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	name: 'DefaultLayout',
	components: {
		KTHeader,
		KTSidebar,
		KTContent,
		KTToolbar,
	},
	setup() {
		const route = useRoute()

		onBeforeMount(() => {
			LayoutService.init()
		})

		onMounted(() => {
			nextTick(() => {
				reinitializeComponents()
			})
		})

		watch(
			() => route.path,
			() => {
				nextTick(() => {
					reinitializeComponents()
				})
			}
		)
	},
})
</script>


<style scoped>
.bg-color {
	background-color: #EBEBEB
}
</style>