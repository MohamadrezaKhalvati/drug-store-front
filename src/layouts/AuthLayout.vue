<template>
	<div class="d-flex flex-column flex-lg-row flex-column-fluid">
		<div class="d-flex flex-column align-item-center flex-lg-row-fluid  w-lg-50 p-10 order-2 order-lg-1">
			<div class="d-flex flex-center flex-column flex-lg-row-fluid  ">
				<div class="w-lg-500px p-10 d-flex">
					<router-view />
				</div>
			</div>
		</div>
		<div class="d-flex flex-lg-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 symbol-label symbol-25px"
			:style="`background-image: url('${getAssetPath(
				'./../../public/media/auth/background.svg'
			)}')`" />
	</div>
</template>

<script lang="ts">
import { getAssetPath } from '@/core/helpers/assets';
import LayoutService from '@/core/services/LayoutService';
import { useBodyStore } from '@/stores/body';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
	name: 'AuthLayout',
	components: {},
	setup() {
		const store = useBodyStore()

		onMounted(() => {
			LayoutService.emptyElementClassesAndAttributes(document.body)

			store.addBodyClassname('app-blank')
			store.addBodyClassname('bg-body')
		})

		return {
			getAssetPath,
		}
	},
})
</script>
