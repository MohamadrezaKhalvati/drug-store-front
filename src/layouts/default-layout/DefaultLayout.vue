<template>
	<div id="kt_app_root" class="d-flex flex-column flex-root app-root">
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
					<KTFooter />
				</div>
			</div>
		</div>
	</div>

	<KTDrawers />
	<KTScrollTop />
	<KTModals />
	<KTCustomize />
</template>

<script lang="ts">
import {
	defineComponent,
	nextTick,
	onBeforeMount,
	onMounted,
	watch,
} from 'vue'
import KTHeader from '@/layouts/default-layout/components/header/Header.vue'
import KTSidebar from '@/layouts/default-layout/components/sidebar/Sidebar.vue'
import KTContent from '@/layouts/default-layout/components/content/Content.vue'
import KTToolbar from '@/layouts/default-layout/components/toolbar/Toolbar.vue'
import KTFooter from '@/layouts/default-layout/components/footer/Footer.vue'
import KTDrawers from '@/layouts/default-layout/components/drawers/Drawers.vue'
import KTModals from '@/layouts/default-layout/components/modals/Modals.vue'
import KTScrollTop from '@/layouts/default-layout/components/extras/ScrollTop.vue'
import KTCustomize from '@/layouts/default-layout/components/extras/Customize.vue'
import { useRoute } from 'vue-router'
import { reinitializeComponents } from '@/core/plugins/keenthemes'
import LayoutService from '@/core/services/LayoutService'

export default defineComponent({
	name: 'DefaultLayout',
	components: {
		KTHeader,
		KTSidebar,
		KTContent,
		KTToolbar,
		KTFooter,
		KTDrawers,
		KTScrollTop,
		KTModals,
		KTCustomize,
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
