<template>
	<div id="kt_app_root" class="d-flex flex-column flex-root">
		<router-view />
	</div>
</template>

<script lang="ts">
import { useBodyStore } from '@/stores/body';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
	name: 'SystemLayout',
	components: {},
	setup() {
		const store = useBodyStore()

		onMounted(() => {
			store.addBodyClassname('app-blank')
			store.addBodyClassname('bgi-size-cover')
			store.addBodyClassname('bgi-position-center')
			store.addBodyClassname('bgi-no-repeat')
		})
	},
})
</script>
