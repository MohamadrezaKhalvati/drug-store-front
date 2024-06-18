<template>
	<div class="app-navbar flex-shrink-0 ">



		<div class="app-navbar-item ms-1 ms-md-4">
			<div class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
				data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
				<KTIcon icon-name="messages" icon-class="fs-2" />
			</div>
			<KTNotificationMenu />
		</div>

		<div class="app-navbar-item ms-1 ms-md-3">
			<a href="#"
				class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px"
				data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent"
				data-kt-menu-placement="bottom-end">
				<KTIcon v-if="themeMode === 'light'" icon-name="night-day" icon-class="fs-2" />
				<KTIcon v-else icon-name="moon" icon-class="fs-2" />
			</a>
			<KTThemeModeSwitcher />
		</div>
		<div id="kt_header_user_menu_toggle" class="app-navbar-item ms-1 ms-md-4">
			<div class="cursor-pointer symbol symbol-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
				data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
				<img :src="getAssetPath('media/avatars/300-3.jpg')" class="rounded-3" alt="user">
			</div>
			<KTUserMenu />
		</div>
		<div class="app-navbar-item d-lg-none ms-2 me-n2">
			<div id="kt_app_header_menu_toggle" class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px">
				<KTIcon icon-name="element-4" icon-class="fs-2" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ThemeModeComponent } from '@/assets/ts/layout'
import { getAssetPath } from '@/core/helpers/assets'
import KTNotificationMenu from '@/layouts/default-layout/components/menus/NotificationsMenu.vue'
import KTThemeModeSwitcher from '@/layouts/default-layout/components/theme-mode/ThemeModeSwitcher.vue'
import { useThemeStore } from '@/stores/theme'
import { computed, defineComponent } from 'vue'

export default defineComponent({
	name: 'HeaderNavbar',
	components: {
		KTThemeModeSwitcher, KTNotificationMenu
	},
	setup() {
		const store = useThemeStore()

		const themeMode = computed(() => {
			if (store.mode === 'system') {
				return ThemeModeComponent.getSystemMode()
			}
			return store.mode
		})

		return {
			themeMode,
			getAssetPath,
		}
	},
})
</script>
