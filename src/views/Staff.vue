<template>
	<div>
		<StaffList widgetClasses="mb-5 mb-xl-8" />
	</div>
</template>

<script lang="ts">
import StaffList from '@/components/widgets/tables/StaffList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Staff',
	components: {
		StaffList,
	},
	setup() {

	}
})

</script>
