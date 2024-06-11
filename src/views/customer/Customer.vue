<template>
	<div>
		<CustomerList widgetClasses="mb-5 mb-xl-8" />
	</div>
</template>

<script>
import CustomerList from '@/components/customerList/CustomerList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Customer',
	components: { CustomerList },
	setup() {
		return {}
	}
})
</script>
